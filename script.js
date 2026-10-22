"use strict";

/* =========================================
   DATA ARSIP KASUS
========================================= */

const cases = [
  {
    id: "RPL-001",
    title: "Arsip Kasus Wiwin Winingsih",
    person: "Wiwin Winingsih",
    period: "2026–2027",
    category: "Arsip penyelesaian kasus",
    status: "Selesai — daftar hitam internal",
    summary: "Arsip dokumentasi kasus Wiwin Winingsih yang telah dinyatakan selesai menurut catatan pengelola.",
    chronology: "Kronologi belum diisi. Tambahkan urutan kejadian, tanggal, dan informasi berdasarkan catatan yang terverifikasi.",
    solution: "Rincian penyelesaian belum diisi. Tambahkan tindakan yang benar-benar telah dilakukan oleh pengelola.",
    outcome: "Status internal: selesai dan masuk daftar hitam internal Ratu Paket Lebaran. Lengkapi tanggal serta dasar keputusan sesuai dokumentasi yang tersedia.",
    documents: [
      {
        title: "Dokumentasi identitas Wiwin Winingsih",
        description: "Dokumentasi identitas terkait arsip kasus Wiwin Winingsih.",
        src: "assets/kasus/ktpwiwin.png"
      },
      {
        title: "Formulir Wiwin Winingsih",
        description: "Dokumentasi formulir terkait arsip kasus Wiwin Winingsih.",
        src: "assets/kasus/formulirwiwin.png"
      }
    ]
  },
  {
    id: "RPL-002",
    title: "Arsip Kasus Siti Nurjanah",
    person: "Siti Nurjanah",
    period: "2024–2025",
    category: "Arsip penyelesaian kasus",
    status: "Selesai — daftar hitam internal",
    summary: "Arsip identitas Siti Nurjanah, identitas suami, dan formulir kerja sama reseller Ratu Paket Lebaran periode 2024–2025.",
    chronology: "Arsip memuat dokumen identitas dan formulir kerja sama reseller. Lengkapi kronologi permasalahan berdasarkan catatan yang terverifikasi.",
    solution: "Rincian penyelesaian perlu dilengkapi berdasarkan tindakan yang benar-benar telah dilakukan oleh pengelola.",
    outcome: "Status internal: selesai dan masuk daftar hitam internal Ratu Paket Lebaran. Pastikan dasar keputusan dan dokumentasi pendukung tersimpan.",
    documents: [
      {
        title: "KTP Siti Nurjanah",
        description: "Dokumentasi identitas Siti Nurjanah.",
        src: "assets/kasus/ktpsiti.png"
      },
      {
        title: "KTP Suami Siti Nurjanah",
        description: "Dokumentasi identitas suami Siti Nurjanah.",
        src: "assets/kasus/ktpsuami_siti.png"
      },
      {
        title: "Formulir Kerja Sama Reseller",
        description: "Dokumentasi formulir reseller/sub-agent/agent periode 2024–2025.",
        src: "assets/kasus/formulirsiti.png"
      }
    ]
  },
  {
    id: "RPL-003",
    title: "Arsip Surat Pernyataan Nur Endang",
    person: "Nur Endang S.",
    period: "2024–2025",
    category: "Arsip penyelesaian kasus",
    status: "Selesai — daftar hitam internal",
    summary: "Arsip surat pernyataan Nur Endang mengenai status reseller Ratu Paket Lebaran dan pernyataan terkait setoran uang.",
    chronology: "Berdasarkan surat pernyataan bertanggal 25 Januari 2025, yang bersangkutan menyatakan bahwa dirinya bukan reseller Ratu Paket Lebaran karena tidak mengikuti aturan yang berlaku dan uang yang harus disetorkan tidak disetorkan. Informasi lanjutan perlu dilengkapi dari catatan yang terverifikasi.",
    solution: "Rincian penyelesaian perlu dilengkapi berdasarkan bukti dan catatan pengelola.",
    outcome: "Status internal: selesai dan masuk daftar hitam internal Ratu Paket Lebaran. Simpan dasar keputusan dan dokumentasi pendukung.",
    documents: [
      {
        title: "Surat Pernyataan Nur Endang",
        description: "Dokumentasi surat pernyataan bertanggal 25 Januari 2025.",
        src: "assets/kasus/suratpernyataan_nurendang.png"
      }
    ]
  },
  {
    id: "RPL-004",
    title: "Arsip Kasus Siti Nurul Jaimah",
    person: "Siti Nurul Jaimah",
    period: "2024–2025",
    category: "Arsip penyelesaian kasus",
    status: "Selesai — daftar hitam internal",
    summary: "Arsip dokumentasi identitas Siti Nurul Jaimah, identitas suami, dan formulir kerja sama reseller periode 2024–2025.",
    chronology: "Kronologi lengkap belum dicantumkan. Lengkapi berdasarkan catatan dan bukti yang telah diverifikasi oleh pengelola.",
    solution: "Rincian penyelesaian perlu dilengkapi berdasarkan tindakan yang benar-benar telah dilakukan oleh pengelola.",
    outcome: "Status internal: selesai dan masuk daftar hitam internal Ratu Paket Lebaran. Pastikan dasar keputusan dan dokumentasi pendukung tersimpan.",
    documents: [
      {
        title: "KTP Siti Nurul Jaimah",
        description: "Dokumentasi identitas Siti Nurul Jaimah.",
        src: "assets/kasus/ktpsitinurul.png"
      },
      {
        title: "KTP Suami Siti Nurul Jaimah",
        description: "Dokumentasi identitas suami Siti Nurul Jaimah.",
        src: "assets/kasus/ktpsuami_sitinurul.png"
      },
      {
        title: "Formulir Reseller Siti Nurul Jaimah",
        description: "Dokumentasi formulir kerja sama reseller Ratu Paket Lebaran periode 2024–2025.",
        src: "assets/kasus/formulirsitinurul.png"
      }
    ]
  },
  {
    id: "RPL-005",
    title: "Arsip Kasus Teti Fitriawati",
    person: "Teti Fitriawati",
    period: "2024–2025",
    category: "Arsip penyelesaian kasus",
    status: "Selesai — daftar hitam internal",
    summary: "Arsip dokumentasi formulir kerja sama reseller Ratu Paket Lebaran periode 2024–2025.",
    chronology: "Dokumen formulir kerja sama reseller tersedia. Kronologi permasalahan perlu dilengkapi berdasarkan catatan dan bukti yang telah diverifikasi.",
    solution: "Rincian penyelesaian perlu dilengkapi berdasarkan tindakan yang benar-benar telah dilakukan oleh pengelola.",
    outcome: "Status internal: selesai dan masuk daftar hitam internal Ratu Paket Lebaran, sesuai keputusan pengelola. Simpan dasar keputusan dan dokumentasi pendukung secara aman.",
    documents: [
      {
        title: "KTP Teti Fitriawati",
        description: "Dokumentasi identitas pihak terkait. Batasi akses dokumen ini kepada pihak yang berwenang.",
        src: "assets/kasus/ktpteti.png"
      },
      {
        title: "KTP Suami Teti Fitriawati",
        description: "Dokumentasi identitas pasangan yang tercantum dalam formulir kerja sama.",
        src: "assets/kasus/ktpsuami_teti.png"
      },
      {
        title: "Formulir Reseller Teti Fitriawati",
        description: "Dokumentasi formulir kerja sama reseller Ratu Paket Lebaran periode 2024–2025.",
        src: "assets/kasus/formulirteti.png"
      }
    ]
  }
];

/* =========================================
   DATA GALERI
========================================= */

const galleryItems = [
  {
    id: "video-korban",
    category: "video",
    type: "video",
    label: "VIDEO KORBAN",
    title: "Dokumentasi Video Korban",
    description: "Dokumentasi video terkait laporan kasus Ratu Paket Lebaran.",
    date: "Tanggal belum diisi",
    src: "assets/galeri/vidkorban.mp4"
  },
  {
    id: "foto-korban",
    category: "video",
    type: "image",
    label: "FOTO KORBAN",
    title: "Dokumentasi Foto Korban",
    description: "Dokumentasi foto terkait laporan kasus Ratu Paket Lebaran.",
    date: "Tanggal belum diisi",
    src: "assets/galeri/korban.jpeg"
  },
  {
    id: "kunjungan-polisi",
    category: "polisi",
    type: "image",
    label: "KUNJUNGAN POLISI",
    title: "Dokumentasi Kunjungan Polisi",
    description: "Dokumentasi kunjungan ke lokasi terkait laporan kasus.",
    date: "Tanggal belum diisi",
    src: "assets/galeri/kunjungan.jpg"
  }
];

/* =========================================
   UTILITAS
========================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function closeOtherMedia(exceptVideo = null) {
  $$("video").forEach(video => {
    if (video !== exceptVideo) video.pause();
  });
}

/* =========================================
   REFERENSI ELEMEN HTML
========================================= */

const caseGrid = $("#caseGrid");
const searchInput = $("#searchInput");
const periodFilter = $("#periodFilter");
const statusFilter = $("#statusFilter");
const resultLine = $("#resultLine");
const emptyState = $("#emptyState");

const caseDialog = $("#caseDialog");
const dialogContent = $("#dialogContent");

const galleryGrid = $("#galleryGrid");
const galleryEmptyState = $("#galleryEmptyState");
const galleryDialog = $("#galleryDialog");
const galleryDialogContent = $("#galleryDialogContent");

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

/* =========================================
   STATISTIK
========================================= */

function updateStats() {
  setText("#totalCases", cases.length);

  setText(
    "#resolvedCases",
    cases.filter(item => item.status.startsWith("Selesai")).length
  );

  setText(
    "#periodCount",
    new Set(cases.map(item => item.period)).size
  );
}

/* =========================================
   FILTER PERIODE
========================================= */

function populatePeriods() {
  if (!periodFilter) return;

  const periods = [...new Set(cases.map(item => item.period))];

  periodFilter.innerHTML =
    '<option value="">Semua periode</option>' +
    periods.map(period => `
      <option value="${escapeHTML(period)}">${escapeHTML(period)}</option>
    `).join("");
}

/* =========================================
   RENDER DAFTAR ARSIP
========================================= */

function renderCases() {
  if (!caseGrid || !searchInput || !periodFilter || !statusFilter) return;

  const keyword = searchInput.value.trim().toLowerCase();
  const selectedPeriod = periodFilter.value;
  const selectedStatus = statusFilter.value;

  const filtered = cases.filter(item => {
    const searchableText = [
      item.id,
      item.title,
      item.person,
      item.period,
      item.category,
      item.status,
      item.summary,
      item.chronology,
      item.solution,
      item.outcome
    ].join(" ").toLowerCase();

    const matchesStatus =
      !selectedStatus ||
      (selectedStatus === "Selesai" &&
        item.status.startsWith("Selesai")) ||
      (selectedStatus === "Dalam daftar hitam" &&
        item.status.toLowerCase().includes("daftar hitam"));

    return searchableText.includes(keyword) &&
      (!selectedPeriod || item.period === selectedPeriod) &&
      matchesStatus;
  });

  if (resultLine) {
    resultLine.textContent = `${filtered.length} arsip ditemukan`;
  }

  if (emptyState) {
    emptyState.hidden = filtered.length > 0;
  }

  caseGrid.innerHTML = filtered.map(item => `
    <article class="case-card">
      <div class="case-cover">
        <span class="case-badge">${escapeHTML(item.category)}</span>
        <span class="case-cover-icon" aria-hidden="true">▤</span>
      </div>

      <div class="case-body">
        <span class="case-id">${escapeHTML(item.id)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.summary)}</p>

        <div class="case-bottom">
          <span class="status-badge">${escapeHTML(item.status)}</span>
          <button class="detail-button" type="button"
            data-case-id="${escapeHTML(item.id)}">
            Lihat detail
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* =========================================
   DETAIL ARSIP
========================================= */

function openCase(id) {
  const item = cases.find(entry => entry.id === id);

  if (!item || !caseDialog || !dialogContent) return;

  closeOtherMedia();

  const documents = item.documents.map((doc, index) => `
    <article class="case-document">
      <h4>${escapeHTML(doc.title)}</h4>

      <a href="${escapeHTML(doc.src)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka dokumen ${escapeHTML(doc.title)}">

        <img
          src="${escapeHTML(doc.src)}"
          alt="${escapeHTML(doc.title)}"
          loading="lazy">

      </a>

      <p class="document-missing" hidden>
        Dokumen belum ditemukan. Periksa nama file dan lokasi folder.
      </p>

      <p>${escapeHTML(doc.description)}</p>
    </article>
  `).join("");

  dialogContent.innerHTML = `
    <span class="dialog-label">
      ${escapeHTML(item.id)} · ${escapeHTML(item.period)}
    </span>

    <h2 class="dialog-title" id="dialogTitle">
      ${escapeHTML(item.title)}
    </h2>

    <div class="case-detail-list">
      <p><strong>Nama:</strong> ${escapeHTML(item.person)}</p>
      <p><strong>Kategori:</strong> ${escapeHTML(item.category)}</p>
      <p><strong>Status:</strong> ${escapeHTML(item.status)}</p>
    </div>

    <h3>Kronologi</h3>
    <p>${escapeHTML(item.chronology)}</p>

    <h3>Solusi dan tindak lanjut</h3>
    <p>${escapeHTML(item.solution)}</p>

    <h3>Hasil penyelesaian</h3>
    <p>${escapeHTML(item.outcome)}</p>

    <h3>Dokumentasi kasus</h3>
    <div class="case-documents">${documents}</div>

    <div class="dialog-note">
      Arsip ini merupakan catatan internal pengelola. Pastikan kronologi,
      bukti, dan keputusan telah diperiksa. Batasi akses dokumen identitas
      dan data pribadi hanya untuk pihak yang berwenang.
    </div>
  `;

  // Penanganan gambar dokumen yang tidak tersedia.
  dialogContent.querySelectorAll(".case-document img").forEach(img => {
    img.addEventListener("error", () => {
      img.hidden = true;

      const missing = img.closest(".case-document")
        ?.querySelector(".document-missing");

      if (missing) missing.hidden = false;
    }, { once: true });
  });

  if (!caseDialog.open) {
    caseDialog.showModal();
  }

  document.body.classList.add("dialog-open");
}

/* =========================================
   RENDER GALERI
========================================= */

function renderGallery(filter = "semua") {
  if (!galleryGrid) return;

  const filtered = galleryItems.filter(item =>
    filter === "semua" || item.category === filter
  );

  if (galleryEmptyState) {
    galleryEmptyState.hidden = filtered.length > 0;
  }

  galleryGrid.innerHTML = filtered.map(item => `
    <article class="gallery-card">
      <button type="button"
        class="gallery-open"
        data-gallery-id="${escapeHTML(item.id)}"
        aria-label="Lihat ${escapeHTML(item.title)}">

        <span class="gallery-type">
          ${item.type === "video" ? "VIDEO" : "FOTO"}
        </span>

        ${item.type === "video" ? `
          <video
            src="${escapeHTML(item.src)}"
            muted
            loop
            playsinline
            preload="metadata"
            aria-label="${escapeHTML(item.title)}">
          </video>

          <span class="gallery-play" aria-hidden="true">▶</span>

          <span class="gallery-placeholder" hidden>
            <span class="placeholder-symbol">▷</span>
            <strong>Video belum tersedia</strong>
            <small>Periksa file di folder assets/galeri</small>
          </span>
        ` : `
          <img
            src="${escapeHTML(item.src)}"
            alt="${escapeHTML(item.title)}"
            loading="lazy">

          <span class="gallery-placeholder" hidden>
            <span class="placeholder-symbol">▧</span>
            <strong>Foto belum tersedia</strong>
            <small>Periksa file di folder assets/galeri</small>
          </span>
        `}
      </button>

      <div class="gallery-info">
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>

        <div class="gallery-meta">
          <span>${escapeHTML(item.label)}</span>
          <span>${escapeHTML(item.date)}</span>
        </div>
      </div>
    </article>
  `).join("");

  // Tampilkan placeholder jika file gambar atau video gagal dimuat.
  galleryGrid.querySelectorAll("img, video").forEach(media => {
    media.addEventListener("error", () => {
      media.hidden = true;

      const card = media.closest(".gallery-open");
      const placeholder = card?.querySelector(".gallery-placeholder");
      const playButton = card?.querySelector(".gallery-play");

      if (placeholder) placeholder.hidden = false;
      if (playButton) playButton.hidden = true;
    }, { once: true });
  });
}

/* =========================================
   DETAIL GALERI
========================================= */

function openGalleryItem(id) {
  const item = galleryItems.find(entry => entry.id === id);

  if (!item || !galleryDialog || !galleryDialogContent) return;

  closeOtherMedia();

  galleryDialogContent.innerHTML = `
    <span class="dialog-label">${escapeHTML(item.label)}</span>
    <h2 class="dialog-title">${escapeHTML(item.title)}</h2>

    ${item.type === "video" ? `
      <video
        class="dialog-media"
        controls
        playsinline
        preload="metadata">
        <source src="${escapeHTML(item.src)}">
        Browser kamu tidak mendukung pemutaran video.
      </video>
      <p class="document-missing" hidden>
        Video belum ditemukan. Periksa nama dan lokasi file.
      </p>
    ` : `
      <img
        class="dialog-media"
        src="${escapeHTML(item.src)}"
        alt="${escapeHTML(item.title)}">
      <p class="document-missing" hidden>
        Foto belum ditemukan. Periksa nama dan lokasi file.
      </p>
    `}

    <p>${escapeHTML(item.description)}</p>
    <p><strong>Tanggal:</strong> ${escapeHTML(item.date)}</p>
  `;

  const media = galleryDialogContent.querySelector("video, img");
  const missing = galleryDialogContent.querySelector(".document-missing");

  if (media) {
    media.addEventListener("error", () => {
      media.hidden = true;
      if (missing) missing.hidden = false;
    }, { once: true });
  }

  if (!galleryDialog.open) {
    galleryDialog.showModal();
  }

  document.body.classList.add("dialog-open");

  // Tidak memaksa video langsung diputar, agar lebih kompatibel di HP.
}

/* =========================================
   TUTUP DIALOG
========================================= */

function closeDialog(dialog) {
  if (!dialog) return;

  dialog.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  if (dialog.open) {
    dialog.close();
  }

  if (
    (!caseDialog || !caseDialog.open) &&
    (!galleryDialog || !galleryDialog.open)
  ) {
    document.body.classList.remove("dialog-open");
  }
}

/* =========================================
   FILTER PENCARIAN ARSIP
========================================= */

if (searchInput) {
  searchInput.addEventListener("input", renderCases);
}

if (periodFilter) {
  periodFilter.addEventListener("change", renderCases);
}

if (statusFilter) {
  statusFilter.addEventListener("change", renderCases);
}

/* =========================================
   KLIK KARTU ARSIP
========================================= */

if (caseGrid) {
  caseGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-case-id]");

    if (button) {
      openCase(button.dataset.caseId);
    }
  });
}

/* =========================================
   FILTER GALERI
========================================= */

$$("[data-gallery-filter]").forEach(button => {
  button.setAttribute(
    "aria-pressed",
    String(button.classList.contains("active"))
  );

  button.addEventListener("click", () => {
    $$("[data-gallery-filter]").forEach(tab => {
      const isActive = tab === button;

      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-pressed", String(isActive));
    });

    renderGallery(button.dataset.galleryFilter || "semua");
  });
});

/* =========================================
   KLIK ITEM GALERI
========================================= */

if (galleryGrid) {
  galleryGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-gallery-id]");

    if (button) {
      openGalleryItem(button.dataset.galleryId);
    }
  });
}

/* =========================================
   MENU NAVIGASI HP
========================================= */

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
    });
  });

  document.addEventListener("click", event => {
    const clickedInsideMenu = mainNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
    }
  });
}

/* =========================================
   TOMBOL TUTUP DIALOG
========================================= */

const closeCaseButton = $("#closeDialog");
const closeGalleryButton = $("#closeGalleryDialog");

if (closeCaseButton) {
  closeCaseButton.addEventListener("click", () => {
    closeDialog(caseDialog);
  });
}

if (closeGalleryButton) {
  closeGalleryButton.addEventListener("click", () => {
    closeDialog(galleryDialog);
  });
}

/* =========================================
   TUTUP DIALOG DENGAN KLIK LATAR
========================================= */

[caseDialog, galleryDialog].forEach(dialog => {
  if (!dialog) return;

  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      closeDialog(dialog);
    }
  });

  dialog.addEventListener("close", () => {
    dialog.querySelectorAll("video").forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    if (
      (!caseDialog || !caseDialog.open) &&
      (!galleryDialog || !galleryDialog.open)
    ) {
      document.body.classList.remove("dialog-open");
    }
  });
});

/* =========================================
   TAHUN FOOTER
========================================= */

setText("#currentYear", new Date().getFullYear());

/* =========================================
   INISIALISASI
========================================= */

populatePeriods();
updateStats();
renderCases();
renderGallery("semua");