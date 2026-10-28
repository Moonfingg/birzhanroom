/**
 * ============================================================
 * ПРЕЗЕНТАЦИЯ-САЙТ: «Халықтардың Қазақстанға депортациялануы»
 * Автор: Сержан Біржан
 * Топ: APE2601
 * 
 * ИНСТРУКЦИЯ ДЛЯ АВТОРА (ҚАЛАЙ ТЕКСТТЕРДІ ӨЗГЕРТУ КЕРЕК):
 * Барлық слайдтардың мәтіндері дәл осы жерде, "slides" массивінде
 * орналасқан. Сіз кез келген тақырыпты, мәтін жолдарын немесе сандарды
 * осы массив ішінде оңай өңдей аласыз.
 * 
 * ЕСКЕРТУ: Тапсырма талабы бойынша мәтіндерде ұзын сызықша
 * және тізім маркерлері қолданылмаған.
 * ============================================================
 */

// ============================================================
// БАРЛЫҚ 9 СЛАЙДТЫҢ МӘТІНДЕРІ МЕН ПАРАМЕТРЛЕРІ (ЗДЕСЬ МЕНЯТЬ ТЕКСТЫ)
// ============================================================
const slides = [
  {
    id: 1,
    category: "Практикалық тапсырма №9",
    title: "Халықтардың Қазақстанға депортациялануы",
    subtitle: "Кеңес өкіметі кезеңіндегі Қазақстан",
    author: "Сержан Біржан",
    group: "APE2601",
    lines: [
      "Кеңес өкіметі кезінде көп халық өз жерінен күшпен айдалды",
      "Олардың көбі Қазақстанға келді"
    ],
    showAuthorStamp: true,
    visualType: "map",
    activeRoute: "overview"
  },
  {
    id: 2,
    category: "Негізгі ұғым",
    title: "Депортация деген не?",
    subtitle: "Күшпен көшіру",
    lines: [
      "Депортация деген адамдарды күшпен өз жерінен басқа жерге жіберу",
      "Кеңес өкіметі кезінде бүкіл халықтар үйінен айдалды",
      "Көп халық Қазақстанға әкелінді"
    ],
    visualType: "map",
    activeRoute: "overview"
  },
  {
    id: 3,
    category: "Себебі",
    title: "Неге Қазақстанға әкелді?",
    subtitle: "Үкіметтің таңдауы",
    lines: [
      "Қазақстанның жері өте үлкен болды",
      "Жер алыс болғандықтан, оны жазалау орны ретінде таңдады",
      "Үкімет адамдарды қадағалап ұстағысы келді"
    ],
    visualType: "map",
    activeRoute: "overview"
  },
  {
    id: 4,
    category: "1937 жыл",
    title: "Кәрістер",
    subtitle: "Қиыр Шығыстан Қазақстанға",
    lines: [
      "1937 жылы кәрістерді Қиыр Шығыстан айдады",
      "Оларды пойызбен, мал таситын вагондармен әкелді",
      "Жүз мыңға жуық кәріс Қазақстанға келді",
      "Олар далада, жартылай жерде тұрып жатты"
    ],
    visualType: "stats",
    stats: [
      { target: 1937, prefix: "", suffix: " жыл", label: "Көшірілген жылы" },
      { target: 95, prefix: "", suffix: " мың", label: "Қазақстанға келгені" }
    ],
    activeRoute: "korean"
  },
  {
    id: 5,
    category: "1941 жыл",
    title: "Немістер",
    subtitle: "Еділ бойынан Қазақстанға",
    lines: [
      "Соғыс басталғанда немістерді Еділ бойынан айдады",
      "Оларды Қазақстанға және Сібірге жіберді",
      "Көп неміс еңбек армиясына алынды",
      "Олар ауыр жұмыс істеді"
    ],
    visualType: "map",
    activeRoute: "german"
  },
  {
    id: 6,
    category: "1944 жыл",
    title: "Шешендер мен ингуштар",
    subtitle: "Солтүстік Кавказдан Қазақстанға",
    lines: [
      "1944 жылы Солтүстік Кавказдан шешендер мен ингуштарды айдады",
      "Қыста, суықта жолға шықты",
      "Жолда көп адам ауырып, қайтыс болды",
      "Олар Қазақстанда қиын өмір сүрді"
    ],
    visualType: "map",
    activeRoute: "caucasus"
  },
  {
    id: 7,
    category: "Басқа халықтар",
    title: "Басқа халықтар",
    subtitle: "Әр халықтың өз қайғысы болды",
    lines: [
      "Қазақстанға поляктар, қарашайлар, балқарлар, күрділер, ахыска түріктері және басқа да халықтар әкелінді",
      "Олардың бәрі өз үйінен күшпен кетті",
      "Әр халықтың өз қайғысы болды"
    ],
    visualType: "map",
    activeRoute: "all"
  },
  {
    id: 8,
    category: "Мейірім",
    title: "Қазақ халқы не істеді?",
    subtitle: "Бір үзім нанды бөлісті",
    lines: [
      "Қазақстанға келгендер аш және ауру болды",
      "Қазақтар оларға үйінен орын берді",
      "Нанын, киімін бөлісті",
      "Көп адам қазақ халқының жақсылығын әлі күнге дейін айтады"
    ],
    visualType: "kindness",
    themeClass: "warm-glow-active"
  },
  {
    id: 9,
    category: "Қорытынды",
    title: "Қорытынды",
    subtitle: "Тарихты ұмытпаймыз",
    lines: [
      "Депортация көптеген адамдардың өмірін өзгертті",
      "Бірақ Қазақстанда түрлі халықтар бірге тұрып үйренді",
      "Бүгін біздің елімізде жүзден астам ұлт тату өмір сүріп жатыр",
      "Бұл тарихты біз ұмытпауымыз керек"
    ],
    visualType: "memorial",
    themeClass: "starlight-active"
  }
];

// ============================================================
// WEB AUDIO API СИНТЕЗАТОРЫ (ЖЕРГІЛІКТІ СИНТЕТИКАЛЫҚ ДЫБЫСТАР)
// Браузер талабы: Пайдаланушы "Бастау" басқаннан кейін оянады.
// ============================================================
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.droneGain = null;
    this.trainGain = null;
    this.windGain = null;
    this.melodyGain = null;
    this.noiseBuffer = null;
    this.isMuted = false;
    this.masterVolume = 0.65;
    this.trainInterval = null;
    this.trainActive = false; // Пойыз қазір жүріп жатыр ма
    this.isInitialized = false;
  }

  // Аудио жүйесін іске қосу
  init() {
    if (this.isInitialized) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.droneGain.connect(this.masterGain);

      // Пойыз дыбысы: ЖАЙ дауыс (0.10), тек пойыз жүргенде естіледі
      this.trainGain = this.ctx.createGain();
      this.trainGain.gain.setValueAtTime(0.0, this.ctx.currentTime);
      this.trainGain.connect(this.masterGain);

      this.windGain = this.ctx.createGain();
      this.windGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      this.windGain.connect(this.masterGain);

      this.melodyGain = this.ctx.createGain();
      this.melodyGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.melodyGain.connect(this.masterGain);

      // Ортақ шу буфері (бу шығу дыбысы үшін)
      const len = Math.floor(this.ctx.sampleRate * 1.5);
      this.noiseBuffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const nd = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < len; i++) nd[i] = Math.random() * 2 - 1;

      this.startDrone();
      this.startWind();
      this.startTrainRhythm();

      this.isInitialized = true;
      this.setTrainActive(this.trainActive);
    } catch (e) {
      console.warn("Web Audio API қолжетімсіз:", e);
    }
  }

  // 1. Тыныш атмосфералық дрон
  startDrone() {
    if (!this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(55, this.ctx.currentTime);
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(110, this.ctx.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(180, this.ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(this.droneGain);

    osc1.start();
    osc2.start();
  }

  // 2. Даланың желі
  startWind() {
    if (!this.ctx) return;
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    filter.Q.setValueAtTime(4.0, this.ctx.currentTime);

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    noise.connect(filter);
    filter.connect(this.windGain);

    noise.start();
    lfo.start();
  }

  // 3. Пойыз дыбысы: бу "пф-пф" және рельс "тық-тық" (тек пойыз жүргенде)
  startTrainRhythm() {
    if (!this.ctx) return;
    let beat = 0;
    this.trainInterval = setInterval(() => {
      if (!this.ctx || this.isMuted || !this.trainActive) return;
      this.playChuff(beat % 4 === 0 ? 1 : 0.55);
      this.playRailClack(beat % 2 === 0);
      beat++;
    }, 250);
  }

  // Бу шығу дыбысы (жұмсақ шу)
  playChuff(strength) {
    if (!this.ctx || !this.noiseBuffer) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(700, now);
    filter.Q.setValueAtTime(0.9, now);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.55 * strength, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.17);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.trainGain);
    src.start(now, Math.random() * 1.2);
    src.stop(now + 0.2);
  }

  // Рельс түйісіндегі "тық"
  playRailClack(accent) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(accent ? 1500 : 1150, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.035);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1100, now);
    gain.gain.setValueAtTime(accent ? 0.35 : 0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.trainGain);
    osc.start(now);
    osc.stop(now + 0.07);
  }

  // Пойыз ысқырығы (өте тыныш)
  playWhistle() {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.12);
    gain.gain.setValueAtTime(0.05, now + 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);
    gain.connect(this.masterGain);
    [523.25, 659.25].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f * 0.97, now);
      osc.frequency.linearRampToValueAtTime(f, now + 0.15);
      osc.frequency.setValueAtTime(f, now + 0.7);
      osc.frequency.linearRampToValueAtTime(f * 0.94, now + 1.3);
      osc.connect(gain);
      osc.start(now + i * 0.01);
      osc.stop(now + 1.35);
    });
  }

  // Пойыз жүріп жатқанда дыбыс ақырын көтеріледі, тоқтағанда өшеді
  setTrainActive(on) {
    this.trainActive = on;
    if (!this.ctx || !this.trainGain) return;
    const now = this.ctx.currentTime;
    this.trainGain.gain.cancelScheduledValues(now);
    this.trainGain.gain.setValueAtTime(this.trainGain.gain.value, now);
    this.trainGain.gain.linearRampToValueAtTime(on ? 0.1 : 0.0, now + 0.6);
  }

  // 4. Слайд ауысқандағы жұмсақ қоңырау
  playSlideChime() {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.15);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.95);
  }

  // 5. Слайд 8 және 9: жылы ноталар
  playWarmNote(freq) {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(gain);
    gain.connect(this.melodyGain);

    osc.start(now);
    osc.stop(now + 2.5);
  }

  // Слайдқа байланысты желдің күші мен әуен
  adjustForSlide(slideIndex) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Суық жол слайдтарында жел күшейеді (кәрістер, немістер, шешендер)
    if (slideIndex === 3 || slideIndex === 4 || slideIndex === 5) {
      this.windGain.gain.linearRampToValueAtTime(0.16, now + 0.5);
    } else {
      this.windGain.gain.linearRampToValueAtTime(0.04, now + 0.5);
    }

    // 8 және 9 слайдтарда жылы әуен
    if (slideIndex === 7 || slideIndex === 8) {
      const melodyNotes = slideIndex === 7 ? [440, 523.25, 659.25, 783.99] : [329.63, 392.0, 440.0, 587.33];
      melodyNotes.forEach((freq, idx) => {
        setTimeout(() => this.playWarmNote(freq), idx * 600 + 200);
      });
    }
  }

  setVolume(val) {
    this.masterVolume = parseFloat(val);
    if (this.ctx && this.masterGain && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ctx && this.masterGain) {
      const targetGain = this.isMuted ? 0 : this.masterVolume;
      this.masterGain.gain.setValueAtTime(targetGain, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}

// ============================================================
// CANVAS БӨЛШЕКТЕР: қар, боран, алтын шаң, жұлдыздар
// Режимдер: dust (шаң), blizzard (боран), warm (жылы), stars (жұлдыз)
// ============================================================
class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.baseCount = 75;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mode = "dust";
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("mousemove", (e) => {
      this.mouseX = (e.clientX - this.width / 2) * 0.02;
      this.mouseY = (e.clientY - this.height / 2) * 0.02;
    });
    for (let i = 0; i < this.baseCount; i++) this.particles.push(this.createParticle());
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      sparkle: Math.random() < 0.18
    };
  }

  setMode(mode) {
    this.mode = mode;
    // Боранда бөлшек көп болады
    const target = mode === "blizzard" ? 170 : this.baseCount;
    while (this.particles.length < target) this.particles.push(this.createParticle());
    if (this.particles.length > target) this.particles.length = target;
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    const time = Date.now();
    const blizzard = this.mode === "blizzard";

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (blizzard) {
        p.y += 0.6 + p.radius * 0.3;
        p.x += 2.4 + p.radius * 1.1 + Math.sin(time * 0.002 + i) * 0.6;
      } else {
        p.y += p.speedY;
        p.x += p.speedX + this.mouseX * 0.1;
      }

      p.alpha += Math.sin(time * 0.002 * p.pulseSpeed) * 0.005;
      if (p.alpha < 0.15) p.alpha = 0.15;
      if (p.alpha > 0.85) p.alpha = 0.85;

      if (p.y > this.height) {
        p.y = -10;
        p.x = Math.random() * this.width;
      }
      if (p.x > this.width) p.x = blizzard ? -10 : 0;
      if (p.x < 0) p.x = this.width;

      if (blizzard) {
        // Боран: ұзынша ақ сызықтар
        ctx.strokeStyle = `rgba(225, 233, 248, ${p.alpha * 0.32})`;
        ctx.lineWidth = p.radius * 0.7;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - 6 - p.radius * 4, p.y - 1.5);
        ctx.stroke();
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      if (this.mode === "warm") {
        ctx.fillStyle = `rgba(230, 197, 117, ${p.alpha})`;
      } else if (this.mode === "stars") {
        ctx.fillStyle = `rgba(240, 245, 255, ${p.alpha * 1.2})`;
      } else {
        ctx.fillStyle = `rgba(201, 157, 66, ${p.alpha * 0.7})`;
      }
      ctx.fill();

      // Жұлдыз режимінде кейбір бөлшектер жарқырап "крест" болып жанады
      if (this.mode === "stars" && p.sparkle) {
        const s = p.radius * (3 + Math.sin(time * 0.004 + i) * 2.2);
        ctx.strokeStyle = `rgba(255, 244, 214, ${p.alpha * 0.8})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(p.x - s, p.y); ctx.lineTo(p.x + s, p.y);
        ctx.moveTo(p.x, p.y - s); ctx.lineTo(p.x, p.y + s);
        ctx.stroke();
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================================
// КІРІСПЕ СЫНЕМАТОГРАФИЯЛЫҚ СЦЕНА (сайт ашылғанда ойнайды)
// Түнгі дала, аспан, қар, таулар және жарық терезелі пойыз
// ============================================================
class IntroScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.g = canvas.getContext("2d");
    this.running = true;
    this.t0 = performance.now();
    this.last = this.t0;
    this.stars = [];
    this.snow = [];
    this.smoke = [];
    this.lastSmoke = 0;
    this.w = 0;
    this.h = 0;
    this.resize();
    this._onResize = () => this.resize();
    window.addEventListener("resize", this._onResize);
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w * dpr;
    this.canvas.height = this.h * dpr;
    this.canvas.style.width = this.w + "px";
    this.canvas.style.height = this.h + "px";
    this.g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.floor((this.w * this.h) / 7000);
    this.stars = Array.from({ length: n }, () => ({
      x: Math.random() * this.w, y: Math.random() * this.h * 0.68,
      r: Math.random() * 1.3 + 0.2, ph: Math.random() * 6.28, sp: 0.8 + Math.random() * 2
    }));
    this.snow = Array.from({ length: 130 }, () => ({
      x: Math.random() * this.w, y: Math.random() * this.h,
      r: Math.random() * 2 + 0.6, vy: 20 + Math.random() * 40, ph: Math.random() * 6.28
    }));
  }

  stop() {
    this.running = false;
    window.removeEventListener("resize", this._onResize);
  }

  // Таулар қатары (параллакс)
  ridge(baseY, amp, freq, off, color) {
    const g = this.g;
    g.beginPath();
    g.moveTo(0, this.h);
    for (let x = 0; x <= this.w + 8; x += 8) {
      const n = Math.sin(x * freq + off) * 0.5 + Math.sin(x * freq * 2.3 + off * 1.7) * 0.3 + Math.sin(x * freq * 5.1 + off * 0.6) * 0.2;
      g.lineTo(x, baseY - amp * (0.5 + n * 0.5));
    }
    g.lineTo(this.w + 8, this.h);
    g.closePath();
    g.fillStyle = color;
    g.fill();
  }

  loop(now) {
    if (!this.running) return;
    const g = this.g, w = this.w, h = this.h;
    const t = (now - this.t0) / 1000;
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;

    // Аспан
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#04060c");
    sky.addColorStop(0.55, "#0d111c");
    sky.addColorStop(0.82, "#2a1a0e");
    sky.addColorStop(1, "#0b0705");
    g.fillStyle = sky;
    g.fillRect(0, 0, w, h);

    // Жарқыраған нұр дақтары (аврора)
    g.globalCompositeOperation = "lighter";
    [[0.25, 0.28, "rgba(60,140,150,0.11)", 0.11], [0.6, 0.22, "rgba(201,157,66,0.11)", 0.08], [0.85, 0.32, "rgba(90,100,170,0.10)", 0.13]].forEach(([fx, fy, col, sp], i) => {
      const cx = w * fx + Math.sin(t * sp * 2 + i) * w * 0.08;
      const cy = h * fy + Math.cos(t * sp * 1.5 + i) * h * 0.04;
      const r = Math.max(w, h) * 0.35;
      const gr = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      gr.addColorStop(0, col);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = gr;
      g.fillRect(0, 0, w, h);
    });
    g.globalCompositeOperation = "source-over";

    // Жұлдыздар
    this.stars.forEach((s) => {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(t * s.sp + s.ph));
      g.fillStyle = `rgba(240,244,255,${a})`;
      g.beginPath();
      g.arc(s.x, s.y, s.r, 0, 6.283);
      g.fill();
    });

    // Ай
    const mx = w * 0.8, my = h * 0.17, mr = Math.min(w, h) * 0.05;
    const mg = g.createRadialGradient(mx, my, mr * 0.4, mx, my, mr * 5);
    mg.addColorStop(0, "rgba(255,236,190,0.35)");
    mg.addColorStop(1, "rgba(255,236,190,0)");
    g.fillStyle = mg;
    g.fillRect(mx - mr * 5, my - mr * 5, mr * 10, mr * 10);
    g.fillStyle = "#f4e6bf";
    g.beginPath();
    g.arc(mx, my, mr, 0, 6.283);
    g.fill();

    // Таулар
    this.ridge(h * 0.66, h * 0.14, 0.004, t * 0.15, "#101522");
    this.ridge(h * 0.72, h * 0.1, 0.006, t * 0.35, "#0a0e17");
    this.ridge(h * 0.78, h * 0.05, 0.009, t * 0.7, "#070a10");

    // Жер, рельс, шпалдар
    const s = Math.min(Math.max(w / 1100, 0.7), 1.3);
    const railY = h * 0.9;
    const speed = 120 * s;
    g.fillStyle = "#05070b";
    g.fillRect(0, railY + 4, w, h - railY);
    g.strokeStyle = "rgba(201,157,66,0.3)";
    g.lineWidth = 1.2;
    g.beginPath(); g.moveTo(0, railY + 1); g.lineTo(w, railY + 1); g.stroke();
    g.beginPath(); g.moveTo(0, railY + 6); g.lineTo(w, railY + 6); g.stroke();
    g.strokeStyle = "rgba(201,157,66,0.16)";
    const sl = 36 * s;
    const so = (t * speed) % sl;
    for (let x = -so; x < w; x += sl) {
      g.beginPath(); g.moveTo(x, railY + 1); g.lineTo(x - 5, railY + 9); g.stroke();
    }

    // Пойыз
    const locoLen = 118 * s, carLen = 92 * s, gap = 6 * s, nCars = 6, H = 42 * s;
    const total = locoLen + nCars * (carLen + gap);
    const period = w + total + 160;
    const headX = (t * speed + w * 0.12) % period; // локомотив мұрнының орны
    const bodyTop = railY - 8 * s - H;

    // Алдыңғы шам сәулесі
    g.globalCompositeOperation = "lighter";
    const beam = g.createLinearGradient(headX, 0, headX + 320 * s, 0);
    beam.addColorStop(0, "rgba(255,240,200,0.32)");
    beam.addColorStop(1, "rgba(255,240,200,0)");
    g.fillStyle = beam;
    g.beginPath();
    g.moveTo(headX, railY - 20 * s);
    g.lineTo(headX + 320 * s, railY - 70 * s);
    g.lineTo(headX + 320 * s, railY + 14 * s);
    g.lineTo(headX, railY - 8 * s);
    g.closePath();
    g.fill();
    g.globalCompositeOperation = "source-over";

    const silhouette = "#05070b";
    const edge = "rgba(230,197,117,0.28)";
    const wheelAng = headX / (6 * s);

    const drawWheels = (xLeft, len) => {
      [0.18, 0.34, 0.66, 0.82].forEach((f) => {
        const cx = xLeft + len * f, cy = railY - 3 * s, r = 6 * s;
        g.fillStyle = "#0b0e14";
        g.strokeStyle = "rgba(201,157,66,0.35)";
        g.lineWidth = 1;
        g.beginPath(); g.arc(cx, cy, r, 0, 6.283); g.fill(); g.stroke();
        g.beginPath();
        g.moveTo(cx + Math.cos(wheelAng) * r, cy + Math.sin(wheelAng) * r);
        g.lineTo(cx - Math.cos(wheelAng) * r, cy - Math.sin(wheelAng) * r);
        g.stroke();
      });
    };

    // Вагондар (локомотивтің артында)
    for (let i = 0; i < nCars; i++) {
      const xRight = headX - locoLen - gap - i * (carLen + gap);
      const xLeft = xRight - carLen;
      if (xRight < -20 || xLeft > w + 20) continue;
      g.fillStyle = silhouette;
      g.fillRect(xLeft, bodyTop + 6 * s, carLen, H - 6 * s);
      g.strokeStyle = edge;
      g.lineWidth = 1;
      g.strokeRect(xLeft + 0.5, bodyTop + 6 * s + 0.5, carLen - 1, H - 6 * s - 1);
      for (let k = 0; k < 5; k++) {
        const wx = xLeft + 8 * s + k * (carLen - 16 * s) / 4.2;
        const flick = 0.7 + 0.3 * Math.sin(t * 3 + i * 2 + k);
        g.fillStyle = `rgba(245,205,120,${0.55 * flick})`;
        g.fillRect(wx, bodyTop + 14 * s, 10 * s, 10 * s);
        g.fillStyle = `rgba(245,205,120,${0.9 * flick})`;
        g.fillRect(wx + 1.5 * s, bodyTop + 15.5 * s, 7 * s, 7 * s);
      }
      drawWheels(xLeft, carLen);
    }

    // Локомотив
    const lx = headX - locoLen;
    g.fillStyle = silhouette;
    g.beginPath();
    g.moveTo(lx, bodyTop + 6 * s);
    g.lineTo(lx, railY - 8 * s);
    g.lineTo(headX, railY - 8 * s);
    g.lineTo(headX, bodyTop + 22 * s);
    g.lineTo(headX - 14 * s, bodyTop + 6 * s);
    g.closePath();
    g.fill();
    g.strokeStyle = edge;
    g.stroke();
    // Кабина мен мұржа
    g.fillStyle = silhouette;
    g.fillRect(lx, bodyTop - 6 * s, 40 * s, 14 * s);
    const chimX = headX - 34 * s, chimY = bodyTop - 12 * s;
    g.fillRect(chimX - 5 * s, chimY, 10 * s, 18 * s);
    g.fillRect(chimX - 8 * s, chimY - 3 * s, 16 * s, 5 * s);
    // Кабина терезесі және шам
    g.fillStyle = "rgba(245,205,120,0.9)";
    g.fillRect(lx + 8 * s, bodyTop + 1 * s, 12 * s, 9 * s);
    g.fillStyle = "#fff4cc";
    g.beginPath(); g.arc(headX - 3 * s, bodyTop + 24 * s, 3.2 * s, 0, 6.283); g.fill();
    drawWheels(lx, locoLen);

    // Түтін
    if (now - this.lastSmoke > 70) {
      this.lastSmoke = now;
      this.smoke.push({ x: chimX, y: chimY - 4 * s, vx: -(8 + Math.random() * 14), vy: -(22 + Math.random() * 16), r: 4 * s, life: 0 });
    }
    for (let i = this.smoke.length - 1; i >= 0; i--) {
      const p = this.smoke[i];
      p.life += dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.r += 6 * dt * s;
      if (p.life > 3.4) { this.smoke.splice(i, 1); continue; }
      const a = (1 - p.life / 3.4) * 0.17;
      g.fillStyle = `rgba(190,198,214,${a})`;
      g.beginPath();
      g.arc(p.x, p.y, p.r, 0, 6.283);
      g.fill();
    }

    // Қар
    g.fillStyle = "rgba(235,240,255,0.6)";
    this.snow.forEach((p) => {
      p.y += p.vy * dt;
      p.x += (Math.sin(t + p.ph) * 12 + 10) * dt;
      if (p.y > h) { p.y = -5; p.x = Math.random() * w; }
      if (p.x > w) p.x = 0;
      g.beginPath();
      g.arc(p.x, p.y, p.r, 0, 6.283);
      g.fill();
    });

    requestAnimationFrame(this.loop);
  }
}

// ============================================================
// SVG КАРТА: БАҒЫТТАР, КӨРСЕТКІЛЕР ЖӘНЕ ПОЙЫЗ
// Пойыз жолмен тураға жүреді: әр вагон жолдың өз нүктесінде тұрады,
// барлық вагон тік тұрады (оңға да, солға да жүргенде төңкерілмейді).
// ============================================================
const SVG_NS = "http://www.w3.org/2000/svg";
function svgEl(name, attrs = {}) {
  const el = document.createElementNS(SVG_NS, name);
  Object.keys(attrs).forEach((k) => el.setAttribute(k, attrs[k]));
  return el;
}

const KZ_CENTER = { x: 430, y: 310 };

class RouteMapController {
  constructor(callbacks = {}) {
    this.svg = document.getElementById("schematic-map-svg");
    this.onMoving = callbacks.onMoving || (() => {});
    this.onWhistle = callbacks.onWhistle || (() => {});
    this.layer = svgEl("g", { id: "routes-layer" });
    this.svg.appendChild(this.layer);
    this.runners = [];
    this.raf = null;
    this.moving = false;

    // Бағыттардың SVG траекториясы (viewBox 0 0 800 500), соңы Қазақстан орталығы
    this.routes = {
      korean: { d: "M 740,290 Q 600,200 430,310", start: { x: 740, y: 290 }, name: "Қиыр Шығыс" },
      german: { d: "M 230,240 Q 330,215 430,310", start: { x: 230, y: 240 }, name: "Еділ бойы" },
      caucasus: { d: "M 190,345 Q 300,372 430,310", start: { x: 190, y: 345 }, name: "Солтүстік Кавказ" }
    };
  }

  clear() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
    this.runners = [];
    while (this.layer.firstChild) this.layer.removeChild(this.layer.firstChild);
    if (this.moving) {
      this.moving = false;
      this.onMoving(false);
    }
  }

  // key: null | "overview" | "korean" | "german" | "caucasus" | "all"
  setRoute(key) {
    this.clear();
    if (!key) return;

    if (key === "overview") {
      Object.values(this.routes).forEach((r) => this.runners.push(this.buildRunner(r, { train: false })));
    } else if (key === "all") {
      ["korean", "german", "caucasus"].forEach((k, i) => this.runners.push(this.buildRunner(this.routes[k], { train: true, delay: i * 1100 })));
    } else if (this.routes[key]) {
      this.runners.push(this.buildRunner(this.routes[key], { train: true, delay: 0 }));
    } else {
      return;
    }

    if (this.runners.some((r) => r.hasTrain)) {
      this.onWhistle();
      this.raf = requestAnimationFrame((t) => this.tick(t));
    }
  }

  // Бір бағытқа керек барлық SVG элементтерін құру
  buildRunner(route, opts) {
    const g = svgEl("g", { class: "route-group" });
    this.layer.appendChild(g);

    const bg = svgEl("path", { d: route.d, class: "route-path-bg" });
    const dashes = svgEl("path", { d: route.d, class: "route-dashes" });
    const trail = svgEl("path", { d: route.d, class: "route-trail" });
    g.appendChild(bg);
    g.appendChild(dashes);
    g.appendChild(trail);

    const L = bg.getTotalLength();
    trail.style.strokeDasharray = `${L} ${L}`;
    trail.style.strokeDashoffset = L;

    // Бағытты көрсететін көрсеткілер (шеврондар)
    const arrows = svgEl("g", { class: "route-arrows" });
    g.appendChild(arrows);
    [0.14, 0.3, 0.46, 0.62, 0.78].forEach((f, i) => {
      const p = this.pointAt(bg, L, f * L);
      const a = svgEl("path", { d: "M -4,-5 L 3,0 L -4,5", class: "route-arrow" });
      a.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${p.angle})`);
      a.style.animationDelay = `${i * 0.28}s`;
      arrows.appendChild(a);
    });
    // Үлкен көрсеткі басы (Қазақстанға қарай)
    const hp = this.pointAt(bg, L, L * 0.9);
    const head = svgEl("polygon", { points: "-10,-8 9,0 -10,8 -5,0", class: "route-arrow-head" });
    head.setAttribute("transform", `translate(${hp.x},${hp.y}) rotate(${hp.angle})`);
    arrows.appendChild(head);

    // Бастапқы өңір белгісі
    const sx = route.start.x, sy = route.start.y;
    const pulse = svgEl("circle", { cx: sx, cy: sy, r: 12, class: "city-pulse", fill: "none", stroke: "#e6c575", "stroke-width": 1.2 });
    const dot = svgEl("circle", { cx: sx, cy: sy, r: 4.5, class: "city-marker" });
    const label = svgEl("text", { class: "city-label", x: sx > 600 ? sx + 8 : sx - 10, y: sy - 15 });
    label.setAttribute("text-anchor", sx > 600 ? "end" : "middle");
    label.textContent = route.name;
    g.appendChild(pulse);
    g.appendChild(dot);
    g.appendChild(label);

    const runner = {
      g, bg, trail, L, route, hasTrain: !!opts.train, delay: opts.delay || 0,
      startTime: performance.now(), cars: [], smokeG: null, lastSmoke: 0,
      flip: route.start.x > KZ_CENTER.x, arrivalRing: null, arrived: false, moving: false
    };

    if (opts.train) {
      // Жетіп келген кезде жанатын сақина
      runner.arrivalRing = svgEl("circle", { cx: KZ_CENTER.x, cy: KZ_CENTER.y, r: 6, class: "arrival-ring" });
      g.appendChild(runner.arrivalRing);
      runner.smokeG = svgEl("g", {});
      g.appendChild(runner.smokeG);
      // 1 локомотив + 3 вагон
      for (let i = 0; i < 4; i++) {
        const car = svgEl("g", { class: "train-car", display: "none" });
        car.innerHTML = i === 0 ? this.locoMarkup() : this.wagonMarkup();
        g.appendChild(car);
        runner.cars.push(car);
      }
    }
    return runner;
  }

  // Локомотив (оңға қарап тұр, мұрны жебе тәрізді)
  locoMarkup() {
    return `<g transform="scale(1.55)">
      <polygon points="16,-1 34,-6 34,6 16,1" fill="rgba(255,244,210,0.3)"/>
      <rect x="6" y="-11" width="3.4" height="6" fill="#8a6f3a"/>
      <rect x="-13" y="-10" width="10" height="4" rx="1" fill="#d9c9ad"/>
      <path d="M-13,-6 H9 L16,0 V5 H-13 Z" fill="#f5f0e6" class="train-wagon"/>
      <rect x="-13" y="1.6" width="29" height="1.4" fill="#c99d42"/>
      <rect x="-10" y="-4.4" width="5" height="4" fill="#120e0b"/>
      <rect x="-2" y="-4.4" width="5" height="4" fill="#120e0b"/>
      <circle cx="-8" cy="6.4" r="2.4" class="train-wheel"/>
      <circle cx="0" cy="6.4" r="2.4" class="train-wheel"/>
      <circle cx="8" cy="6.4" r="2.4" class="train-wheel"/>
      <circle cx="15" cy="-0.2" r="1.3" fill="#fff4cc"/>
    </g>`;
  }

  wagonMarkup() {
    return `<g transform="scale(1.55)">
      <rect x="-10" y="-6" width="20" height="11" rx="1.6" fill="#cdbb9b" class="train-wagon"/>
      <rect x="-10" y="1.6" width="20" height="1.3" fill="#c99d42"/>
      <rect x="-7.5" y="-4.2" width="4" height="3.4" fill="#120e0b"/>
      <rect x="-2" y="-4.2" width="4" height="3.4" fill="#120e0b"/>
      <rect x="3.5" y="-4.2" width="4" height="3.4" fill="#120e0b"/>
      <circle cx="-5.5" cy="6.4" r="2.3" class="train-wheel"/>
      <circle cx="5.5" cy="6.4" r="2.3" class="train-wheel"/>
    </g>`;
  }

  // Жолдағы нүкте және бағыт бұрышы (градус)
  pointAt(path, L, d) {
    const dd = Math.max(0, Math.min(L, d));
    const p = path.getPointAtLength(dd);
    const a = path.getPointAtLength(Math.max(0, dd - 5));
    const b = path.getPointAtLength(Math.min(L, dd + 5));
    return { x: p.x, y: p.y, angle: Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI };
  }

  tick(now) {
    let anyMoving = false;
    this.runners.forEach((r) => {
      if (r.hasTrain && this.updateRunner(r, now)) anyMoving = true;
    });
    if (anyMoving !== this.moving) {
      this.moving = anyMoving;
      this.onMoving(anyMoving);
    }
    this.raf = requestAnimationFrame((t) => this.tick(t));
  }

  // Пойыздың бір кадры. Пойыз қозғалса true қайтарады
  updateRunner(r, now) {
    const T = 7500;      // жолдың ұзақтығы (мс)
    const HOLD = 1800;   // барған соң тұру уақыты
    const gap = 38;      // вагондар арасы (жол бойымен)
    const nCars = r.cars.length;
    const travel = r.L + gap * (nCars - 1);
    const t = now - r.startTime - r.delay;

    if (t < 0) {
      r.cars.forEach((c) => c.setAttribute("display", "none"));
      return false;
    }
    const ct = t % (T + HOLD);
    let lead, moving;
    if (ct < T) {
      const p = ct / T;
      const e = 0.5 - 0.5 * Math.cos(Math.PI * p); // жұмсақ жүріс пен тоқтау
      lead = e * travel;
      moving = true;
      r.arrived = false;
    } else {
      lead = travel;
      moving = false;
      if (!r.arrived) {
        r.arrived = true;
        // Қазақстанға жетті: сақина жанады
        r.arrivalRing.classList.remove("go");
        void r.arrivalRing.getBoundingClientRect();
        r.arrivalRing.classList.add("go");
        this.onWhistle();
      }
    }

    r.trail.style.strokeDashoffset = r.L - Math.max(0, Math.min(r.L, lead));

    r.cars.forEach((car, i) => {
      const d = lead - i * gap;
      if (d < 0 || d > r.L) {
        car.setAttribute("display", "none");
        return;
      }
      const p = this.pointAt(r.bg, r.L, d);
      car.setAttribute("display", "inline");
      // Солға жүргенде вагон төңкерілмеуі үшін Y осі айналады (scale 1,-1)
      car.setAttribute("transform", `translate(${p.x.toFixed(2)},${p.y.toFixed(2)}) rotate(${p.angle.toFixed(2)})${r.flip ? " scale(1,-1)" : ""}`);

      // Локомотив мұржасынан түтін
      if (i === 0 && moving && now - r.lastSmoke > 150) {
        r.lastSmoke = now;
        const rad = p.angle * Math.PI / 180;
        const lx = 7.7 * 1.55, ly = (r.flip ? 1 : -1) * 12 * 1.55;
        const sx = p.x + lx * Math.cos(rad) - ly * Math.sin(rad);
        const sy = p.y + lx * Math.sin(rad) + ly * Math.cos(rad);
        const puff = svgEl("circle", { cx: sx, cy: sy, r: 3.4, class: "smoke-puff" });
        puff.style.setProperty("--dx", `${(-14 * Math.cos(rad)).toFixed(1)}px`);
        puff.addEventListener("animationend", () => puff.remove());
        r.smokeG.appendChild(puff);
      }
    });
    return moving;
  }
}

// ============================================================
// НЕГІЗГІ ПРЕЗЕНТАЦИЯ ҚОЗҒАЛТҚЫШЫ (SLIDE ENGINE)
// ============================================================
class PresentationApp {
  constructor() {
    this.currentIndex = 0;
    this.totalSlides = slides.length;
    this.audio = new AudioEngine();
    this.intro = null;
    this.mapCtrl = null;
    this.particles = null;

    this.wrapper = document.querySelector(".presentation-wrapper");
    this.viewport = document.getElementById("slide-viewport");
    this.introScreen = document.getElementById("intro-screen");
    this.btnStart = document.getElementById("btn-start");

    this.btnPrev = document.getElementById("btn-prev");
    this.btnNext = document.getElementById("btn-next");
    this.dotsContainer = document.getElementById("progress-dots");
    this.counterBadge = document.getElementById("slide-counter-badge");
    this.btnAudioToggle = document.getElementById("btn-audio-toggle");
    this.volumeSlider = document.getElementById("volume-slider");
    this.btnFullscreen = document.getElementById("btn-fullscreen");

    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    // 0. Кіріспе сахнасы (сайт ашылғанда)
    this.buildIntro();

    // 1. Бөлшектер холстын қосу
    this.particles = new ParticleCanvas("canvas-particles");

    // 2. Слайдтарды DOM ішіне құрастыру
    this.renderSlides();

    // 3. Карта контроллерін бастау (пойыз жүргенде дыбыс қосылады)
    this.mapCtrl = new RouteMapController({
      onMoving: (m) => this.audio.setTrainActive(m),
      onWhistle: () => this.audio.playWhistle()
    });

    // Тінтуір жарығы
    this.createSpotlight();

    // 4. Оқиғаларды тіркеу
    this.bindEvents();

    // 5. Бастапқы слайд күйін орнату
    this.updateSlideView(false);
  }

  // Кіріспе: анимациялы канвас, сөздер бір-бірлеп шығады
  buildIntro() {
    const canvas = document.createElement("canvas");
    canvas.id = "intro-canvas";
    this.introScreen.insertBefore(canvas, this.introScreen.firstChild);
    this.intro = new IntroScene(canvas);

    const titleEl = this.introScreen.querySelector(".intro-title");
    const words = titleEl.textContent.trim().split(/\s+/);
    titleEl.innerHTML = "";
    words.forEach((wd, i) => {
      const span = document.createElement("span");
      span.className = "intro-word";
      span.textContent = wd;
      span.style.animationDelay = `${0.6 + i * 0.22}s`;
      titleEl.appendChild(span);
      titleEl.appendChild(document.createTextNode(" "));
    });
    const line = document.createElement("div");
    line.className = "intro-line";
    titleEl.insertAdjacentElement("afterend", line);
  }

  // Тінтуір бойымен жүретін жарық дақ
  createSpotlight() {
    const sp = document.createElement("div");
    sp.className = "spotlight";
    this.wrapper.insertBefore(sp, this.wrapper.querySelector(".vignette-overlay").nextSibling);
  }

  renderSlides() {
    this.viewport.innerHTML = "";
    this.dotsContainer.innerHTML = "";

    slides.forEach((slide, idx) => {
      // Слайд карточкасын құру
      const card = document.createElement("div");
      card.className = `slide-card ${idx === 0 ? "active" : ""}`;
      card.id = `slide-${idx}`;

      // Текстік жағы
      let linesHtml = "";
      slide.lines.forEach((line) => {
        linesHtml += `<div class="slide-line-item">${line}</div>`;
      });

      // Авторлық белгі (тек 1 слайдта)
      let authorStampHtml = "";
      if (slide.showAuthorStamp) {
        authorStampHtml = `
          <div class="author-stamp">
            <span class="author-stamp-name">${slide.author}</span>
            <span class="author-stamp-group">Топ: ${slide.group}</span>
          </div>
        `;
      }

      // Слайд 4 сандық есептегіштері
      let statsHtml = "";
      if (slide.visualType === "stats" && slide.stats) {
        statsHtml = `<div class="stats-container">`;
        slide.stats.forEach((st, sIdx) => {
          statsHtml += `
            <div class="stat-box">
              <div class="stat-number" id="stat-val-${sIdx}" data-target="${st.target}" data-suffix="${st.suffix}">${st.prefix}0${st.suffix}</div>
              <div class="stat-label">${st.label}</div>
            </div>
          `;
        });
        statsHtml += `</div>`;
      }

      // Оң жақтағы визуалды блок
      let visualHtml = "";
      if (slide.visualType === "kindness") {
        // Слайд 8: Қазақ халқының құшақ ашуы
        visualHtml = `
          <div class="kindness-visual">
            <span class="warm-ring r1"></span>
            <span class="warm-ring r2"></span>
            <span class="warm-ring r3"></span>
            <div class="kindness-sun-rays"></div>
            <div class="kindness-icon-center">
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        `;
      } else if (slide.visualType === "memorial") {
        // Слайд 9: Мәңгілік жад
        visualHtml = `
          <div class="memorial-visual">
            <div class="memorial-flame">
              <svg viewBox="0 0 24 24">
                <path d="M12 2c1.1 0 2 .9 2 2 0 1.2-.5 2.2-1.3 3-.8.7-1.3 1.7-1.3 2.7 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.8-1.2-3.3-2.8-3.8.3-.7.5-1.4.5-2.2 0-.3 0-.6-.1-.9C19.4 4.5 22 8 22 12c0 5.5-4.5 10-10 10S2 17.5 2 12c0-4.1 2.5-7.6 6.1-9.2 0 .4-.1.8-.1 1.2 0 1.9 1.1 3.5 2.7 4.3-.4.8-.7 1.7-.7 2.7 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.7-.9-3.2-2.2-4.1C18 6.1 18 5.1 18 4c0-1.1-.9-2-2-2-1.1 0-2 .9-2 2 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2z"/>
              </svg>
            </div>
            <div class="memorial-quote">Тарихты ұмытпайық</div>
            <div class="memorial-note">Тағзым мен тағылым</div>
          </div>
        `;
      } else {
        // 1-7 Слайдтар үшін карта контейнерінің белгісі
        visualHtml = `<div class="map-slot-placeholder" id="map-slot-${idx}"></div>`;
      }

      card.innerHTML = `
        <div class="slide-ghost-number">${String(idx + 1).padStart(2, "0")}</div>
        <div class="slide-grid">
          <div class="slide-text-side">
            <div class="slide-category">${slide.category}</div>
            <h2 class="slide-title" id="title-slide-${idx}">${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle}</div>
            ${statsHtml}
            <div class="slide-lines">
              ${linesHtml}
            </div>
            ${authorStampHtml}
          </div>
          <div class="slide-visual-side" id="visual-slot-${idx}">
            ${visualHtml}
          </div>
        </div>
      `;

      this.viewport.appendChild(card);

      // Прогресс нүктесін қосу
      const dot = document.createElement("button");
      dot.className = `dot-btn ${idx === 0 ? "active" : ""}`;
      dot.setAttribute("data-index", idx);
      dot.setAttribute("data-title", `${idx + 1}-слайд: ${slide.category}`);
      dot.setAttribute("aria-label", `${idx + 1}-слайдқа өту`);
      dot.addEventListener("click", () => this.goToSlide(idx));
      this.dotsContainer.appendChild(dot);
    });

    // Ортақ SVG картаны алғашқы слайдтың визуалды ұяшығына салу
    this.mountSharedMap(0);
  }

  mountSharedMap(targetIndex) {
    const mapTemplate = document.getElementById("schematic-map-container");
    const targetSlot = document.getElementById(`visual-slot-${targetIndex}`);
    if (mapTemplate && targetSlot) {
      targetSlot.innerHTML = "";
      targetSlot.appendChild(mapTemplate);
      mapTemplate.style.display = "block";
    }
  }

  bindEvents() {
    // 1. «Бастау» батырмасы
    this.btnStart.addEventListener("click", () => {
      // Кіріспе батырма орнынан дөңгелек болып жиналып жабылады
      const r = this.btnStart.getBoundingClientRect();
      this.introScreen.style.setProperty("--cx", `${r.left + r.width / 2}px`);
      this.introScreen.style.setProperty("--cy", `${r.top + r.height / 2}px`);
      this.audio.init();
      this.audio.playWhistle();
      this.introScreen.classList.add("hidden");
      this.wrapper.classList.add("app-ready");
      this.animateSlideTitle(0);
      this.audio.adjustForSlide(0);
      setTimeout(() => { if (this.intro) this.intro.stop(); }, 1800);
    });

    // 2. Артқа / Алға батырмалары
    this.btnPrev.addEventListener("click", () => this.prevSlide());
    this.btnNext.addEventListener("click", () => this.nextSlide());

    // 3. Пернетақтамен басқару
    window.addEventListener("keydown", (e) => {
      if (this.introScreen && !this.introScreen.classList.contains("hidden")) {
        if (e.key === "Enter" || e.key === " ") {
          this.btnStart.click();
        }
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        this.nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        this.prevSlide();
      }
    });

    // 4. Телефондағы свайп (Touch gestures)
    window.addEventListener("touchstart", (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    // 5. Дыбысты өшіру / қосу
    this.btnAudioToggle.addEventListener("click", () => {
      if (!this.audio.isInitialized) {
        this.audio.init();
      }
      const isMuted = this.audio.toggleMute();
      this.updateAudioIcon(isMuted);
    });

    // 6. Дыбыс деңгейі жүгірткісі
    this.volumeSlider.addEventListener("input", (e) => {
      this.audio.setVolume(e.target.value);
    });

    // 7. Толық экран режимі
    this.btnFullscreen.addEventListener("click", () => {
      this.toggleFullscreen();
    });

    // 8. Параллакс әсері (тінтуір қозғалысы мен телефон бұрышы)
    window.addEventListener("mousemove", (e) => {
      this.wrapper.style.setProperty("--mx", `${e.clientX}px`);
      this.wrapper.style.setProperty("--my", `${e.clientY}px`);
      const xOffset = (e.clientX / window.innerWidth - 0.5) * 16;
      const yOffset = (e.clientY / window.innerHeight - 0.5) * 12;
      const activeVisual = document.querySelector(".slide-card.active .slide-visual-side");
      if (activeVisual) {
        activeVisual.style.transform = `rotateY(${xOffset * 0.4}deg) rotateX(${-yOffset * 0.4}deg) translateZ(8px)`;
      }
    });

    // Мобильді құрылғылар үшін гироскоп наклоны
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (e) => {
        if (e.gamma !== null && e.beta !== null) {
          const tiltX = Math.min(Math.max(e.gamma, -25), 25) * 0.4;
          const tiltY = Math.min(Math.max(e.beta - 45, -25), 25) * 0.4;
          const activeVisual = document.querySelector(".slide-card.active .slide-visual-side");
          if (activeVisual) {
            activeVisual.style.transform = `rotateY(${tiltX}deg) rotateX(${-tiltY}deg) translateZ(6px)`;
          }
        }
      }, { passive: true });
    }
  }

  handleSwipe() {
    const diff = this.touchEndX - this.touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        this.nextSlide(); // Оңнан солға свайп -> Алға
      } else {
        this.prevSlide(); // Солдан оңға свайп -> Артқа
      }
    }
  }

  goToSlide(index) {
    if (index === this.currentIndex || index < 0 || index >= this.totalSlides) return;
    const isForward = index > this.currentIndex;
    this.currentIndex = index;
    this.updateSlideView(isForward);
    this.audio.playSlideChime();
    this.audio.adjustForSlide(this.currentIndex);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  nextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  updateSlideView(isForward) {
    const currentSlideData = slides[this.currentIndex];

    // Барлық слайд карточкаларын жаңарту
    slides.forEach((_, idx) => {
      const card = document.getElementById(`slide-${idx}`);
      if (card) {
        if (idx === this.currentIndex) {
          card.classList.remove("prev-out");
          card.classList.add("active");
        } else if (idx < this.currentIndex) {
          card.classList.remove("active");
          card.classList.add("prev-out");
        } else {
          card.classList.remove("active", "prev-out");
        }
      }
    });

    // Прогресс нүктелерін жаңарту
    const dots = this.dotsContainer.querySelectorAll(".dot-btn");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === this.currentIndex);
    });

    // Слайд санағышын жаңарту (01 / 09)
    const currentNumStr = (this.currentIndex + 1).toString().padStart(2, "0");
    const totalNumStr = this.totalSlides.toString().padStart(2, "0");
    this.counterBadge.textContent = `${currentNumStr} / ${totalNumStr}`;

    // Артқа/Алға батырмаларының белсенділігі
    this.btnPrev.disabled = this.currentIndex === 0;
    this.btnNext.disabled = this.currentIndex === this.totalSlides - 1;

    // Реңкті ауыстыру (Слайд 8 жылы нұр, Слайд 9 жұлдызды аспан)
    this.wrapper.classList.remove("warm-glow-active", "starlight-active");
    if (currentSlideData.themeClass) {
      this.wrapper.classList.add(currentSlideData.themeClass);
    }

    // Бөлшектер холстының режимі
    if (this.currentIndex === 7) {
      this.particles.setMode("warm");
    } else if (this.currentIndex === 8) {
      this.particles.setMode("stars");
    } else if (this.currentIndex === 3 || this.currentIndex === 5) {
      this.particles.setMode("blizzard"); // суық қыс жолы: боран
    } else {
      this.particles.setMode("dust");
    }

    // Ортақ SVG картаны орнату немесе бағытын жаңарту
    if (currentSlideData.visualType === "map" || currentSlideData.visualType === "stats") {
      this.mountSharedMap(this.currentIndex);
      if (this.mapCtrl) {
        this.mapCtrl.setRoute(currentSlideData.activeRoute);
      }
    } else if (this.mapCtrl) {
      this.mapCtrl.setRoute(null); // 8 және 9 слайдта пойыз жоқ
    }

    // Слайд 4 сандарын анимациялау
    if (this.currentIndex === 3) {
      this.animateCounters();
    }

    // Заголовокты әріп бойынша анимациялау
    this.animateSlideTitle(this.currentIndex);
  }

  // Әріптердің біртіндеп шығуы
  animateSlideTitle(slideIndex) {
    const titleEl = document.getElementById(`title-slide-${slideIndex}`);
    if (!titleEl) return;
    const originalText = slides[slideIndex].title;
    titleEl.innerHTML = "";

    const letters = originalText.split("");
    letters.forEach((char, idx) => {
      const span = document.createElement("span");
      span.className = "letter-span";
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${idx * 0.02}s`;
      titleEl.appendChild(span);
    });
  }

  // Слайд 4: Сандардың өсу анимациясы
  animateCounters() {
    const slide = slides[3];
    if (!slide.stats) return;

    slide.stats.forEach((st, idx) => {
      const el = document.getElementById(`stat-val-${idx}`);
      if (!el) return;

      const target = st.target;
      const duration = 1400; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Жұмсақ баяулау (easeOutQuad)
        const ease = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(ease * target);

        el.textContent = `${st.prefix}${currentVal}${st.suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = `${st.prefix}${target}${st.suffix}`;
        }
      };

      requestAnimationFrame(updateCount);
    });
  }

  updateAudioIcon(isMuted) {
    const iconContainer = this.btnAudioToggle;
    if (isMuted) {
      iconContainer.innerHTML = `
        <svg viewBox="0 0 24 24">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      `;
    } else {
      iconContainer.innerHTML = `
        <svg viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      `;
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn("Fullscreen қатесі:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

// Бет жүктелген сәтте презентацияны қосу
window.addEventListener("DOMContentLoaded", () => {
  new PresentationApp();
});
