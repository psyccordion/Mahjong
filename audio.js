/* audio.js — Sonido generado con Web Audio API (sin archivos).
   Efectos suaves + música ambiental relajante. Con silenciador. */
(function (root) {
  "use strict";

  var ctx = null, master = null, sfxGain = null, musicGain = null;
  var muted = (localStorage.getItem("ll_muted") === "1");
  var musicTimer = null, musicOn = false;

  function ensure() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 1; master.connect(ctx.destination);
    sfxGain = ctx.createGain(); sfxGain.gain.value = 0.25; sfxGain.connect(master);
    musicGain = ctx.createGain(); musicGain.gain.value = 0.10; musicGain.connect(master);
  }

  function resume() { ensure(); if (ctx && ctx.state === "suspended") ctx.resume(); }

  function tone(freq, start, dur, type, gain, peak) {
    if (!ctx) return;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    var t = ctx.currentTime + start;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak || 0.5, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(gain || sfxGain);
    o.start(t); o.stop(t + dur + 0.05);
  }

  // ---- Marimba: golpe de mazo con armónico brillante y decaimiento rápido ----
  function marimba(freq, start, dur, gain, peak) {
    if (!ctx) return;
    var t = ctx.currentTime + start, p = peak || 0.5, dest = gain || musicGain;
    var o1 = ctx.createOscillator(), g1 = ctx.createGain();
    o1.type = "sine"; o1.frequency.value = freq;
    g1.gain.setValueAtTime(0.0001, t);
    g1.gain.exponentialRampToValueAtTime(p, t + 0.006);
    g1.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o1.connect(g1); g1.connect(dest); o1.start(t); o1.stop(t + dur + 0.05);
    // armónico de mazo (≈2 octavas), brillo corto que da el "tin" de la marimba
    var o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.type = "sine"; o2.frequency.value = freq * 4;
    g2.gain.setValueAtTime(0.0001, t);
    g2.gain.exponentialRampToValueAtTime(p * 0.28, t + 0.004);
    g2.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.5);
    o2.connect(g2); g2.connect(dest); o2.start(t); o2.stop(t + dur * 0.5 + 0.05);
  }
  // ---- Bajo cálido y suave (marca el pulso, sensación playera) ----
  function bassTone(freq, start, dur, gain, peak) {
    if (!ctx) return;
    var t = ctx.currentTime + start, dest = gain || musicGain;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak || 0.4, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }
  // ---- Flauta/lead suave (ataque lento, sostenido) para la sección B ----
  function flute(freq, start, dur, gain, peak) {
    if (!ctx) return;
    var t = ctx.currentTime + start, dest = gain || musicGain, p = peak || 0.3;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(p, t + 0.09);
    g.gain.setValueAtTime(p, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
    var o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.type = "triangle"; o2.frequency.value = freq * 2;
    g2.gain.setValueAtTime(0.0001, t);
    g2.gain.exponentialRampToValueAtTime(p * 0.18, t + 0.12);
    g2.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o2.connect(g2); g2.connect(dest); o2.start(t); o2.stop(t + dur + 0.05);
  }
  // ---- Cuerda punteada (ataque rápido, brillo corto) para la sección B ----
  function pluck(freq, start, dur, gain, peak) {
    if (!ctx) return;
    var t = ctx.currentTime + start, dest = gain || musicGain, p = peak || 0.2;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(p, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }

  // ---- Efectos ----
  function select() { resume(); marimba(659.25, 0, 0.5, sfxGain, 0.5); }
  function match() { resume(); marimba(659.25, 0, 0.5, sfxGain, 0.55); marimba(987.77, 0.07, 0.45, sfxGain, 0.4); }
  function invalid() { resume(); tone(180, 0, 0.18, "sawtooth", sfxGain, 0.25); }
  function win() {
    resume();
    // arpegio alegre de marimba (Do mayor) con remate playero
    [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach(function (f, i) { marimba(f, i * 0.11, 0.7, sfxGain, 0.55); });
    bassTone(130.81, 0, 0.7, sfxGain, 0.45);
  }

  // ============================================================
  //  Música estilo playa/tropical (calypso suave), tranquila pero feliz.
  //  Estructura: progresión LARGA de 8 compases (Do–Sol–Lam–Mim–Fa–Do–Fa–Sol)
  //    · Sección A: la progresión completa con MARIMBA
  //    · Sección B: la MISMA progresión con FLAUTA (melodía) + CUERDA PUNTEADA
  //    · luego vuelve al ciclo (A → B → A → …)
  // ============================================================
  var STEP = 0.26;   // duración de cada paso (corchea)
  var BAR = 8;       // 8 pasos por compás (≈2.1 s)
  // Progresión larga: 8 acordes. Cada uno: bajo, melodía (4 notas) y acorde de contratiempo.
  var PROG = [
    { bass: 130.81, mel: [523.25, 659.25, 783.99, 659.25], skank: [329.63, 392.00] }, // Do
    { bass: 196.00, mel: [493.88, 587.33, 783.99, 587.33], skank: [246.94, 293.66] }, // Sol
    { bass: 220.00, mel: [440.00, 523.25, 659.25, 523.25], skank: [261.63, 329.63] }, // Lam
    { bass: 164.81, mel: [493.88, 659.25, 783.99, 659.25], skank: [329.63, 392.00] }, // Mim
    { bass: 174.61, mel: [440.00, 523.25, 698.46, 523.25], skank: [220.00, 261.63] }, // Fa
    { bass: 130.81, mel: [392.00, 523.25, 659.25, 783.99], skank: [329.63, 392.00] }, // Do
    { bass: 174.61, mel: [440.00, 523.25, 698.46, 880.00], skank: [220.00, 261.63] }, // Fa
    { bass: 196.00, mel: [587.33, 783.99, 493.88, 587.33], skank: [246.94, 293.66] }  // Sol
  ];
  var SECTION_BARS = PROG.length;     // 8 compases por sección
  var TOTAL_BARS = SECTION_BARS * 2;  // A (marimba) + B (flauta/punteo)
  var barIndex = 0;

  function scheduleBar() {
    if (!ctx || !musicOn) return;
    var ch = PROG[barIndex % SECTION_BARS];
    var sectionB = (barIndex % TOTAL_BARS) >= SECTION_BARS; // 2ª vuelta = otros instrumentos
    var lead = sectionB ? flute : marimba;
    var comp = sectionB ? pluck : marimba;
    // bajo (dos pulsos por compás, sensación playera)
    bassTone(ch.bass, 0, STEP * 3.4, musicGain, 0.5);
    bassTone(ch.bass, 4 * STEP, STEP * 3.0, musicGain, 0.42);
    // melodía en los tiempos 0,2,4,6
    var melSteps = [0, 2, 4, 6];
    for (var i = 0; i < 4; i++) {
      lead(ch.mel[i], melSteps[i] * STEP, STEP * (sectionB ? 2.4 : 1.7), musicGain, sectionB ? 0.3 : 0.42);
    }
    // acorde en contratiempo (tiempos 1,3,5,7)
    var sk = [1, 3, 5, 7];
    for (var j = 0; j < sk.length; j++) {
      comp(ch.skank[0], sk[j] * STEP, STEP * 0.85, musicGain, sectionB ? 0.13 : 0.16);
      comp(ch.skank[1], sk[j] * STEP, STEP * 0.85, musicGain, sectionB ? 0.13 : 0.16);
    }
    barIndex = (barIndex + 1) % TOTAL_BARS;
  }
  function startMusic() {
    ensure(); resume();
    if (musicOn || !ctx) return;
    musicOn = true;
    barIndex = 0;
    scheduleBar();
    musicTimer = setInterval(scheduleBar, BAR * STEP * 1000);
  }
  function stopMusic() { musicOn = false; if (musicTimer) { clearInterval(musicTimer); musicTimer = null; } }

  function setMuted(m) {
    muted = m; localStorage.setItem("ll_muted", m ? "1" : "0");
    if (master) master.gain.value = m ? 0 : 1;
  }
  function isMuted() { return muted; }

  var api = {
    select: select, match: match, invalid: invalid, win: win,
    startMusic: startMusic, stopMusic: stopMusic,
    setMuted: setMuted, isMuted: isMuted, resume: resume
  };
  root.GameAudio = api;

})(typeof window !== "undefined" ? window : globalThis);
