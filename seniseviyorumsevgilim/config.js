// ============================================================================
// ❤️ SENİ SEVİYORUM SEVGİLİM - SİTE AYARLARI (config.js)
// Sitedeki tüm yazıları, tarihleri, fotoğrafları ve müziği buradan kolayca
// değiştirebilirsiniz.
// ============================================================================

const SITE_CONFIG = {
  // 1. İSİMLER VE ANA BAŞLIKLAR
  yourName: "Ferhat",
  partnerName: "Sevgilim", // Sevgilinizin adını buraya yazın (Örn: "Elif")
  heroTitle: "Seni Çok Seviyorum Sevgilim",
  heroQuote: "Seninle geçen her saniye, hayatımın en güzel hikayesi. İyi ki varsın, iyi ki benimlesin...",

  // 2. TANIŞMA / YILDÖNÜMÜ TARİHİ (Yıl-Ay-GünSaat:Dakika formatında)
  // Örnek: "2024-02-14T18:30:00" (14 Şubat 2024 Saat 18:30)
  startDate: "2024-02-14T00:00:00",
  startDateLabel: "14 Şubat 2024'ten beri kalbim seninle atıyor ❤️",

  // 3. ARKA PLAN MÜZİĞİ
  // Klasörün içine "sarkimiz.mp3" adında bir MP3 dosyası koyabilirsiniz
  // veya doğrudan bir ses linki yazabilirsiniz.
  music: {
    songTitle: "Bizim Şarkımız",
    songArtist: "Kalbimden Sana",
    // Kendi MP3 dosyanızı klasöre "sarkimiz.mp3" olarak atarsanız otomatik çalar.
    // Şimdilik örnek romantik piyano melodisi eklenmiştir:
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112191.mp3"
  },

  // 4. AÇILAN ZARFTAKİ AŞK MEKTUBU
  letter: {
    greeting: "Benim Güzel Sevgilim,",
    paragraphs: [
      "Bu siteyi, sana olan sevgimi dünyadaki herkese ve en çok da senin o güzel kalbine haykırmak için hazırladım. Adresi bile sadece senin için: seniseviyorumsevgilim.com.tr ❤️",
      "Hayatıma girdiğin ilk günden beri her şey daha anlamlı, daha renkli ve daha huzurlu. Gülüşün en karanlık günlerimi bile aydınlatan güneş gibi.",
      "Birlikte geçirdiğimiz her an, kurduğumuz her hayal benim en değerli hazinem. Bugün, yarın ve sonsuza dek elini hiç bırakmayacağım."
    ],
    signature: "Seni her şeyden çok seven sevgilin ❤️"
  },

  // 5. SENİ NEDEN SEVİYORUM? (6 Küçük Kart)
  reasons: [
    {
      icon: "✨",
      title: "Gülüşün",
      text: "Bana her baktığında ve gülümsediğinde dünyadaki tüm dertlerimi unutturuyorsun."
    },
    {
      icon: "🤍",
      title: "Güzel Kalbin",
      text: "Merhametin, sevgin ve içtenliğinle tanıdığım en özel insansın."
    },
    {
      icon: "🏡",
      title: "Huzurum Olman",
      text: "Yanındayken kendimi evimde, dünyanın en güvenli yerinde hissediyorum."
    },
    {
      icon: "🌟",
      title: "Bakışların",
      text: "Gözlerinin içine her baktığımda geleceğimizi ve mutluluğumuzu görüyorum."
    },
    {
      icon: "🤝",
      title: "Desteğin",
      text: "Her koşulda yanımda olman ve elimi sıkıca tutman bana güç veriyor."
    },
    {
      icon: "♾️",
      title: "Biz Olmamız",
      text: "Seninle en sıradan anların bile unutulmaz birer anıya dönüşmesini seviyorum."
    }
  ],

  // 6. HİKAYEMİZ (ZAMAN TÜNELİ)
  timeline: [
    {
      date: "İlk Kıvılcım ✨",
      title: "Yollarımızın Kesiştiği Gün",
      description: "Hayatımın en güzel tesadüfü... Seni tanıdığım an her şeyin çok özel olacağını hissetmiştim."
    },
    {
      date: "İlk Buluşma ☕",
      title: "Kalp Çarpıntısı ve Heyecan",
      description: "Karşımda seni gördüğüm o ilk an, zamanın durmasını istediğim ilk gündü."
    },
    {
      date: "Unutulmaz Anlar 🌅",
      title: "Birlikte Güldüğümüz Günler",
      description: "Seninle biriktirdiğimiz her fotoğraf, gittiğimiz her yer kalbime kazındı."
    },
    {
      date: "Bugün ve Sonsuzluk ♾️",
      title: "Seninle Her Yere...",
      description: "Geçmişimiz çok güzeldi ama birlikte yazacağımız gelecek çok daha güzel olacak."
    }
  ],

  // 7. FOTOĞRAF GALERİSİ
  // Kendi fotoğraflarınızı "photos/1.jpg", "photos/2.jpg" şeklinde klasöre atıp
  // aşağıdaki src kısımlarına yazabilirsiniz.
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
      caption: "Seninle her an çok güzel ❤️"
    },
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
      caption: "Elimi hiç bırakma 🤍"
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      caption: "En güzel manzaram sensin ✨"
    },
    {
      src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=800&q=80",
      caption: "Birlikte nice mutlu yıllara 🥂"
    }
  ],

  // 8. "BENİ SEVİYOR MUSUN?" BÖLÜMÜ VE KUTLAMA MESAJI
  celebrationMessage: "Biliyordum! Ben de seni kelimelerin anlatabileceğinden çok daha fazla seviyorum. İyi ki benim sevgilimsin! ❤️"
};
