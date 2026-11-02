document.addEventListener("DOMContentLoaded", () => {
  // 1. METİNLERİ VE AYARLARI YÜKLE
  const cfg = SITE_CONFIG;

  document.getElementById("welcome-names").textContent = `${cfg.yourName} ❤️ ${cfg.partnerName}`;
  document.getElementById("hero-title").textContent = cfg.heroTitle;
  document.getElementById("couple-names").textContent = `${cfg.yourName} ❤️ ${cfg.partnerName}`;
  document.getElementById("hero-quote").textContent = `"${cfg.heroQuote}"`;
  document.getElementById("start-date-display").textContent = cfg.startDateLabel;

  // Mektup İçeriği
  document.getElementById("letter-greeting").textContent = cfg.letter.greeting;
  const letterBody = document.getElementById("letter-body");
  letterBody.innerHTML = cfg.letter.paragraphs.map(p => `<p>${p}</p>`).join("");
  document.getElementById("letter-signature").textContent = cfg.letter.signature;

  // Seni Neden Seviyorum Kartları
  const reasonsGrid = document.getElementById("reasons-grid");
  reasonsGrid.innerHTML = cfg.reasons
    .map(
      r => `
      <div class="reason-card">
        <div class="reason-icon">${r.icon}</div>
        <h3 class="reason-title">${r.title}</h3>
        <p class="reason-text">${r.text}</p>
      </div>
    `
    )
    .join("");

  // Hikayemiz (Timeline)
  const timelineContainer = document.getElementById("timeline-container");
  timelineContainer.innerHTML = cfg.timeline
    .map(
      item => `
      <div class="timeline-item">
        <span class="timeline-date">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `
    )
    .join("");

  // Fotoğraf Galerisi
  const galleryContainer = document.getElementById("gallery-container");
  galleryContainer.innerHTML = cfg.gallery
    .map(
      (photo, index) => `
      <div class="polaroid-card" data-index="${index}">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
        <p class="polaroid-caption">${photo.caption}</p>
      </div>
    `
    )
    .join("");

  // Kutlama Mesajı
  document.getElementById("celebration-text").textContent = cfg.celebrationMessage;

  // 2. CANLI AŞK SAYACI
  const startTime = new Date(cfg.startDate).getTime();

  function updateCounter() {
    const now = Date.now();
    const diff = Math.max(0, now - startTime);

    const totalSeconds = Math.floor(diff / 1000);
    const totalDays = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("c-days").textContent = totalDays;
    document.getElementById("c-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("c-minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("c-seconds").textContent = String(seconds).padStart(2, "0");

    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;

    let detailParts = [];
    if (years > 0) detailParts.push(`${years} yıl`);
    if (months > 0) detailParts.push(`${months} ay`);
    detailParts.push(`${days} gündür kalbimiz bir atıyor ✨`);

    document.getElementById("counter-detailed-text").textContent = detailParts.join(", ");
  }

  updateCounter();
  setInterval(updateCounter, 1000);

  // 3. GİRİŞ EKRANI VE MÜZİK ÇALAR
  const welcomeOverlay = document.getElementById("welcome-overlay");
  const enterBtn = document.getElementById("enter-btn");
  const musicPlayer = document.getElementById("music-player");
  const audio = document.getElementById("bg-audio");
  const musicToggle = document.getElementById("music-toggle");
  const vinylDisc = document.getElementById("vinyl-disc");

  document.getElementById("song-title").textContent = cfg.music.songTitle;
  document.getElementById("song-artist").textContent = cfg.music.songArtist;
  audio.src = cfg.music.audioUrl;

  let isPlaying = false;

  function setMusicState(playing) {
    isPlaying = playing;
    if (playing) {
      musicToggle.textContent = "⏸️";
      vinylDisc.classList.add("spinning");
    } else {
      musicToggle.textContent = "▶️";
      vinylDisc.classList.remove("spinning");
    }
  }

  enterBtn.addEventListener("click", () => {
    welcomeOverlay.classList.add("fade-out");
    musicPlayer.classList.remove("hidden");
    audio
      .play()
      .then(() => setMusicState(true))
      .catch(() => setMusicState(false));
    burstHearts(24);
  });

  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      setMusicState(false);
    } else {
      audio.play().then(() => setMusicState(true));
    }
  });

  // 4. ZARF / MEKTUP AÇMA KAPAMA
  const envelope = document.getElementById("envelope");
  const letterContent = document.getElementById("letter-content");
  const closeLetterBtn = document.getElementById("close-letter-btn");

  envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContent.classList.add("open");
    burstHearts(15);
  });

  closeLetterBtn.addEventListener("click", () => {
    letterContent.classList.remove("open");
    envelope.style.display = "flex";
  });

  // 5. FOTOĞRAF LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  galleryContainer.addEventListener("click", e => {
    const card = e.target.closest(".polaroid-card");
    if (!card) return;
    const index = Number(card.dataset.index);
    const photo = cfg.gallery[index];
    if (!photo) return;
    lightboxImg.src = photo.src;
    lightboxCaption.textContent = photo.caption;
    lightbox.classList.remove("hidden");
  });

  lightboxClose.addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });

  // 6. "BENİ SEVİYOR MUSUN?" KAÇAN HAYIR BUTONU
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");
  const questionCard = document.getElementById("question-card");
  const questionSubtitle = document.getElementById("question-subtitle");
  const questionEmoji = document.getElementById("question-emoji");
  const celebrationModal = document.getElementById("celebration-modal");
  const closeCelebration = document.getElementById("close-celebration");

  const funnyMessages = [
    "Emin misin sevgilim? 🤔",
    "Sanırım elin kaydı 😄",
    "O butona basamazsın ki! 🙈",
    "Kalbim kırılır ama... 🥺",
    "Tek doğru cevap EVET ❤️",
    "Boşuna uğraşma yakalayamazsın 😂",
    "Hadi ama Evet'e bas artık 💖"
  ];

  let noCount = 0;
  let yesScale = 1;

  function moveNoButton(e) {
    if (e) e.preventDefault();
    const cardRect = questionCard.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = Math.max(20, cardRect.width - btnRect.width - 40);
    const maxY = Math.max(20, cardRect.height - btnRect.height - 40);

    const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
    const randomY = Math.floor(Math.random() * (maxY / 2)) - 20;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    questionSubtitle.textContent = funnyMessages[noCount % funnyMessages.length];
    questionEmoji.textContent = noCount % 2 === 0 ? "🙈💘" : "🥰✨";

    noCount++;
    yesScale = Math.min(1.5, yesScale + 0.08);
    yesBtn.style.transform = `scale(${yesScale})`;
  }

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
  noBtn.addEventListener("click", moveNoButton);

  yesBtn.addEventListener("click", () => {
    celebrationModal.classList.remove("hidden");
    burstHearts(45);
  });

  closeCelebration.addEventListener("click", () => {
    celebrationModal.classList.add("hidden");
  });

  // 7. ARKA PLAN UÇUŞAN KALPLER CANVAS
  const canvas = document.getElementById("hearts-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function createParticle(isBurst = false) {
    return {
      x: isBurst ? window.innerWidth / 2 + (Math.random() - 0.5) * 200 : Math.random() * canvas.width,
      y: isBurst ? window.innerHeight / 2 : canvas.height + 20,
      size: Math.random() * 14 + 8,
      speedY: isBurst ? Math.random() * 4 + 2 : Math.random() * 1.1 + 0.4,
      speedX: (Math.random() - 0.5) * (isBurst ? 5 : 0.8),
      opacity: Math.random() * 0.55 + 0.2,
      char: Math.random() > 0.25 ? "❤" : "✨"
    };
  }

  for (let i = 0; i < 28; i++) {
    const p = createParticle();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  function burstHearts(count) {
    for (let i = 0; i < count; i++) {
      particles.push(createParticle(true));
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.y -= p.speedY;
      p.x += p.speedX;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.font = `${p.size}px sans-serif`;
      ctx.fillStyle = "#ff4d79";
      ctx.fillText(p.char, p.x, p.y);
      ctx.restore();

      if (p.y < -30) {
        if (particles.length > 28) {
          particles.splice(i, 1);
        } else {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }

  animateParticles();
});
