/* ============================================================
   game-core.js — Núcleo lógico del Mahjong (sin UI).
   Funciones puras, testeables en Node y reutilizadas en el navegador.
   Coordenadas en "medias celdas": cada ficha ocupa 2x2 medias celdas.
   ============================================================ */
(function (root) {
  "use strict";

  // IDs de símbolos. Los 5 primeros son los pedidos (siempre presentes).
  var SYMBOL_IDS = [
    "tulip", "blossom", "fish", "shark", "whale",   // obligatorios
    "sunflower", "dolphin", "starfish", "crab", "turtle", // extra (1ª tanda)
    // más mar y más plantas (2ª tanda) → más variedad = más reto
    "seahorse", "octopus", "jellyfish", "shell", "coral", "puffer", // mar
    "rose", "cactus", "daisy", "leaf",                              // plantas
    // más peces de otras especies (3ª tanda)
    "clownfish", "angelfish", "bluetang", "ray", "lobster", "swordfish",
    // frutas (4ª tanda)
    "apple", "strawberry", "cherries", "grapes", "orange", "banana", "watermelon", "pineapple",
    // flores, plantas y mar (5ª tanda) → mucha más variedad
    "hibiscus", "lotus", "poppy", "lily", "lavender", "palmtree", "clover", "mushroom",
    "sprout", "mapleleaf", "seaweed", "squid", "urchin", "snail", "anchor",
    // pingüinos (6ª tanda)
    "penguin", "kingpenguin", "rockhopper"
  ];
  var ALWAYS = ["tulip", "blossom", "fish", "shark", "whale"];
  var TOTAL_LEVELS = 60;

  // ---- Dificultad por nivel ----
  // El tablero son DOS montoncitos (pilas) apilados en 3 o 4 capas hacia arriba.
  // La base de cada montoncito crece con el nivel y las capas alternan 3/4,
  // de modo que la dificultad sube de a poco pero siempre hay reto y solución.
  var PILES = 2;          // dos montoncitos
  var PILE_GAP = 2;       // separación entre montoncitos (medias celdas)
  function levelShape(L) {
    var baseW = Math.min(4 + Math.floor((L - 1) / 4), 6); // ancho de cada montoncito
    var baseH = Math.min(4 + Math.floor((L - 1) / 5), 6); // alto de cada montoncito
    var layers = (L % 3 === 1) ? 3 : 4;                    // casi siempre 4 capas (más reto)
    return { baseW: baseW, baseH: baseH, layers: layers, piles: PILES, gap: PILE_GAP };
  }

  // ---- Un montoncito: pirámide escalonada (cada ficha superior descansa sobre la unión de 4) ----
  function buildPile(baseW, baseH, layers, ox, oy, out) {
    for (var z = 0; z < layers; z++) {
      var ww = baseW - z, hh = baseH - z;
      if (ww <= 0 || hh <= 0) break;
      var off = z; // desplaza media celda por capa (descansa sobre las uniones)
      for (var i = 0; i < ww; i++) {
        for (var j = 0; j < hh; j++) {
          out.push({ gx: ox + off + 2 * i, gy: oy + off + 2 * j, z: z });
        }
      }
    }
  }

  // ---- Tablero = dos montoncitos lado a lado ----
  function buildPositions(L) {
    var s = levelShape(L);
    var pos = [];
    // ancho de un montoncito en medias celdas (base + desplazamiento de capas)
    var pileSpan = 2 * s.baseW + (s.layers - 1);
    for (var p = 0; p < s.piles; p++) {
      buildPile(s.baseW, s.baseH, s.layers, p * (pileSpan + s.gap), 0, pos);
    }
    if (pos.length % 2 === 1) pos.pop(); // debe ser par
    return pos;
  }

  // ---- ¿Ficha libre? ----
  function overlapsXY(a, b) { return Math.abs(a.gx - b.gx) < 2 && Math.abs(a.gy - b.gy) < 2; }
  function isCovered(t, tiles) {
    for (var k = 0; k < tiles.length; k++) {
      var o = tiles[k];
      if (o.removed || o === t) continue;
      if (o.z === t.z + 1 && overlapsXY(o, t)) return true;
    }
    return false;
  }
  function blockedLeft(t, tiles) {
    for (var k = 0; k < tiles.length; k++) {
      var o = tiles[k];
      if (o.removed || o === t) continue;
      if (o.z === t.z && o.gx === t.gx - 2 && Math.abs(o.gy - t.gy) < 2) return true;
    }
    return false;
  }
  function blockedRight(t, tiles) {
    for (var k = 0; k < tiles.length; k++) {
      var o = tiles[k];
      if (o.removed || o === t) continue;
      if (o.z === t.z && o.gx === t.gx + 2 && Math.abs(o.gy - t.gy) < 2) return true;
    }
    return false;
  }
  function isFree(t, tiles) {
    if (t.removed || isCovered(t, tiles)) return false;
    return !blockedLeft(t, tiles) || !blockedRight(t, tiles);
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // Paleta de cada nivel: buscamos MUCHA variedad (pocas fichas iguales).
  // El nº de dibujos distintos se calcula según los pares del tablero y un
  // objetivo de copias por dibujo que baja al avanzar (más reto = más distintos).
  function paletteForLevel(L) {
    var pairs = buildPositions(L).length / 2;
    var avail = SYMBOL_IDS.length;
    // copias (pares) por dibujo: niveles bajos ~3, altos ~2 → niveles altos casi sin repetir
    var copies = Math.max(2, 3 - Math.floor((L - 1) / 18));
    var variety = Math.ceil(pairs / copies);
    variety = Math.max(ALWAYS.length + 3, Math.min(variety, avail));
    var pool = SYMBOL_IDS.filter(function (s) { return ALWAYS.indexOf(s) === -1; });
    shuffle(pool);
    return ALWAYS.concat(pool.slice(0, Math.max(0, variety - ALWAYS.length)));
  }

  // Bolsa de símbolos repartida de forma pareja (round-robin barajado),
  // para que ningún dibujo se repita de más y haya muchas piezas distintas.
  function makeSymbolBag(nPairs, palette) {
    var bag = [];
    for (var i = 0; i < nPairs; i++) bag.push(palette[i % palette.length]);
    return shuffle(bag);
  }

  // ---- Asignar símbolos garantizando solución (derribo de arriba hacia abajo) ----
  // Quita pares de fichas LIBRES, prefiriendo capas altas. El orden de generación
  // es, por construcción, una solución forward válida. Reintenta si se atasca.
  function assignSolvable(tiles, palette) {
    for (var attempt = 0; attempt < 400; attempt++) {
      for (var i = 0; i < tiles.length; i++) { tiles[i].removed = false; tiles[i].symbol = null; }
      var bag = makeSymbolBag(tiles.length / 2, palette); // reparto parejo de dibujos
      var order = [], left = tiles.length, stuck = false;
      while (left > 0) {
        var free = tiles.filter(function (t) { return !t.removed && isFree(t, tiles); });
        if (free.length < 2) { stuck = true; break; }
        shuffle(free);
        free.sort(function (a, b) { return b.z - a.z; }); // preferir capas altas
        var a = free[0], b = free[1];
        var sym = bag[order.length];
        a.symbol = b.symbol = sym;
        a.removed = b.removed = true;
        order.push([a, b]);
        left -= 2;
      }
      if (!stuck) {
        for (var m = 0; m < tiles.length; m++) tiles[m].removed = false; // restaurar
        return order;
      }
    }
    for (var n = 0; n < tiles.length; n++) tiles[n].removed = false;
    return null; // no debería ocurrir
  }

  // Crea las fichas de un nivel listas para jugar.
  function makeLevel(L) {
    var positions = buildPositions(L);
    var tiles = positions.map(function (p, idx) {
      return { id: idx, gx: p.gx, gy: p.gy, z: p.z, symbol: null, removed: false };
    });
    assignSolvable(tiles, paletteForLevel(L));
    return tiles;
  }

  // ¿Existe alguna jugada (dos libres iguales)?
  function hasMove(tiles) {
    var free = tiles.filter(function (t) { return !t.removed && isFree(t, tiles); });
    var seen = {};
    for (var i = 0; i < free.length; i++) {
      if (seen[free[i].symbol]) return true;
      seen[free[i].symbol] = true;
    }
    return false;
  }

  // Devuelve un par de fichas libres iguales (pista) o null.
  function findHint(tiles) {
    var free = tiles.filter(function (t) { return !t.removed && isFree(t, tiles); });
    for (var i = 0; i < free.length; i++)
      for (var j = i + 1; j < free.length; j++)
        if (free[i].symbol === free[j].symbol) return [free[i], free[j]];
    return null;
  }

  // ============================================================
  //  Puntuación (inspirada en el Mahjong solitario clásico, pero
  //  SIN reloj y amable: premia emparejar el mismo dibujo en cadena
  //  y terminar sin ayudas; las ayudas restan poco y nunca baja de 0).
  // ============================================================
  var SCORE = {
    base: 100,            // puntos por par
    chainCap: 6,          // multiplicador de cadena máximo (x6)
    hintPenalty: 50,      // 💡 Pista
    shufflePenalty: 100,  // 🔀 Mezclar (manual)
    clearBonus: 200,      // completar el nivel
    noHintBonus: 150,     // terminar sin pistas
    noShuffleBonus: 150   // terminar sin mezclar (manual)
  };
  // Puntos por par según la cadena (pares seguidos del MISMO dibujo): 100, 200, 300… hasta x6.
  function matchScore(chain) {
    var c = Math.min(Math.max(chain | 0, 1), SCORE.chainCap);
    return SCORE.base * c;
  }
  // Bonus al completar el nivel según ayudas usadas.
  function levelBonus(stats) {
    stats = stats || {};
    var b = SCORE.clearBonus;
    if (!stats.hints) b += SCORE.noHintBonus;
    if (!stats.shuffles) b += SCORE.noShuffleBonus;
    return b;
  }

  var api = {
    SYMBOL_IDS: SYMBOL_IDS, ALWAYS: ALWAYS, TOTAL_LEVELS: TOTAL_LEVELS,
    levelShape: levelShape, buildPositions: buildPositions, buildPile: buildPile,
    isCovered: isCovered, blockedLeft: blockedLeft, blockedRight: blockedRight,
    isFree: isFree, shuffle: shuffle, paletteForLevel: paletteForLevel,
    assignSolvable: assignSolvable, makeLevel: makeLevel,
    hasMove: hasMove, findHint: findHint,
    SCORE: SCORE, matchScore: matchScore, levelBonus: levelBonus
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.GameCore = api;

})(typeof window !== "undefined" ? window : globalThis);
