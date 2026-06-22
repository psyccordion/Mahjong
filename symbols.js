/* symbols.js — Dibujos SVG de las fichas, en alta calidad.
   Estilo: ilustración pintada con degradados y contorno marcado, viewBox 100x100.
   Pensados para verse nítidos y muy distinguibles por personas mayores incluso a
   tamaño pequeño (bordes gruesos + colores saturados + sombreado suave). */
(function (root) {
  "use strict";

  var S = {};

  // Envuelve el contenido en un <svg> con defs comunes (sombra de contacto suave).
  function svg(defs, body) {
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' + (defs || '') + '</defs>' + body + '</svg>';
  }
  function lin(id, stops, attrs) {
    return '<linearGradient id="' + id + '" ' + (attrs || 'x1="0" y1="0" x2="0" y2="1"') + '>' + stops + '</linearGradient>';
  }
  function rad(id, stops, attrs) {
    return '<radialGradient id="' + id + '" ' + (attrs || 'cx="0.5" cy="0.4" r="0.6"') + '>' + stops + '</radialGradient>';
  }
  function stop(o, c) { return '<stop offset="' + o + '" stop-color="' + c + '"/>'; }

  // 🌷 Tulipán
  S.tulip = svg(
    lin('tuPet', stop(0, '#ff6f60') + stop('0.55', '#e53935') + stop(1, '#b71c1c')) +
    lin('tuStem', stop(0, '#66bb6a') + stop(1, '#2e7d32')),
    '<path d="M50 93 V54" stroke="url(#tuStem)" stroke-width="7" stroke-linecap="round" fill="none"/>' +
    '<path d="M50 76 C29 74 22 84 30 92 C45 90 50 84 50 76 Z" fill="url(#tuStem)" stroke="#2e7d32" stroke-width="2.5"/>' +
    '<path d="M50 68 C71 66 80 76 72 86 C56 84 50 78 50 68 Z" fill="url(#tuStem)" stroke="#2e7d32" stroke-width="2.5"/>' +
    '<path d="M50 60 C31 58 25 43 29 32 C33 43 44 37 44 26 C47 37 53 37 56 26 C56 37 67 43 71 32 C75 43 69 58 50 60 Z" fill="url(#tuPet)" stroke="#8e0000" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M50 58 C45 50 45 36 48 28" stroke="#ffb3a7" stroke-width="2.4" fill="none" stroke-linecap="round" opacity="0.7"/>'
  );

  // 🌸 Flor (cerezo)
  (function () {
    var petals = '';
    for (var k = 0; k < 5; k++) {
      petals += '<ellipse cx="50" cy="25" rx="13" ry="20" transform="rotate(' + (k * 72) + ' 50 50)"/>';
    }
    S.blossom = svg(
      rad('blPet', stop(0, '#ffd1e3') + stop('0.5', '#f47fae') + stop(1, '#e35a96'), 'cx="0.5" cy="0.5" r="0.55"') +
      rad('blCore', stop(0, '#fff3c4') + stop(1, '#f9a825'), 'cx="0.5" cy="0.45" r="0.6"'),
      '<g fill="url(#blPet)" stroke="#c2185b" stroke-width="2.5" stroke-linejoin="round">' + petals + '</g>' +
      '<circle cx="50" cy="50" r="11" fill="url(#blCore)" stroke="#f57f17" stroke-width="2.5"/>' +
      '<g fill="#f57f17"><circle cx="50" cy="44" r="1.7"/><circle cx="56" cy="52" r="1.7"/><circle cx="44" cy="52" r="1.7"/><circle cx="50" cy="53" r="1.7"/></g>'
    );
  })();

  // 🐟 Pez
  S.fish = svg(
    lin('fiBody', stop(0, '#ffd24d') + stop('0.55', '#ff9800') + stop(1, '#ef6c00')) +
    lin('fiFin', stop(0, '#ffb74d') + stop(1, '#e65100')),
    '<path d="M22 50 Q44 27 73 39 Q89 45 93 50 Q89 55 73 61 Q44 73 22 50 Z" fill="url(#fiBody)" stroke="#bf360c" stroke-width="3"/>' +
    '<path d="M24 50 L5 35 L10 50 L5 65 Z" fill="url(#fiFin)" stroke="#bf360c" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M50 36 Q57 28 66 35" fill="none" stroke="#bf360c" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M60 56 Q58 66 70 63" fill="url(#fiFin)" stroke="#bf360c" stroke-width="2.4"/>' +
    '<path d="M40 46 Q45 50 40 56 M50 44 Q56 50 50 58" stroke="#bf360c" stroke-width="2" fill="none" opacity="0.55"/>' +
    '<circle cx="77" cy="48" r="4.4" fill="#fff" stroke="#333" stroke-width="1.6"/>' +
    '<circle cx="78" cy="48" r="2.1" fill="#222"/><circle cx="76.4" cy="46.6" r="0.9" fill="#fff"/>'
  );

  // 🦈 Tiburón
  S.shark = svg(
    lin('shBody', stop(0, '#aab8c2') + stop('0.5', '#78909c') + stop(1, '#455a64')) +
    lin('shBelly', stop(0, '#ffffff') + stop(1, '#cfd8dc')),
    '<path d="M14 54 Q42 37 73 45 Q89 48 95 54 Q82 58 73 61 Q42 71 14 54 Z" fill="url(#shBody)" stroke="#263238" stroke-width="3"/>' +
    '<path d="M30 58 Q55 66 82 57 Q60 62 30 58 Z" fill="url(#shBelly)" stroke="#455a64" stroke-width="1.4"/>' +
    '<path d="M15 54 L2 40 L6 54 L2 68 Z" fill="url(#shBody)" stroke="#263238" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M48 44 L58 20 L64 47 Z" fill="url(#shBody)" stroke="#263238" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M40 60 L47 73 L54 59 Z" fill="url(#shBody)" stroke="#263238" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M77 56 L95 53 L81 62 Z" fill="#eceff1" stroke="#263238" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<polyline points="80,58 82,55 84,58 86,55 88,58" fill="none" stroke="#90a4ae" stroke-width="1.5"/>' +
    '<circle cx="74" cy="51" r="3.6" fill="#fff" stroke="#222" stroke-width="1.5"/>' +
    '<circle cx="74" cy="51" r="1.8" fill="#111"/>'
  );

  // 🐋 Ballena
  S.whale = svg(
    lin('whBody', stop(0, '#5eb3f0') + stop('0.5', '#1e88e5') + stop(1, '#0d47a1')) +
    lin('whBelly', stop(0, '#e3f2fd') + stop(1, '#90caf9')),
    '<path d="M22 58 Q27 35 58 35 Q87 35 91 54 Q91 67 70 69 Q40 73 22 58 Z" fill="url(#whBody)" stroke="#0a3578" stroke-width="3"/>' +
    '<path d="M22 58 Q8 45 2 49 Q12 58 6 68 Q17 65 22 58 Z" fill="url(#whBody)" stroke="#0a3578" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M28 61 Q52 71 76 63 Q56 67 28 61 Z" fill="url(#whBelly)" stroke="#0a3578" stroke-width="1.5"/>' +
    '<g stroke="#4fc3f7" stroke-width="4" stroke-linecap="round"><path d="M78 31 V17"/><path d="M70 33 L63 21"/><path d="M86 33 L93 21"/></g>' +
    '<circle cx="80" cy="50" r="3.6" fill="#fff" stroke="#222" stroke-width="1.5"/>' +
    '<circle cx="80" cy="50" r="1.8" fill="#111"/>'
  );

  // 🌻 Girasol
  (function () {
    var petals = '';
    for (var k = 0; k < 12; k++) {
      petals += '<ellipse cx="50" cy="15" rx="6.5" ry="15" transform="rotate(' + (k * 30) + ' 50 50)"/>';
    }
    S.sunflower = svg(
      lin('suPet', stop(0, '#ffe082') + stop('0.6', '#ffca28') + stop(1, '#f9a825')) +
      rad('suCore', stop(0, '#a1887f') + stop('0.6', '#6d4c41') + stop(1, '#4e342e'), 'cx="0.5" cy="0.42" r="0.6"'),
      '<g fill="url(#suPet)" stroke="#f57f17" stroke-width="2" stroke-linejoin="round">' + petals + '</g>' +
      '<circle cx="50" cy="50" r="17" fill="url(#suCore)" stroke="#3e2723" stroke-width="2.5"/>' +
      '<g fill="#3e2723"><circle cx="46" cy="46" r="1.6"/><circle cx="54" cy="46" r="1.6"/><circle cx="50" cy="50" r="1.6"/><circle cx="44" cy="54" r="1.6"/><circle cx="56" cy="54" r="1.6"/><circle cx="50" cy="57" r="1.6"/></g>'
    );
  })();

  // 🐬 Delfín (saltando a la derecha: pico, aleta dorsal curva, cola en aspas)
  S.dolphin = svg(
    lin('doBody', stop(0, '#cfd8dc') + stop('0.5', '#8fa3ad') + stop(1, '#4d626c')) +
    lin('doBelly', stop(0, '#f3f7f8') + stop(1, '#cfd8dc')),
    // aspas de la cola (izquierda)
    '<path d="M24 53 Q9 40 3 44 Q13 53 7 63 Q18 60 24 53 Z" fill="url(#doBody)" stroke="#37474f" stroke-width="2.6" stroke-linejoin="round"/>' +
    // aleta dorsal curva (barrida hacia atrás)
    '<path d="M52 30 C49 17 41 13 37 17 C44 21 49 26 53 33 Z" fill="url(#doBody)" stroke="#37474f" stroke-width="2.6" stroke-linejoin="round"/>' +
    // aleta pectoral
    '<path d="M46 52 C48 63 56 68 63 65 C56 60 52 55 51 50 Z" fill="url(#doBody)" stroke="#37474f" stroke-width="2.4" stroke-linejoin="round"/>' +
    // cuerpo: lomo arqueado, cabeza y melón a la derecha
    '<path d="M22 52 C20 37 37 27 58 27 C72 27 82 33 88 42 C82 44 75 45 69 46 C57 48 47 51 38 55 C30 58 25 58 22 56 C20 56 20 54 22 52 Z" fill="url(#doBody)" stroke="#37474f" stroke-width="3" stroke-linejoin="round"/>' +
    // pico (rostro) a la derecha
    '<path d="M84 41 C90 42 96 44 98 47 C94 49 88 48 82 46 Z" fill="url(#doBody)" stroke="#37474f" stroke-width="2.4" stroke-linejoin="round"/>' +
    // panza clara
    '<path d="M30 56 C42 53 54 51 68 48 C58 54 46 58 34 59 C31 59 29 58 30 56 Z" fill="url(#doBelly)" stroke="#90a4ae" stroke-width="1.2"/>' +
    // línea de la boca
    '<path d="M83 46 Q90 47 97 47" fill="none" stroke="#37474f" stroke-width="2" stroke-linecap="round"/>' +
    // ojo junto a la cabeza
    '<circle cx="78" cy="41" r="3" fill="#fff" stroke="#37474f" stroke-width="1.3"/><circle cx="78.5" cy="41" r="1.5" fill="#111"/>'
  );

  // ⭐ Estrella de mar
  S.starfish = svg(
    rad('stBody', stop(0, '#ffab73') + stop('0.55', '#ff7043') + stop(1, '#d84315'), 'cx="0.5" cy="0.5" r="0.6"'),
    '<path d="M50 7 L61 37 L94 38 L68 59 L78 92 L50 72 L22 92 L32 59 L6 38 L39 37 Z" fill="url(#stBody)" stroke="#bf360c" stroke-width="3.5" stroke-linejoin="round"/>' +
    '<g fill="#ffccbc" opacity="0.9"><circle cx="50" cy="32" r="2.2"/><circle cx="50" cy="42" r="2.2"/><circle cx="50" cy="52" r="2.2"/><circle cx="41" cy="48" r="2"/><circle cx="59" cy="48" r="2"/><circle cx="36" cy="60" r="1.8"/><circle cx="64" cy="60" r="1.8"/></g>'
  );

  // 🦀 Cangrejo
  S.crab = svg(
    lin('crShell', stop(0, '#ff7043') + stop('0.5', '#e53935') + stop(1, '#b71c1c')),
    '<g stroke="#8e1010" stroke-width="2.6" fill="url(#crShell)" stroke-linecap="round">' +
    '<line x1="26" y1="62" x2="9" y2="69"/><line x1="26" y1="67" x2="11" y2="79"/><line x1="29" y1="71" x2="18" y2="86"/>' +
    '<line x1="74" y1="62" x2="91" y2="69"/><line x1="74" y1="67" x2="89" y2="79"/><line x1="71" y1="71" x2="82" y2="86"/>' +
    '<ellipse cx="50" cy="62" rx="27" ry="18"/>' +
    '<path d="M25 51 Q10 42 6 51 Q4 60 15 58 Q7 54 17 51 Z"/>' +
    '<path d="M75 51 Q90 42 94 51 Q96 60 85 58 Q93 54 83 51 Z"/>' +
    '</g>' +
    '<path d="M37 60 Q50 66 63 60" fill="none" stroke="#ffd1c4" stroke-width="2.2" opacity="0.7"/>' +
    '<g><circle cx="42" cy="48" r="5" fill="#fff" stroke="#8e1010" stroke-width="2.2"/><circle cx="58" cy="48" r="5" fill="#fff" stroke="#8e1010" stroke-width="2.2"/>' +
    '<circle cx="42" cy="48" r="2.2" fill="#111"/><circle cx="58" cy="48" r="2.2" fill="#111"/></g>' +
    '<path d="M40 67 Q50 73 60 67" fill="none" stroke="#8e1010" stroke-width="2.2"/>'
  );

  // 🐢 Tortuga
  S.turtle = svg(
    rad('tuShell', stop(0, '#81c784') + stop('0.6', '#43a047') + stop(1, '#1b5e20'), 'cx="0.5" cy="0.42" r="0.62"') +
    lin('tuLimb', stop(0, '#81c784') + stop(1, '#388e3c')),
    '<g stroke="#1b5e20" stroke-width="2.6">' +
    '<circle cx="50" cy="21" r="9.5" fill="url(#tuLimb)"/>' +
    '<ellipse cx="25" cy="40" rx="9.5" ry="6.5" fill="url(#tuLimb)" transform="rotate(-35 25 40)"/>' +
    '<ellipse cx="75" cy="40" rx="9.5" ry="6.5" fill="url(#tuLimb)" transform="rotate(35 75 40)"/>' +
    '<ellipse cx="27" cy="73" rx="9.5" ry="6.5" fill="url(#tuLimb)" transform="rotate(35 27 73)"/>' +
    '<ellipse cx="73" cy="73" rx="9.5" ry="6.5" fill="url(#tuLimb)" transform="rotate(-35 73 73)"/>' +
    '<ellipse cx="50" cy="56" rx="31" ry="26" fill="url(#tuShell)"/>' +
    '</g>' +
    '<g fill="none" stroke="#0f3d12" stroke-width="2.6">' +
    '<path d="M50 33 V79 M22 50 L78 50 M28 67 L72 67"/>' +
    '<polygon points="50,45 61,53 57,65 43,65 39,53"/>' +
    '</g>' +
    '<g fill="#111"><circle cx="46" cy="20" r="1.8"/><circle cx="54" cy="20" r="1.8"/></g>'
  );

  // ───────────────────────── MÁS MAR ─────────────────────────

  // 🐠 Caballito de mar (cuerpo en S, hocico a la izquierda, COLA EN ESPIRAL)
  S.seahorse = svg(
    lin('shsB', stop(0, '#ffd54f') + stop('0.5', '#ffa726') + stop(1, '#e65100'), 'x1="0" y1="0" x2="1" y2="1"'),
    // cola en espiral — contorno oscuro (grosor decreciente hacia el centro)
    '<g fill="none" stroke="#bf360c" stroke-linecap="round">' +
    '<path d="M50 60 C66 62 72 80 56 88" stroke-width="11"/>' +
    '<path d="M56 88 C42 93 29 83 36 70" stroke-width="9"/>' +
    '<path d="M36 70 C41 61 54 64 51 75" stroke-width="6.5"/>' +
    '<path d="M51 75 C49 81 43 80 45 74" stroke-width="4"/>' +
    '</g>' +
    // cola en espiral — relleno naranja
    '<g fill="none" stroke="#ffa726" stroke-linecap="round">' +
    '<path d="M50 60 C66 62 72 80 56 88" stroke-width="7"/>' +
    '<path d="M56 88 C42 93 29 83 36 70" stroke-width="5.5"/>' +
    '<path d="M36 70 C41 61 54 64 51 75" stroke-width="3.5"/>' +
    '<path d="M51 75 C49 81 43 80 45 74" stroke-width="2"/>' +
    '</g>' +
    // cuerpo principal (cabeza + tronco)
    '<path d="M45 14 C57 13 64 22 61 32 C59 40 52 43 51 50 C50 55 53 58 52 63 C48 60 44 57 43 51 C41 43 47 39 47 31 C48 26 45 23 41 25 C42 18 40 15 45 14 Z" fill="url(#shsB)" stroke="#bf360c" stroke-width="3" stroke-linejoin="round"/>' +
    // hocico apuntando a la izquierda
    '<path d="M44 22 C34 19 26 22 21 19 C25 27 34 28 43 27 Z" fill="url(#shsB)" stroke="#bf360c" stroke-width="2.6" stroke-linejoin="round"/>' +
    // corona
    '<g stroke="#bf360c" stroke-width="2.6" stroke-linecap="round"><path d="M50 12 L51 5 M56 14 L60 8 M45 12 L43 5"/></g>' +
    // crestas del lomo (derecha)
    '<g fill="none" stroke="#bf360c" stroke-width="2" stroke-linecap="round"><path d="M55 30 q7 1 6 6 M53 42 q7 1 6 6"/></g>' +
    // ojo
    '<circle cx="46" cy="24" r="3.4" fill="#fff" stroke="#bf360c" stroke-width="1.6"/><circle cx="46" cy="24" r="1.6" fill="#111"/>'
  );

  // 🐙 Pulpo
  S.octopus = svg(
    rad('ocB', stop(0, '#e1aaff') + stop('0.5', '#ab47bc') + stop(1, '#6a1b9a'), 'cx="0.5" cy="0.4" r="0.65"'),
    '<g fill="url(#ocB)" stroke="#4a148c" stroke-width="2.6" stroke-linejoin="round">' +
    '<path d="M22 60 C12 66 8 80 14 88 C18 82 18 76 24 72 Z"/>' +
    '<path d="M32 66 C26 78 28 88 22 92 C22 84 24 78 30 70 Z"/>' +
    '<path d="M44 70 C42 82 38 90 42 94 C46 86 48 80 50 72 Z"/>' +
    '<path d="M56 70 C58 82 62 90 58 94 C54 86 52 80 50 72 Z"/>' +
    '<path d="M68 66 C74 78 72 88 78 92 C78 84 76 78 70 70 Z"/>' +
    '<path d="M78 60 C88 66 92 80 86 88 C82 82 82 76 76 72 Z"/>' +
    '<path d="M28 50 C28 28 72 28 72 50 C72 64 60 70 50 70 C40 70 28 64 28 50 Z"/>' +
    '</g>' +
    '<g><circle cx="42" cy="48" r="6" fill="#fff" stroke="#4a148c" stroke-width="2"/><circle cx="58" cy="48" r="6" fill="#fff" stroke="#4a148c" stroke-width="2"/>' +
    '<circle cx="43" cy="49" r="2.6" fill="#111"/><circle cx="57" cy="49" r="2.6" fill="#111"/></g>'
  );

  // 🪼 Medusa
  S.jellyfish = svg(
    rad('jeB', stop(0, '#fff3fa') + stop('0.5', '#f48fb1') + stop(1, '#ec407a'), 'cx="0.5" cy="0.45" r="0.6"'),
    '<path d="M18 50 C18 26 82 26 82 50 C82 56 78 58 72 58 L28 58 C22 58 18 56 18 50 Z" fill="url(#jeB)" stroke="#c2185b" stroke-width="3" stroke-linejoin="round"/>' +
    '<g stroke="#ec407a" stroke-width="3" fill="none" stroke-linecap="round">' +
    '<path d="M30 58 C28 70 34 78 30 90"/><path d="M40 58 C42 72 36 82 40 92"/>' +
    '<path d="M50 58 C48 72 54 82 50 94"/><path d="M60 58 C62 72 56 82 60 92"/>' +
    '<path d="M70 58 C72 70 66 78 70 90"/></g>' +
    '<g fill="#fff" opacity="0.7"><circle cx="32" cy="38" r="3"/><circle cx="58" cy="34" r="4"/></g>'
  );

  // 🐚 Concha
  S.shell = svg(
    rad('slB', stop(0, '#fff0f3') + stop('0.5', '#ffb3c6') + stop(1, '#ec6f9a'), 'cx="0.5" cy="0.9" r="0.95"'),
    '<path d="M50 18 C24 18 10 52 14 78 C30 86 70 86 86 78 C90 52 76 18 50 18 Z" fill="url(#slB)" stroke="#b03a63" stroke-width="3" stroke-linejoin="round"/>' +
    '<g stroke="#b03a63" stroke-width="2.4" fill="none" stroke-linecap="round">' +
    '<path d="M50 22 L50 80"/><path d="M50 22 C40 40 36 60 32 78"/><path d="M50 22 C60 40 64 60 68 78"/>' +
    '<path d="M50 24 C30 44 24 62 20 76"/><path d="M50 24 C70 44 76 62 80 76"/></g>' +
    '<path d="M42 18 q8 -10 16 0 C54 13 46 13 42 18 Z" fill="url(#slB)" stroke="#b03a63" stroke-width="2.6" stroke-linejoin="round"/>'
  );

  // 🪸 Coral
  S.coral = svg(
    lin('crlB', stop(0, '#ff8a65') + stop('0.5', '#ff5252') + stop(1, '#c62828')),
    '<g fill="url(#crlB)" stroke="#8e1010" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">' +
    '<path d="M50 92 C46 74 44 64 44 56 C44 46 38 42 38 32 C38 24 44 24 44 32 C44 40 50 42 50 52 C50 40 56 30 56 20 C56 12 62 14 60 22 C58 32 54 44 54 56 C54 64 56 74 56 92 Z"/>' +
    '<path d="M44 56 C40 50 30 50 28 40 C26 34 32 34 34 40 C36 48 44 48 44 56 Z"/>' +
    '<path d="M54 56 C58 48 70 50 72 38 C74 32 68 32 66 40 C64 48 54 48 54 56 Z"/>' +
    '</g>' +
    '<g fill="#ffd1c4"><circle cx="44" cy="40" r="2"/><circle cx="56" cy="34" r="2"/><circle cx="34" cy="42" r="1.8"/><circle cx="66" cy="42" r="1.8"/></g>'
  );

  // 🐡 Pez globo
  (function () {
    var sp = '';
    for (var k = 0; k < 12; k++) {
      sp += '<path d="M50 6 L46 22 L54 22 Z" transform="rotate(' + (k * 30) + ' 50 50)"/>';
    }
    S.puffer = svg(
      rad('puB', stop(0, '#fff59d') + stop('0.55', '#ffca28') + stop(1, '#f57f17'), 'cx="0.45" cy="0.42" r="0.62"'),
      '<g fill="url(#puB)" stroke="#bf6000" stroke-width="2.2" stroke-linejoin="round">' + sp + '</g>' +
      '<circle cx="50" cy="50" r="28" fill="url(#puB)" stroke="#bf6000" stroke-width="3"/>' +
      '<g fill="#bf6000" opacity="0.22"><circle cx="44" cy="62" r="2"/><circle cx="56" cy="62" r="2"/><circle cx="50" cy="67" r="2"/></g>' +
      '<g><circle cx="40" cy="46" r="5.5" fill="#fff" stroke="#bf6000" stroke-width="2"/><circle cx="60" cy="46" r="5.5" fill="#fff" stroke="#bf6000" stroke-width="2"/>' +
      '<circle cx="41" cy="47" r="2.6" fill="#111"/><circle cx="59" cy="47" r="2.6" fill="#111"/></g>' +
      '<path d="M44 58 Q50 63 56 58" fill="none" stroke="#bf6000" stroke-width="2.6" stroke-linecap="round"/>'
    );
  })();

  // ──────────────────────── MÁS PLANTAS ───────────────────────

  // 🌹 Rosa (flor en capas, vista superior)
  (function () {
    var CX = 50, CY = 40;
    var outer = '', mid = '';
    for (var k = 0; k < 6; k++) {
      outer += '<ellipse cx="' + CX + '" cy="' + (CY - 22) + '" rx="13" ry="15" transform="rotate(' + (k * 60) + ' ' + CX + ' ' + CY + ')"/>';
    }
    for (var m = 0; m < 6; m++) {
      mid += '<ellipse cx="' + CX + '" cy="' + (CY - 12) + '" rx="8.5" ry="10" transform="rotate(' + (m * 60 + 30) + ' ' + CX + ' ' + CY + ')"/>';
    }
    S.rose = svg(
      rad('roB', stop(0, '#ff8a80') + stop('0.5', '#e53935') + stop(1, '#b71c1c'), 'cx="0.5" cy="0.45" r="0.65"') +
      rad('roC', stop(0, '#e53935') + stop(1, '#7f0000'), 'cx="0.5" cy="0.5" r="0.6"') +
      lin('roS', stop(0, '#66bb6a') + stop(1, '#2e7d32')),
      '<path d="M50 94 V64" stroke="url(#roS)" stroke-width="6" stroke-linecap="round" fill="none"/>' +
      '<path d="M50 82 C33 78 26 86 35 94 C48 92 50 88 50 82 Z" fill="url(#roS)" stroke="#2e7d32" stroke-width="2.4"/>' +
      '<path d="M50 74 C67 70 74 78 65 86 C52 84 50 80 50 74 Z" fill="url(#roS)" stroke="#2e7d32" stroke-width="2.4"/>' +
      '<g fill="url(#roB)" stroke="#7f0000" stroke-width="2.4" stroke-linejoin="round">' + outer + '</g>' +
      '<g fill="url(#roC)" stroke="#7f0000" stroke-width="2" stroke-linejoin="round">' + mid + '</g>' +
      '<circle cx="50" cy="40" r="9" fill="url(#roC)" stroke="#7f0000" stroke-width="2"/>' +
      '<path d="M50 40 m-5 0 a5 5 0 1 1 10 0 a3 3 0 1 1 -6 0" fill="none" stroke="#ffcdd2" stroke-width="1.8" stroke-linecap="round"/>' +
      '<path d="M44 34 Q50 38 56 34" fill="none" stroke="#ffcdd2" stroke-width="1.6" opacity="0.7"/>'
    );
  })();

  // ──────────────────────────── FRUTAS ────────────────────────────

  // 🍎 Manzana
  S.apple = svg(
    rad('apB', stop(0, '#ff8a80') + stop('0.45', '#e53935') + stop(1, '#b71c1c'), 'cx="0.4" cy="0.38" r="0.72"') +
    lin('apL', stop(0, '#81c784') + stop(1, '#2e7d32')),
    '<path d="M50 30 C44 22 30 22 24 34 C16 50 24 78 38 86 C44 89 48 85 50 85 C52 85 56 89 62 86 C76 78 84 50 76 34 C70 22 56 22 50 30 Z" fill="url(#apB)" stroke="#7f0000" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M50 30 C50 25 50 21 50 17" stroke="#5d3a16" stroke-width="3.2" stroke-linecap="round" fill="none"/>' +
    '<path d="M52 24 C60 13 75 13 80 19 C73 30 60 30 52 24 Z" fill="url(#apL)" stroke="#2e7d32" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M36 42 C31 50 32 60 37 68" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity="0.5"/>'
  );

  // 🍓 Frutilla / fresa (roja intensa, forma orgánica)
  S.strawberry = svg(
    rad('swrB', stop(0, '#ff5a52') + stop('0.42', '#e21f2d') + stop(1, '#a00d1a'), 'cx="0.48" cy="0.34" r="0.82"') +
    lin('swrL', stop(0, '#7cc142') + stop(1, '#2e7d32')),
    '<path d="M50 91 C39 85 29 73 25 59 C22 48 26 39 35 36 C41 34 46 37 50 37 C54 37 59 34 65 36 C74 39 78 48 75 59 C71 73 61 85 50 91 Z" fill="url(#swrB)" stroke="#7a0b16" stroke-width="3" stroke-linejoin="round"/>' +
    '<g fill="url(#swrL)" stroke="#256528" stroke-width="1.8" stroke-linejoin="round">' +
    '<path d="M50 40 C50 31 43 25 35 25 C39 31 40 35 46 40 Z"/>' +
    '<path d="M50 40 C50 31 57 25 65 25 C61 31 60 35 54 40 Z"/>' +
    '<path d="M50 38 C45 30 45 23 50 18 C55 23 55 30 50 38 Z"/>' +
    '</g>' +
    '<g fill="#ffe082">' +
    '<ellipse cx="40" cy="49" rx="1.5" ry="2.3" transform="rotate(-15 40 49)"/><ellipse cx="50" cy="47" rx="1.5" ry="2.3"/><ellipse cx="60" cy="49" rx="1.5" ry="2.3" transform="rotate(15 60 49)"/>' +
    '<ellipse cx="35" cy="59" rx="1.5" ry="2.3" transform="rotate(-20 35 59)"/><ellipse cx="45" cy="59" rx="1.5" ry="2.3"/><ellipse cx="55" cy="59" rx="1.5" ry="2.3"/><ellipse cx="65" cy="59" rx="1.5" ry="2.3" transform="rotate(20 65 59)"/>' +
    '<ellipse cx="43" cy="70" rx="1.4" ry="2.1"/><ellipse cx="53" cy="72" rx="1.4" ry="2.1"/><ellipse cx="59" cy="68" rx="1.4" ry="2.1"/></g>' +
    '<path d="M37 47 C32 53 32 61 35 67" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity="0.4"/>'
  );

  // 🍒 Cerezas
  S.cherries = svg(
    rad('cheB', stop(0, '#ff5252') + stop('0.5', '#e53935') + stop(1, '#b71c1c'), 'cx="0.4" cy="0.35" r="0.7"') +
    lin('cheL', stop(0, '#66bb6a') + stop(1, '#2e7d32')),
    '<path d="M54 22 C40 38 32 54 34 68 M54 22 C66 40 70 56 66 68" fill="none" stroke="#6d4c41" stroke-width="3.4" stroke-linecap="round"/>' +
    '<path d="M54 22 C64 13 78 17 81 25 C71 31 58 30 54 22 Z" fill="url(#cheL)" stroke="#2e7d32" stroke-width="2.2" stroke-linejoin="round"/>' +
    '<circle cx="33" cy="74" r="15" fill="url(#cheB)" stroke="#7f0000" stroke-width="3"/>' +
    '<circle cx="67" cy="74" r="15" fill="url(#cheB)" stroke="#7f0000" stroke-width="3"/>' +
    '<circle cx="28" cy="69" r="3.4" fill="#fff" opacity="0.55"/><circle cx="62" cy="69" r="3.4" fill="#fff" opacity="0.55"/>'
  );

  // 🍇 Uvas
  (function () {
    var balls = '';
    var rows = [[50], [42, 58], [34, 50, 66], [42, 58], [50]];
    for (var r = 0; r < rows.length; r++) {
      for (var c = 0; c < rows[r].length; c++) {
        balls += '<circle cx="' + rows[r][c] + '" cy="' + (40 + r * 11) + '" r="8" fill="url(#grB)" stroke="#4a148c" stroke-width="2"/>';
      }
    }
    S.grapes = svg(
      rad('grB', stop(0, '#ce93d8') + stop('0.5', '#8e24aa') + stop(1, '#4a148c'), 'cx="0.4" cy="0.32" r="0.85"') +
      lin('grL', stop(0, '#81c784') + stop(1, '#2e7d32')),
      '<path d="M50 40 V24" stroke="#6d4c41" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M50 26 C60 16 76 18 80 26 C70 34 56 32 50 26 Z" fill="url(#grL)" stroke="#2e7d32" stroke-width="2.2" stroke-linejoin="round"/>' +
      balls
    );
  })();

  // 🍊 Naranja
  S.orange = svg(
    rad('orgB', stop(0, '#ffd54f') + stop('0.4', '#ffa726') + stop(1, '#ef6c00'), 'cx="0.4" cy="0.38" r="0.72"') +
    lin('orgL', stop(0, '#81c784') + stop(1, '#2e7d32')),
    '<circle cx="50" cy="56" r="30" fill="url(#orgB)" stroke="#bf360c" stroke-width="3"/>' +
    '<circle cx="50" cy="28" r="3" fill="#bf6000"/>' +
    '<path d="M54 28 C62 18 76 20 80 26 C72 34 60 34 54 28 Z" fill="url(#orgL)" stroke="#2e7d32" stroke-width="2.2" stroke-linejoin="round"/>' +
    '<g fill="#bf360c" opacity="0.22"><circle cx="40" cy="50" r="1.6"/><circle cx="58" cy="48" r="1.6"/><circle cx="50" cy="62" r="1.6"/><circle cx="64" cy="60" r="1.6"/><circle cx="38" cy="64" r="1.6"/></g>' +
    '<ellipse cx="40" cy="44" rx="7" ry="4" fill="#fff" opacity="0.4" transform="rotate(-30 40 44)"/>'
  );

  // 🍌 Plátano (media luna gruesa y llena)
  S.banana = svg(
    lin('banB', stop(0, '#fff48a') + stop('0.5', '#ffd21f') + stop(1, '#eda100')),
    // cuerpo lleno: borde exterior (abajo) bien curvo, interior (arriba) deja buen grosor
    '<path d="M14 30 C12 56 30 80 58 82 C72 83 84 78 90 68 ' +
    'C82 70 70 68 60 64 C46 58 38 46 36 32 ' +
    'C35 24 28 22 22 26 C18 28 15 28 14 30 Z" fill="url(#banB)" stroke="#b07d12" stroke-width="3" stroke-linejoin="round"/>' +
    // tallo (punta superior izquierda)
    '<path d="M14 30 C11 23 14 18 20 19 C22 23 20 28 17 31 Z" fill="#7a5a2e" stroke="#4e342e" stroke-width="1.8" stroke-linejoin="round"/>' +
    // punta marrón (inferior derecha)
    '<path d="M90 68 C94 66 96 70 93 74 C89 76 85 73 84 70 Z" fill="#5d4037" stroke="#4e342e" stroke-width="1.6" stroke-linejoin="round"/>' +
    // facetas de la cáscara
    '<path d="M24 34 C24 56 40 74 64 76" fill="none" stroke="#c79320" stroke-width="2.2" stroke-linecap="round" opacity="0.55"/>' +
    '<path d="M20 36 C20 58 38 78 62 80" fill="none" stroke="#fff6b8" stroke-width="2.4" stroke-linecap="round" opacity="0.6"/>'
  );

  // ════════════════════ 15 FICHAS NUEVAS ════════════════════
  //   Flores, plantas y mar — para más variedad y más reto.

  // 🌺 Hibisco
  (function () {
    var petals = '';
    for (var k = 0; k < 5; k++) petals += '<path d="M50 50 C40 28 36 13 50 9 C64 13 60 28 50 50 Z" transform="rotate(' + (k * 72) + ' 50 50)"/>';
    S.hibiscus = svg(
      rad('hiB', stop(0, '#ffd1dc') + stop('0.5', '#ff5a8a') + stop(1, '#d81b60'), 'cx="0.5" cy="0.5" r="0.62"') +
      lin('hiSt', stop(0, '#ffd54f') + stop(1, '#f9a825')),
      '<g fill="url(#hiB)" stroke="#ad1457" stroke-width="2.4" stroke-linejoin="round">' + petals + '</g>' +
      '<circle cx="50" cy="50" r="8.5" fill="#c2185b"/>' +
      '<path d="M50 50 C53 64 56 78 58 90" fill="none" stroke="url(#hiSt)" stroke-width="3.4" stroke-linecap="round"/>' +
      '<g fill="#ffca28" stroke="#f57f17" stroke-width="1"><circle cx="58" cy="90" r="3"/><circle cx="54" cy="80" r="2.4"/><circle cx="60" cy="82" r="2.4"/><circle cx="56" cy="72" r="2.2"/></g>'
    );
  })();

  // 🪷 Loto
  S.lotus = svg(
    lin('lotP', stop(0, '#ffe0ec') + stop('0.5', '#f88fb6') + stop(1, '#e84d8a')),
    '<g fill="url(#lotP)" stroke="#c2185b" stroke-width="2.2" stroke-linejoin="round">' +
    '<path d="M50 72 C30 64 16 44 22 30 C36 38 46 54 50 72 Z"/>' +
    '<path d="M50 72 C70 64 84 44 78 30 C64 38 54 54 50 72 Z"/>' +
    '<path d="M50 72 C36 60 28 38 38 24 C46 36 50 54 50 72 Z"/>' +
    '<path d="M50 72 C64 60 72 38 62 24 C54 36 50 54 50 72 Z"/>' +
    '<path d="M50 72 C44 52 46 30 50 18 C54 30 56 52 50 72 Z"/>' +
    '</g>' +
    '<path d="M10 74 Q50 82 90 74" fill="none" stroke="#4fc3f7" stroke-width="3" stroke-linecap="round" opacity="0.8"/>'
  );

  // 🌼 Amapola
  (function () {
    var petals = '';
    for (var k = 0; k < 5; k++) petals += '<ellipse cx="50" cy="28" rx="15" ry="18" transform="rotate(' + (k * 72) + ' 50 50)"/>';
    S.poppy = svg(
      rad('popB', stop(0, '#ff7043') + stop('0.5', '#f4361e') + stop(1, '#c1121f'), 'cx="0.5" cy="0.5" r="0.6"'),
      '<g fill="url(#popB)" stroke="#7a0000" stroke-width="2.4" stroke-linejoin="round">' + petals + '</g>' +
      '<circle cx="50" cy="50" r="10" fill="#1a1a1a"/>' +
      '<g stroke="#000" stroke-width="1.6" stroke-linecap="round"><path d="M50 50 V39 M50 50 V61 M50 50 H39 M50 50 H61 M50 50 L42 42 M50 50 L58 58 M50 50 L58 42 M50 50 L42 58"/></g>' +
      '<g fill="#1a1a1a"><circle cx="50" cy="39" r="1.7"/><circle cx="50" cy="61" r="1.7"/><circle cx="39" cy="50" r="1.7"/><circle cx="61" cy="50" r="1.7"/></g>'
    );
  })();

  // ⚜ Lirio
  (function () {
    var petals = '';
    for (var k = 0; k < 6; k++) petals += '<path d="M50 50 C42 26 44 9 50 5 C56 9 58 26 50 50 Z" transform="rotate(' + (k * 60) + ' 50 50)"/>';
    S.lily = svg(
      lin('lilP', stop(0, '#ffffff') + stop(1, '#ffdce7')) +
      lin('lilSt', stop(0, '#ffca28') + stop(1, '#ef6c00')),
      '<g fill="url(#lilP)" stroke="#e07a9c" stroke-width="2.2" stroke-linejoin="round">' + petals + '</g>' +
      '<g stroke="url(#lilSt)" stroke-width="2.6" stroke-linecap="round" fill="none"><path d="M50 50 L42 36 M50 50 L58 36 M50 50 L50 33"/></g>' +
      '<g fill="#ef6c00"><circle cx="42" cy="36" r="2.4"/><circle cx="58" cy="36" r="2.4"/><circle cx="50" cy="33" r="2.4"/></g>' +
      '<circle cx="50" cy="50" r="4" fill="#ffb300"/>'
    );
  })();

  // 💜 Lavanda
  (function () {
    function buds(x0, y0, x1, y1, n) {
      var s = '';
      for (var i = 0; i <= n; i++) {
        var t = i / n, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
        s += '<ellipse cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="' + (4 - t * 1.4).toFixed(1) + '" ry="3.4" fill="url(#lvB)" stroke="#5a1380" stroke-width="1.3"/>';
      }
      return s;
    }
    S.lavender = svg(
      lin('lvS', stop(0, '#81c784') + stop(1, '#2e7d32')) +
      rad('lvB', stop(0, '#d6a4ff') + stop('0.55', '#9c4dcc') + stop(1, '#6a1b9a'), 'cx="0.5" cy="0.4" r="0.85"'),
      '<g fill="none" stroke="url(#lvS)" stroke-width="3.4" stroke-linecap="round"><path d="M42 92 C40 74 40 60 44 50"/><path d="M50 92 V46"/><path d="M58 92 C60 74 60 60 56 50"/></g>' +
      buds(44, 50, 40, 16, 7) + buds(50, 46, 50, 12, 8) + buds(56, 50, 60, 16, 7)
    );
  })();

  // 🌴 Palmera
  S.palmtree = svg(
    lin('ptT', stop(0, '#bcaaa4') + stop('0.5', '#8d6e63') + stop(1, '#5d4037')) +
    lin('ptL', stop(0, '#aed581') + stop('0.5', '#66bb6a') + stop(1, '#2e7d32')),
    '<path d="M46 90 C44 70 46 54 50 44 C54 54 56 70 54 90 Z" fill="url(#ptT)" stroke="#4e342e" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<g stroke="#4e342e" stroke-width="1.6" opacity="0.55"><path d="M46 78 H54 M46 68 H55 M47 58 H54 M48 50 H53"/></g>' +
    '<g fill="url(#ptL)" stroke="#1b5e20" stroke-width="2" stroke-linejoin="round">' +
    '<path d="M50 42 C34 30 18 30 8 38 C22 36 32 40 48 46 Z"/>' +
    '<path d="M50 42 C66 30 82 30 92 38 C78 36 68 40 52 46 Z"/>' +
    '<path d="M50 42 C40 24 26 16 16 16 C28 22 36 32 48 44 Z"/>' +
    '<path d="M50 42 C60 24 74 16 84 16 C72 22 64 32 52 44 Z"/>' +
    '<path d="M50 42 C48 23 50 11 52 7 C54 16 52 30 52 44 Z"/>' +
    '</g>' +
    '<g fill="#5d4037" stroke="#3e2723" stroke-width="1.4"><circle cx="46" cy="46" r="3.4"/><circle cx="54" cy="47" r="3.4"/></g>'
  );

  // 🍀 Trébol (4 hojas en forma de corazón, redondeadas)
  (function () {
    // hoja-corazón con la punta en el centro (50,50) y los lóbulos redondeados hacia afuera
    var leaf = 'M50 50 C33 34 33 16 44 16 C48 16 50 20 50 23 C50 20 52 16 56 16 C67 16 67 34 50 50 Z';
    var g = '';
    for (var k = 0; k < 4; k++) g += '<path d="' + leaf + '" transform="rotate(' + (k * 90) + ' 50 50)"/>';
    S.clover = svg(
      rad('cvB', stop(0, '#9ccc55') + stop('0.6', '#56af34') + stop(1, '#2e7d32'), 'cx="0.5" cy="0.5" r="0.8"'),
      '<path d="M50 52 C54 68 54 82 50 93" stroke="#2e7d32" stroke-width="3.4" stroke-linecap="round" fill="none"/>' +
      '<g fill="url(#cvB)" stroke="#1b5e20" stroke-width="2.4" stroke-linejoin="round">' + g + '</g>' +
      '<circle cx="50" cy="50" r="2.6" fill="#1b5e20"/>'
    );
  })();

  // 🍄 Hongo
  S.mushroom = svg(
    rad('muC', stop(0, '#ff7043') + stop('0.5', '#f4361e') + stop(1, '#c1121f'), 'cx="0.5" cy="0.3" r="0.85"') +
    lin('muS', stop(0, '#fff8e1') + stop(1, '#e0d6b8')),
    '<path d="M40 58 C40 78 38 86 36 90 L64 90 C62 86 60 78 60 58 Z" fill="url(#muS)" stroke="#a99e7e" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M16 58 C16 34 38 18 50 18 C62 18 84 34 84 58 C84 62 80 64 74 64 L26 64 C20 64 16 62 16 58 Z" fill="url(#muC)" stroke="#7a0000" stroke-width="3" stroke-linejoin="round"/>' +
    '<g fill="#fff"><ellipse cx="34" cy="38" rx="5" ry="4"/><ellipse cx="55" cy="32" rx="6" ry="5"/><ellipse cx="68" cy="46" rx="5" ry="4"/><ellipse cx="46" cy="52" rx="4" ry="3"/></g>'
  );

  // 🌱 Brote (el tallo nace de la tierra; no flota)
  S.sprout = svg(
    lin('spL', stop(0, '#9ccc65') + stop('0.5', '#66bb6a') + stop(1, '#2e7d32')) +
    lin('spD', stop(0, '#8d6e63') + stop(1, '#5d4037')),
    // montículo de tierra al fondo
    '<path d="M16 86 C16 73 84 73 84 86 C84 91 16 91 16 86 Z" fill="url(#spD)" stroke="#4e342e" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<ellipse cx="50" cy="75" rx="34" ry="7" fill="#6d4c41" stroke="#4e342e" stroke-width="1.6"/>' +
    // tallo que sube desde la tierra
    '<path d="M50 77 C50 66 50 57 50 48" stroke="#2e7d32" stroke-width="4.6" stroke-linecap="round" fill="none"/>' +
    // dos hojas unidas al tallo
    '<path d="M50 58 C36 58 26 48 26 35 C40 37 50 46 50 58 Z" fill="url(#spL)" stroke="#1b5e20" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M50 56 C64 56 74 46 74 33 C60 35 50 44 50 56 Z" fill="url(#spL)" stroke="#1b5e20" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M50 52 V48" stroke="#1b5e20" stroke-width="2" stroke-linecap="round"/>'
  );

  // 🍁 Hoja de arce
  S.mapleleaf = svg(
    lin('mlB', stop(0, '#ffb74d') + stop('0.5', '#ff7043') + stop(1, '#d84315')),
    '<path d="M50 8 L56 22 L66 16 L62 30 L78 30 L68 40 L90 48 L72 52 L80 66 L62 60 L64 78 L52 66 L50 92 L48 66 L36 78 L38 60 L20 66 L28 52 L10 48 L32 40 L22 30 L38 30 L34 16 L44 22 Z" fill="url(#mlB)" stroke="#8a2d0a" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<g stroke="#8a2d0a" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.6"><path d="M50 92 V40 M50 52 L70 50 M50 52 L30 50 M50 44 L64 34 M50 44 L36 34"/></g>'
  );

  // 🌿 Alga
  S.seaweed = svg(
    lin('swdB', stop(0, '#80cbc4') + stop('0.5', '#26a69a') + stop(1, '#00695c')),
    '<g fill="none" stroke="url(#swdB)" stroke-width="7" stroke-linecap="round">' +
    '<path d="M38 92 C30 78 46 70 36 56 C28 44 44 36 38 22"/>' +
    '<path d="M58 92 C68 76 52 66 64 52 C74 40 58 32 64 18"/>' +
    '<path d="M48 92 C46 80 52 72 49 62"/>' +
    '</g>' +
    '<g fill="#80cbc4"><circle cx="38" cy="22" r="3.4"/><circle cx="64" cy="18" r="3.4"/></g>'
  );

  // 🦑 Calamar
  S.squid = svg(
    lin('sqB', stop(0, '#80deea') + stop('0.5', '#26c6da') + stop(1, '#00838f'), 'x1="0" y1="0" x2="0" y2="1"'),
    '<path d="M40 18 C30 16 26 24 32 30 C36 26 40 24 42 22 Z M60 18 C70 16 74 24 68 30 C64 26 60 24 58 22 Z" fill="url(#sqB)" stroke="#005662" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M50 8 C40 18 36 34 36 50 C36 58 42 64 50 64 C58 64 64 58 64 50 C64 34 60 18 50 8 Z" fill="url(#sqB)" stroke="#005662" stroke-width="3" stroke-linejoin="round"/>' +
    '<g fill="none" stroke="url(#sqB)" stroke-width="4.5" stroke-linecap="round">' +
    '<path d="M42 62 C38 74 34 82 30 92"/><path d="M46 64 C44 76 42 84 40 94"/><path d="M50 64 V94"/><path d="M54 64 C56 76 58 84 60 94"/><path d="M58 62 C62 74 66 82 70 92"/>' +
    '</g>' +
    '<g><circle cx="44" cy="46" r="4.5" fill="#fff" stroke="#005662" stroke-width="1.8"/><circle cx="56" cy="46" r="4.5" fill="#fff" stroke="#005662" stroke-width="1.8"/>' +
    '<circle cx="44" cy="46" r="2.2" fill="#111"/><circle cx="56" cy="46" r="2.2" fill="#111"/></g>'
  );

  // 🪸 Erizo de mar (cuerpo oscuro con MUCHAS púas finas de distinto largo)
  (function () {
    var n = 30, longSp = '', shortSp = '';
    for (var k = 0; k < n; k++) {
      var a = k * (360 / n);
      var L = (k % 2 === 0) ? 46 : 40;                 // púas largas alternadas
      longSp += '<line x1="50" y1="50" x2="50" y2="' + (50 - L) + '" transform="rotate(' + a + ' 50 50)"/>';
      shortSp += '<line x1="50" y1="50" x2="50" y2="' + (50 - 30) + '" transform="rotate(' + (a + 360 / n / 2) + ' 50 50)"/>'; // cortas intercaladas
    }
    S.urchin = svg(
      rad('urB', stop(0, '#9575cd') + stop('0.45', '#5e35b1') + stop(1, '#280e6e'), 'cx="0.42" cy="0.38" r="0.78"'),
      '<g stroke="#4527a0" stroke-width="1.8" stroke-linecap="round">' + shortSp + '</g>' +
      '<g stroke="#311b92" stroke-width="2.2" stroke-linecap="round">' + longSp + '</g>' +
      '<circle cx="50" cy="50" r="19" fill="url(#urB)" stroke="#1a0a52" stroke-width="2.6"/>' +
      '<g fill="#b39ddb" opacity="0.85"><circle cx="44" cy="45" r="1.8"/><circle cx="56" cy="47" r="1.8"/><circle cx="47" cy="55" r="1.8"/><circle cx="57" cy="54" r="1.5"/></g>' +
      '<circle cx="50" cy="50" r="4.5" fill="#2a1170" opacity="0.6"/>'
    );
  })();

  // 🐌 Caracol (caparazón con espiral limpia generada por puntos)
  (function () {
    var cx = 62, cy = 52, turns = 2.6, R = 21, steps = 90, pts = [];
    for (var i = 0; i <= steps; i++) {
      var t = i / steps;
      var ang = t * turns * 2 * Math.PI - Math.PI / 2;
      var r = R * (1 - t * 0.93);
      pts.push((i ? 'L' : 'M') + (cx + r * Math.cos(ang)).toFixed(1) + ' ' + (cy + r * Math.sin(ang)).toFixed(1));
    }
    var spiral = pts.join(' ');
    S.snail = svg(
      lin('snB', stop(0, '#cdbfb6') + stop('0.5', '#a1887f') + stop(1, '#6d4c41')) +
      rad('snSh', stop(0, '#ffd9a0') + stop('0.5', '#ef9a3d') + stop(1, '#a85d18'), 'cx="0.42" cy="0.4" r="0.78"'),
      // pie/cuerpo
      '<path d="M10 82 C8 73 20 71 32 72 C40 59 60 57 72 67 C66 63 52 67 52 78 C52 84 40 86 26 86 C16 86 10 86 10 82 Z" fill="url(#snB)" stroke="#4e342e" stroke-width="2.6" stroke-linejoin="round"/>' +
      // cabeza
      '<path d="M10 82 C6 78 6 70 12 68 C18 70 18 78 16 82 Z" fill="url(#snB)" stroke="#4e342e" stroke-width="2.4" stroke-linejoin="round"/>' +
      // tentáculos con ojos
      '<g stroke="#4e342e" stroke-width="2.4" fill="none" stroke-linecap="round"><path d="M9 70 C6 62 5 56 8 51 M16 70 C16 60 17 54 20 50"/></g>' +
      '<g fill="#5d4438"><circle cx="8" cy="50" r="3"/><circle cx="20" cy="49" r="3"/></g>' +
      '<g fill="#fff"><circle cx="7.3" cy="49.2" r="1.1"/><circle cx="19.3" cy="48.2" r="1.1"/></g>' +
      '<g fill="#111"><circle cx="8" cy="50" r="1.2"/><circle cx="20" cy="49" r="1.2"/></g>' +
      // caparazón
      '<circle cx="62" cy="52" r="22" fill="url(#snSh)" stroke="#7a3f10" stroke-width="3"/>' +
      '<path d="' + spiral + '" fill="none" stroke="#9a5616" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="' + spiral + '" fill="none" stroke="#7a3f10" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>'
    );
  })();

  // ⚓ Ancla (metal con contorno oscuro para buen contraste)
  S.anchor = svg(
    lin('ancB', stop(0, '#cfd8dc') + stop('0.5', '#90a4ae') + stop(1, '#546e7a')),
    '<g fill="none" stroke="#2f3e46" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M50 30 V80"/><path d="M24 56 C24 80 50 90 50 90 C50 90 76 80 76 56"/><path d="M34 40 H66"/></g>' +
    '<g fill="none" stroke="url(#ancB)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M50 30 V80"/><path d="M24 56 C24 80 50 90 50 90 C50 90 76 80 76 56"/><path d="M34 40 H66"/></g>' +
    '<circle cx="50" cy="22" r="9" fill="none" stroke="#2f3e46" stroke-width="9"/>' +
    '<circle cx="50" cy="22" r="9" fill="none" stroke="url(#ancB)" stroke-width="5"/>' +
    '<g fill="url(#ancB)" stroke="#2f3e46" stroke-width="2.2" stroke-linejoin="round"><path d="M24 56 L12 50 L19 67 Z"/><path d="M76 56 L88 50 L81 67 Z"/></g>'
  );

  // ═══════════════════ PINGÜINOS (3 especies) ═══════════════════

  // 🐧 Pingüino (clásico)
  S.penguin = svg(
    lin('pgB', stop(0, '#37474f') + stop('0.5', '#263238') + stop(1, '#11171a')) +
    lin('pgW', stop(0, '#ffffff') + stop(1, '#e3eaed')) +
    lin('pgO', stop(0, '#ffca28') + stop(1, '#ef6c00')),
    '<g fill="url(#pgO)" stroke="#bf6000" stroke-width="1.8" stroke-linejoin="round"><path d="M40 86 L33 95 L45 92 Z"/><path d="M60 86 L67 95 L55 92 Z"/></g>' +
    '<path d="M50 9 C31 9 23 27 23 48 C23 73 34 91 50 91 C66 91 77 73 77 48 C77 27 69 9 50 9 Z" fill="url(#pgB)" stroke="#0a0e10" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M50 40 C39 40 35 51 35 62 C35 76 42 86 50 86 C58 86 65 76 65 62 C65 51 61 40 50 40 Z" fill="url(#pgW)"/>' +
    '<path d="M25 46 C18 54 20 68 27 75 C30 66 30 55 31 47 Z" fill="url(#pgB)" stroke="#0a0e10" stroke-width="2"/>' +
    '<path d="M75 46 C82 54 80 68 73 75 C70 66 70 55 69 47 Z" fill="url(#pgB)" stroke="#0a0e10" stroke-width="2"/>' +
    '<g fill="#fff"><circle cx="43" cy="32" r="5"/><circle cx="57" cy="32" r="5"/></g>' +
    '<g fill="#111"><circle cx="44" cy="33" r="2.4"/><circle cx="56" cy="33" r="2.4"/></g>' +
    '<path d="M44 39 L56 39 L50 47 Z" fill="url(#pgO)" stroke="#bf6000" stroke-width="1.6" stroke-linejoin="round"/>'
  );

  // 🐧 Pingüino rey (parches naranjas en las orejas)
  S.kingpenguin = svg(
    lin('kpB', stop(0, '#3a4750') + stop('0.5', '#222d33') + stop(1, '#0e1417')) +
    lin('kpW', stop(0, '#ffffff') + stop(1, '#e3eaed')) +
    lin('kpO', stop(0, '#ffd54f') + stop(1, '#ef6c00')),
    '<g fill="url(#kpO)" stroke="#bf6000" stroke-width="1.8" stroke-linejoin="round"><path d="M41 87 L34 96 L46 93 Z"/><path d="M59 87 L66 96 L54 93 Z"/></g>' +
    '<path d="M50 9 C33 9 26 27 26 48 C26 73 36 91 50 91 C64 91 74 73 74 48 C74 27 67 9 50 9 Z" fill="url(#kpB)" stroke="#0a0e10" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M50 42 C40 42 37 52 37 62 C37 76 43 86 50 86 C57 86 63 76 63 62 C63 52 60 42 50 42 Z" fill="url(#kpW)"/>' +
    // parches auriculares naranjas
    '<path d="M36 30 C29 31 27 42 34 47 C39 43 39 35 39 30 Z" fill="url(#kpO)"/>' +
    '<path d="M64 30 C71 31 73 42 66 47 C61 43 61 35 61 30 Z" fill="url(#kpO)"/>' +
    // pechera amarillenta
    '<path d="M44 44 C42 50 42 56 45 60 C48 56 52 56 55 60 C58 56 58 50 56 44 Z" fill="url(#kpO)" opacity="0.55"/>' +
    '<g fill="#fff"><circle cx="44" cy="30" r="3.6"/><circle cx="56" cy="30" r="3.6"/></g>' +
    '<g fill="#111"><circle cx="44.5" cy="31" r="2"/><circle cx="55.5" cy="31" r="2"/></g>' +
    '<path d="M46 37 C49 41 51 41 54 37 C52 44 48 44 46 37 Z" fill="url(#kpO)" stroke="#bf6000" stroke-width="1.4" stroke-linejoin="round"/>'
  );

  // 🐧 Pingüino de penacho amarillo (rockhopper)
  S.rockhopper = svg(
    lin('rhB', stop(0, '#37474f') + stop('0.5', '#263238') + stop(1, '#11171a')) +
    lin('rhW', stop(0, '#ffffff') + stop(1, '#e3eaed')) +
    lin('rhO', stop(0, '#ffca28') + stop(1, '#ef6c00')),
    '<g fill="url(#rhO)" stroke="#bf6000" stroke-width="1.8" stroke-linejoin="round"><path d="M40 86 L33 95 L45 92 Z"/><path d="M60 86 L67 95 L55 92 Z"/></g>' +
    '<path d="M50 14 C32 14 24 30 24 50 C24 74 34 91 50 91 C66 91 76 74 76 50 C76 30 68 14 50 14 Z" fill="url(#rhB)" stroke="#0a0e10" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M50 42 C39 42 35 52 35 62 C35 76 42 86 50 86 C58 86 65 76 65 62 C65 52 61 42 50 42 Z" fill="url(#rhW)"/>' +
    // penacho de plumas amarillas (cejas) saliendo a los lados
    '<g stroke="#ffd600" stroke-width="3" stroke-linecap="round"><path d="M41 28 L22 20 M43 26 L25 15 M45 25 L34 10"/><path d="M59 28 L78 20 M57 26 L75 15 M55 25 L66 10"/></g>' +
    '<g stroke="#f9a825" stroke-width="2" stroke-linecap="round"><path d="M42 29 L26 23 M58 29 L74 23"/></g>' +
    // ojos rojos
    '<g fill="#fff"><circle cx="43" cy="36" r="5"/><circle cx="57" cy="36" r="5"/></g>' +
    '<g fill="#d32f2f"><circle cx="44" cy="37" r="2.4"/><circle cx="56" cy="37" r="2.4"/></g>' +
    '<path d="M44 43 L56 43 L50 51 Z" fill="url(#rhO)" stroke="#bf6000" stroke-width="1.6" stroke-linejoin="round"/>'
  );

  // 🍉 Sandía (rebanada semicircular con cáscara gruesa)
  S.watermelon = svg(
    lin('wmF', stop(0, '#ff8a80') + stop('0.5', '#ff4d4d') + stop(1, '#e02d2d')) +
    lin('wmR', stop(0, '#7cc142') + stop(1, '#2e7d32')),
    '<path d="M10 30 A40 40 0 0 0 90 30 Z" fill="url(#wmR)" stroke="#1b5e20" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M16 30 A34 34 0 0 0 84 30 Z" fill="#eafbe7"/>' +
    '<path d="M20 30 A30 30 0 0 0 80 30 Z" fill="url(#wmF)" stroke="#c62828" stroke-width="1.6"/>' +
    '<g fill="#3e2723"><ellipse cx="50" cy="40" rx="2" ry="3"/><ellipse cx="38" cy="40" rx="2" ry="3" transform="rotate(18 38 40)"/><ellipse cx="62" cy="40" rx="2" ry="3" transform="rotate(-18 62 40)"/><ellipse cx="44" cy="50" rx="2" ry="3"/><ellipse cx="56" cy="50" rx="2" ry="3"/><ellipse cx="50" cy="54" rx="1.8" ry="2.8"/></g>'
  );

  // 🍍 Piña
  S.pineapple = svg(
    lin('pinB', stop(0, '#ffe082') + stop('0.5', '#ffca28') + stop(1, '#f57f17')) +
    lin('pinL', stop(0, '#81c784') + stop(1, '#2e7d32')),
    '<g fill="url(#pinL)" stroke="#1b5e20" stroke-width="2.2" stroke-linejoin="round">' +
    '<path d="M50 40 L36 18 L46 28 Z"/><path d="M50 40 L64 18 L54 28 Z"/><path d="M50 36 L44 10 L50 24 L56 10 Z"/>' +
    '</g>' +
    '<ellipse cx="50" cy="62" rx="24" ry="28" fill="url(#pinB)" stroke="#a1610a" stroke-width="3"/>' +
    '<g fill="none" stroke="#a1610a" stroke-width="1.8" opacity="0.8">' +
    '<path d="M34 46 L66 62 M34 58 L66 74 M34 70 L60 86 M66 46 L34 62 M66 58 L34 74 M66 70 L40 86"/></g>'
  );

  // 🌵 Cactus
  S.cactus = svg(
    lin('caB', stop(0, '#81c784') + stop('0.5', '#43a047') + stop(1, '#1b5e20')),
    '<path d="M36 78 L64 78 L60 94 L40 94 Z" fill="#e8744a" stroke="#a8431f" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<rect x="33" y="71" width="34" height="9" rx="3" fill="#f08a5d" stroke="#a8431f" stroke-width="2.4"/>' +
    '<path d="M44 79 C40 79 40 40 50 40 C60 40 60 79 56 79 Z" fill="url(#caB)" stroke="#0f3d12" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M44 60 C44 50 34 52 34 60 C34 68 40 68 44 66 Z" fill="url(#caB)" stroke="#0f3d12" stroke-width="2.8" stroke-linejoin="round"/>' +
    '<path d="M56 54 C56 44 66 46 66 54 C66 62 60 62 56 60 Z" fill="url(#caB)" stroke="#0f3d12" stroke-width="2.8" stroke-linejoin="round"/>' +
    '<g stroke="#0f3d12" stroke-width="1.6" stroke-linecap="round"><path d="M50 50 v-4 M46 58 h-3 M54 58 h3 M50 68 v-3"/></g>' +
    '<circle cx="50" cy="40" r="5.5" fill="#ff5da2" stroke="#c2185b" stroke-width="2"/>'
  );

  // 🌼 Margarita
  (function () {
    var petals = '';
    for (var k = 0; k < 10; k++) {
      petals += '<ellipse cx="50" cy="20" rx="6" ry="15" transform="rotate(' + (k * 36) + ' 50 50)"/>';
    }
    S.daisy = svg(
      lin('daP', stop(0, '#ffffff') + stop(1, '#dfe9ee')) +
      rad('daC', stop(0, '#fff176') + stop(1, '#f9a825'), 'cx="0.5" cy="0.45" r="0.6"'),
      '<g fill="url(#daP)" stroke="#9fb1b8" stroke-width="2.2" stroke-linejoin="round">' + petals + '</g>' +
      '<circle cx="50" cy="50" r="13" fill="url(#daC)" stroke="#f57f17" stroke-width="2.4"/>' +
      '<g fill="#f57f17"><circle cx="47" cy="47" r="1.5"/><circle cx="53" cy="47" r="1.5"/><circle cx="50" cy="51" r="1.5"/><circle cx="46" cy="54" r="1.5"/><circle cx="54" cy="54" r="1.5"/></g>'
    );
  })();

  // 🍃 Hoja
  S.leaf = svg(
    lin('leB', stop(0, '#aed581') + stop('0.5', '#66bb6a') + stop(1, '#2e7d32'), 'x1="0" y1="0" x2="1" y2="1"'),
    '<path d="M22 78 C20 40 50 14 84 18 C82 54 54 82 22 78 Z" fill="url(#leB)" stroke="#1b5e20" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M26 74 C44 52 64 36 80 22" fill="none" stroke="#1b5e20" stroke-width="3" stroke-linecap="round"/>' +
    '<g stroke="#1b5e20" stroke-width="2.2" fill="none" stroke-linecap="round">' +
    '<path d="M40 60 Q44 50 58 46 M34 66 Q40 54 52 52 M52 48 Q58 42 70 40 M46 56 Q54 48 66 46"/></g>' +
    '<path d="M22 78 C18 82 16 86 14 90" fill="none" stroke="#1b5e20" stroke-width="3" stroke-linecap="round"/>'
  );

  // ──────────────── MÁS PECES Y MAR (3ª tanda) ────────────────

  // 🤡🐠 Pez payaso (Nemo) — cabeza a la izquierda, cola a la derecha
  S.clownfish = svg(
    lin('clB', stop(0, '#ffb74d') + stop('0.5', '#ff7f24') + stop(1, '#e65100')) +
    '<clipPath id="clClip"><path d="M84 50 Q60 26 28 36 Q12 41 6 50 Q12 59 28 64 Q60 74 84 50 Z"/></clipPath>',
    '<path d="M84 50 L96 38 L92 50 L96 62 Z" fill="url(#clB)" stroke="#7a2e00" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M84 50 Q60 26 28 36 Q12 41 6 50 Q12 59 28 64 Q60 74 84 50 Z" fill="url(#clB)" stroke="#7a2e00" stroke-width="3"/>' +
    '<g clip-path="url(#clClip)" fill="#fff" stroke="#1a1a1a" stroke-width="2">' +
    '<path d="M34 33 Q30 50 35 70 L27 70 Q23 50 28 31 Z"/>' +
    '<path d="M54 27 Q49 50 55 74 L45 74 Q41 50 47 27 Z"/>' +
    '<path d="M72 32 Q68 50 73 68 L65 68 Q61 50 66 30 Z"/>' +
    '</g>' +
    '<path d="M50 33 Q42 24 32 30 Q40 34 44 39 Z" fill="url(#clB)" stroke="#7a2e00" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M50 65 Q44 73 36 69 Q43 66 46 61 Z" fill="url(#clB)" stroke="#7a2e00" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M8 52 Q14 56 20 54" fill="none" stroke="#7a2e00" stroke-width="2" stroke-linecap="round"/>' +
    '<circle cx="22" cy="48" r="4.5" fill="#fff" stroke="#1a1a1a" stroke-width="1.8"/><circle cx="22" cy="48" r="2.2" fill="#111"/>'
  );

  // 🐟 Pez ángel
  S.angelfish = svg(
    lin('anB', stop(0, '#fff59d') + stop('0.5', '#ffd54f') + stop(1, '#f9a825')) +
    '<clipPath id="anClip"><path d="M50 16 C66 26 74 42 74 54 C74 72 62 84 50 86 C38 84 26 72 26 54 C26 42 34 26 50 16 Z"/></clipPath>',
    '<path d="M50 16 C56 8 64 4 70 8 C62 16 56 26 52 34 Z" fill="url(#anB)" stroke="#b8860b" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M50 86 C54 92 62 96 68 92 C60 86 54 78 52 70 Z" fill="url(#anB)" stroke="#b8860b" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M74 54 L92 44 L86 54 L92 64 Z" fill="url(#anB)" stroke="#b8860b" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M50 16 C66 26 74 42 74 54 C74 72 62 84 50 86 C38 84 26 72 26 54 C26 42 34 26 50 16 Z" fill="url(#anB)" stroke="#b8860b" stroke-width="3"/>' +
    '<g clip-path="url(#anClip)" stroke="#6d4c41" stroke-width="4.5" opacity="0.5"><path d="M40 12 V92 M52 10 V94 M64 14 V90"/></g>' +
    '<circle cx="42" cy="42" r="4.5" fill="#fff" stroke="#3e2723" stroke-width="1.8"/><circle cx="42" cy="42" r="2.2" fill="#111"/>'
  );

  // 🐠 Pez azul (cirujano, tipo Dory)
  S.bluetang = svg(
    lin('btB', stop(0, '#4fc3f7') + stop('0.5', '#1e88e5') + stop(1, '#1565c0')),
    '<path d="M80 50 L96 36 L92 50 L96 64 Z" fill="#ffca28" stroke="#bf6000" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M14 50 Q34 28 64 34 Q80 38 84 50 Q80 62 64 66 Q34 72 14 50 Z" fill="url(#btB)" stroke="#0d47a1" stroke-width="3"/>' +
    '<path d="M40 36 Q54 44 50 62 Q42 60 37 52 Q36 42 40 36 Z" fill="#10243b" opacity="0.85"/>' +
    '<circle cx="26" cy="46" r="4" fill="#fff" stroke="#0d47a1" stroke-width="1.6"/><circle cx="26" cy="46" r="2" fill="#111"/>' +
    '<path d="M15 53 Q20 57 26 55" fill="none" stroke="#0d47a1" stroke-width="2" stroke-linecap="round"/>'
  );

  // 🦈→🪁 Raya / manta
  S.ray = svg(
    rad('raB', stop(0, '#90a4ae') + stop('0.5', '#546e7a') + stop(1, '#37474f'), 'cx="0.5" cy="0.35" r="0.72"') +
    lin('raBl', stop(0, '#eceff1') + stop(1, '#b0bec5')),
    '<path d="M50 22 C30 24 8 44 6 56 C18 58 26 54 34 56 C40 64 46 66 50 66 C54 66 60 64 66 56 C74 54 82 58 94 56 C92 44 70 24 50 22 Z" fill="url(#raB)" stroke="#263238" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M44 22 C42 14 40 10 44 8 M56 22 C58 14 60 10 56 8" fill="none" stroke="#263238" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M50 30 C40 32 34 44 40 52 C46 56 54 56 60 52 C66 44 60 32 50 30 Z" fill="url(#raBl)" opacity="0.5"/>' +
    '<path d="M50 64 C50 78 52 88 54 96" fill="none" stroke="#263238" stroke-width="3.4" stroke-linecap="round"/>' +
    '<g fill="#111"><circle cx="42" cy="30" r="2.4"/><circle cx="58" cy="30" r="2.4"/></g>' +
    '<g fill="#cfd8dc" opacity="0.7"><circle cx="28" cy="46" r="2"/><circle cx="72" cy="46" r="2"/><circle cx="50" cy="44" r="2"/></g>'
  );

  // 🦞 Langosta
  S.lobster = svg(
    lin('loB', stop(0, '#ff7043') + stop('0.5', '#e53935') + stop(1, '#b71c1c')),
    '<g stroke="#7a0000" stroke-width="2.4" stroke-linecap="round"><path d="M40 46 L30 54 M40 54 L30 62 M60 46 L70 54 M60 54 L70 62 M34 40 L40 46 M66 40 L60 46"/></g>' +
    '<g stroke="#7a0000" stroke-width="2.4" fill="none" stroke-linecap="round"><path d="M44 32 C38 20 34 14 28 9 M56 32 C62 20 66 14 72 9"/></g>' +
    '<g fill="url(#loB)" stroke="#7a0000" stroke-width="2.6" stroke-linejoin="round">' +
    '<path d="M32 34 C20 26 10 30 13 40 C16 48 24 45 28 41 C21 43 20 36 26 36 Z"/>' +
    '<path d="M68 34 C80 26 90 30 87 40 C84 48 76 45 72 41 C79 43 80 36 74 36 Z"/>' +
    '<ellipse cx="50" cy="46" rx="13" ry="16"/>' +
    '<path d="M44 60 H56 L55 70 H45 Z"/>' +
    '<path d="M45 70 H55 L53 80 H47 Z"/>' +
    '<path d="M47 80 C42 88 50 93 50 93 C50 93 58 88 53 80 Z"/>' +
    '</g>' +
    '<g fill="#111"><circle cx="46" cy="37" r="2.2"/><circle cx="54" cy="37" r="2.2"/></g>'
  );

  // 🗡️🐟 Pez espada
  S.swordfish = svg(
    lin('swB', stop(0, '#90caf9') + stop('0.5', '#42a5f5') + stop(1, '#1565c0')) +
    lin('swBl', stop(0, '#e3f2fd') + stop(1, '#90caf9')),
    '<path d="M30 50 L2 47 L2 53 Z" fill="#5d4037" stroke="#3e2723" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M28 50 Q50 30 78 42 Q90 47 94 50 Q90 53 78 58 Q50 70 28 50 Z" fill="url(#swB)" stroke="#0d47a1" stroke-width="3"/>' +
    '<path d="M34 54 Q56 64 80 56 Q58 60 34 54 Z" fill="url(#swBl)" stroke="#1565c0" stroke-width="1.4"/>' +
    '<path d="M52 37 C56 23 62 19 66 23 C61 31 59 37 59 41 Z" fill="url(#swB)" stroke="#0d47a1" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M86 50 L98 40 L94 50 L98 60 Z" fill="url(#swB)" stroke="#0d47a1" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<circle cx="40" cy="48" r="3.6" fill="#fff" stroke="#0d47a1" stroke-width="1.6"/><circle cx="40" cy="48" r="1.8" fill="#111"/>'
  );

  var names = {
    tulip: "Tulipán", blossom: "Flor", fish: "Pez", shark: "Tiburón", whale: "Ballena",
    sunflower: "Girasol", dolphin: "Delfín", starfish: "Estrella", crab: "Cangrejo", turtle: "Tortuga",
    seahorse: "Caballito", octopus: "Pulpo", jellyfish: "Medusa", shell: "Concha", coral: "Coral",
    puffer: "Pez globo", rose: "Rosa", cactus: "Cactus", daisy: "Margarita", leaf: "Hoja",
    clownfish: "Pez payaso", angelfish: "Pez ángel", bluetang: "Pez azul", ray: "Raya",
    lobster: "Langosta", swordfish: "Pez espada",
    apple: "Manzana", strawberry: "Frutilla", cherries: "Cerezas", grapes: "Uvas",
    orange: "Naranja", banana: "Plátano", watermelon: "Sandía", pineapple: "Piña",
    hibiscus: "Hibisco", lotus: "Loto", poppy: "Amapola", lily: "Lirio", lavender: "Lavanda",
    palmtree: "Palmera", clover: "Trébol", mushroom: "Hongo", sprout: "Brote", mapleleaf: "Hoja de arce",
    seaweed: "Alga", squid: "Calamar", urchin: "Erizo", snail: "Caracol", anchor: "Ancla",
    penguin: "Pingüino", kingpenguin: "Pingüino rey", rockhopper: "Penacho amarillo"
  };

  var api = { svg: S, names: names };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.GameSymbols = api;

})(typeof window !== "undefined" ? window : globalThis);
