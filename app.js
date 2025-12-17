// SPA ROUTES: Her sayfa için HTML şablonları
const routes = {
   hakkimda: () => `
    <section class="hero-section">
        <div class="hero-inner">
            <h1 class="hero-heading">Merhaba, ben Cesim</h1>
            <p class="hero-lead">
                Frontend geliştirme ve modern web teknolojileriyle sade, hızlı ve kullanıcı dostu
                arayüzler oluşturmayı seviyorum.
            </p>

            <a href="#projelerim" class="hero-btn">
                Projelerimi Gör
            </a>

            <!-- Sosyal medya ikonları -->
            <div class="social-links">
                <a href="https://github.com/cesimartan" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/cesim-artan-4924a6337/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/artancess?igsh=MWFqYnNjNTJzcG9zbg==" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:cesim.artan@ogr.sakarya.edu.tr" aria-label="E-posta">
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </div>
        </div>
    </section>
`,


    projelerim: () => `
  <section class="projects-section">
    <div class="section-header">
      <h2 class="section-title">Projelerim</h2>
      <p class="section-subtitle">
        Kişisel projelerim; frontend, SPA ve küçük web uygulamaları.
      </p>
    </div>

    <div class="projects-toolbar glass-panel">
      <div class="projects-search">
        <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        <input
          id="projects-search"
          type="search"
          placeholder="Proje ara (başlık, açıklama, teknoloji)..."
          autocomplete="off"
        />
      </div>

      <div class="projects-toolbar-right">
        <div class="projects-stats" id="projects-stats">Yükleniyor…</div>

        <label class="projects-sort">
          <span>Sırala</span>
          <select id="projects-sort" aria-label="Projeleri sırala">
            <option value="new">En yeni</option>
            <option value="old">En eski</option>
            <option value="az">A → Z</option>
          </select>
        </label>
      </div>
    </div>

    <div class="projects-board">
      <aside class="projects-filters glass-panel">
        <div class="filters-head">
          <h3>Filtre</h3>
          <p>Tür’e göre hızlı filtrele</p>
        </div>

        <div id="projects-chips" class="filter-chips" aria-label="Proje filtreleri">
          <!-- JS ile dolacak -->
        </div>

        <div class="filters-foot">
          <div class="hint">
            <span class="dot dot-yellow"></span>
            Arka planla uyumlu “glass” kartlar
          </div>
          <div class="hint">
            <span class="dot dot-blue"></span>
            Hover’da neon kenar vurgusu
          </div>
        </div>
      </aside>

      <div class="projects-main">
        <div id="projects-featured" class="projects-featured glass-panel">
          <!-- JS ile dolacak -->
        </div>

        <div class="projects-list-wrap">
          <div class="projects-list-head">
            <h3>Diğer Projeler</h3>
            <p>Arama/filtre/sıralama ile güncellenir</p>
          </div>

          <div id="projects-list" class="projects-list">
            <!-- JS ile dolacak -->
          </div>
        </div>
      </div>
    </div>
  </section>
`,


    iletisim: () => `
    <section class="contact-section">
        <div class="contact-header">
            <h2>İletişim</h2>
            <p>
                Aşağıdaki formu doldurarak benimle iletişime geçebilirsin.
            </p>
        </div>

        <div class="contact-wrapper">
            <!-- Sol bilgi alanı -->
            <div class="contact-info">
                <h3>Birlikte çalışalım</h3>
                <p>
                    Frontend projeleri, SPA uygulamaları veya küçük web araçları için
                    fikirlerini hayata geçirmek istersen bana yazabilirsin.
                </p>

                <ul class="contact-info-list">
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        cesim.artan@ogr.sakarya.edu.tr
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        Sakarya / Türkiye
                    </li>
                    <li>
                        <i class="fa-solid fa-code"></i>
                        HTML • CSS • JavaScript • SPA
                    </li>
                </ul>
            </div>

            <!-- Sağ form alanı -->
            <div class="contact-form">
                <form id="contact-form" novalidate>
                    <div class="form-row">
                        <div>
                            <label for="name">Ad Soyad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                minlength="3"
                                placeholder="Adınız Soyadınız"
                            >
                        </div>
                        <div>
                            <label for="email">E-posta</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="ornek@mail.com"
                            >
                        </div>
                    </div>

                    <div>
                        <label for="subject">Konu</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            minlength="3"
                            placeholder="Mesaj konusu"
                        >
                    </div>

                    <div>
                        <label for="message">Mesaj</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            minlength="20"
                            placeholder="Mesajınız en az 20 karakter olmalıdır."
                        ></textarea>
                    </div>

                    <button type="submit" class="btn-primary">Gönder</button>
                    <div id="form-message" class="form-message" aria-live="polite"></div>
                </form>
            </div>
        </div>
    </section>
`,
};

// URL'den route adını al (#hakkimda gibi)
function getCurrentRoute() {
    const hash = window.location.hash.replace("#", "");

    if (!hash) {
        return "hakkimda"; // varsayılan sayfa
    }

    if (routes[hash]) {
        return hash;
    }

    // Bilinmeyen bir hash yazılırsa yine hakkimda'ya dön
    return "hakkimda";
}

// Seçilen route'a göre #app içine HTML bas
function renderRoute() {
    const route = getCurrentRoute();
    const app = document.getElementById("app");

    const routeTemplate = routes[route];
    if (typeof routeTemplate === "function") {
        app.innerHTML = routeTemplate();
    }

    // Route bazlı ekstra işlemler
    if (route === "projelerim") {
        loadProjects();
    } else if (route === "iletisim") {
        setupContactForm();
    }
}

// Yerel JSON dosyasından projeleri yükle
let __projectsCache = null;

function trNormalize(input) {
  const s = (input ?? "").toString().toLowerCase();
  // Türkçe karakterleri daha stabil arama için normalize edelim
  return s
    .replaceAll("ı", "i")
    .replaceAll("İ", "i")
    .replaceAll("ş", "s")
    .replaceAll("Ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("Ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("Ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("Ö", "o")
    .replaceAll("ç", "c")
    .replaceAll("Ç", "c");
}

function pickFeatured(projects) {
  // En yeni yıl + teknoloji sayısı yüksek olana öncelik
  const sorted = [...projects].sort((a, b) => {
    const y = (b.year ?? 0) - (a.year ?? 0);
    if (y !== 0) return y;
    return (b.technologies?.length ?? 0) - (a.technologies?.length ?? 0);
  });
  return sorted[0] || null;
}

function renderSkeletons(featuredEl, listEl, chipsEl, statsEl) {
  if (statsEl) statsEl.textContent = "Yükleniyor…";
  if (chipsEl) {
    chipsEl.innerHTML = `
      <span class="chip-skeleton"></span>
      <span class="chip-skeleton"></span>
      <span class="chip-skeleton"></span>
    `;
  }
  if (featuredEl) {
    featuredEl.innerHTML = `
      <div class="sk-block">
        <div class="sk-line w-40"></div>
        <div class="sk-line w-70"></div>
        <div class="sk-line w-90"></div>
        <div class="sk-line w-60"></div>
        <div class="sk-tags">
          <span class="sk-pill"></span><span class="sk-pill"></span><span class="sk-pill"></span>
        </div>
      </div>
    `;
  }
  if (listEl) {
    listEl.innerHTML = new Array(6).fill(0).map(() => `
      <article class="project-item skeleton">
        <div class="sk-line w-55"></div>
        <div class="sk-line w-85"></div>
        <div class="sk-line w-35"></div>
      </article>
    `).join("");
  }
}

function renderChips(chipsEl, types, activeType) {
  const all = ["Tümü", ...types];
  chipsEl.innerHTML = all.map((t) => `
    <button
      type="button"
      class="filter-chip ${activeType === t ? "active" : ""}"
      data-type="${t}"
    >
      ${t}
    </button>
  `).join("");
}

function renderFeatured(featuredEl, project) {
  if (!project) {
    featuredEl.innerHTML = `<p>Öne çıkarılacak proje bulunamadı.</p>`;
    return;
  }

  const tech = (project.technologies ?? []).slice(0, 8);
  const hasLink = !!project.link;

  featuredEl.innerHTML = `
    <div class="featured-head">
      <span class="featured-badge">
        <i class="fa-solid fa-bolt" aria-hidden="true"></i>
        Öne Çıkan
      </span>
      <span class="featured-meta">
        ${project.year ?? ""} • ${project.type ?? ""}
      </span>
    </div>

    <h3 class="featured-title">${project.title ?? ""}</h3>
    <p class="featured-desc">${project.description ?? ""}</p>

    <div class="tag-row">
      ${tech.map((t) => `<span class="tag-pill">${t}</span>`).join("")}
    </div>

    <div class="featured-actions">
      ${
        hasLink
          ? `<a class="btn-mini primary" href="${project.link}" target="_blank" rel="noreferrer">Projeyi Aç</a>`
          : `<span class="btn-mini disabled" aria-disabled="true" title="Link eklenmemiş">Yakında</span>`
      }
      <span class="subtle">Daha fazlası aşağıda</span>
    </div>
  `;
}

function renderList(listEl, items) {
  if (!items.length) {
    listEl.innerHTML = `
      <div class="empty-state glass-panel">
        <h4>Sonuç bulunamadı</h4>
        <p>Arama terimini değiştir veya filtreyi “Tümü” yap.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map((p) => {
    const tech = (p.technologies ?? []).slice(0, 6);
    const hasLink = !!p.link;

    return `
      <article class="project-item">
        <div class="project-item-top">
          <h4 class="project-item-title">${p.title ?? ""}</h4>
          <span class="project-item-meta">${p.year ?? ""} • ${p.type ?? ""}</span>
        </div>

        <p class="project-item-desc">${p.description ?? ""}</p>

        <div class="project-item-bottom">
          <div class="tag-row compact">
            ${tech.map((t) => `<span class="tag-pill small">${t}</span>`).join("")}
          </div>

          ${
            hasLink
              ? `<a class="btn-mini" href="${p.link}" target="_blank" rel="noreferrer">Aç</a>`
              : `<span class="btn-mini disabled" aria-disabled="true">Yakında</span>`
          }
        </div>
      </article>
    `;
  }).join("");
}

function updateStats(statsEl, projects) {
  if (!statsEl) return;
  const years = projects.map(p => p.year).filter(Boolean);
  const minY = years.length ? Math.min(...years) : "";
  const maxY = years.length ? Math.max(...years) : "";
  const range = minY && maxY ? `${minY}–${maxY}` : "";
  statsEl.textContent = `${projects.length} proje ${range ? "• " + range : ""}`;
}

async function loadProjects() {
  const listEl = document.getElementById("projects-list");
  const featuredEl = document.getElementById("projects-featured");
  const chipsEl = document.getElementById("projects-chips");
  const statsEl = document.getElementById("projects-stats");
  const searchEl = document.getElementById("projects-search");
  const sortEl = document.getElementById("projects-sort");

  if (!listEl || !featuredEl || !chipsEl || !searchEl || !sortEl) return;

  // UI state
  let activeType = "Tümü";
  let query = "";
  let sortMode = "new";

  // İlk açılışta skeleton
  renderSkeletons(featuredEl, listEl, chipsEl, statsEl);

  try {
    if (!__projectsCache) {
      const response = await fetch("projects.json");
      if (!response.ok) throw new Error("Projeler yüklenirken hata oluştu.");
      const data = await response.json();
      __projectsCache = Array.isArray(data) ? data : [];
    }

    const projects = __projectsCache;

    if (!projects.length) {
      listEl.innerHTML = "<p>Şu anda görüntülenecek proje bulunmuyor.</p>";
      featuredEl.innerHTML = "";
      chipsEl.innerHTML = "";
      if (statsEl) statsEl.textContent = "0 proje";
      return;
    }

    const types = [...new Set(projects.map(p => p.type).filter(Boolean))].sort();
    renderChips(chipsEl, types, activeType);

    const featured = pickFeatured(projects);
    renderFeatured(featuredEl, featured);

    updateStats(statsEl, projects);

    const apply = () => {
      query = trNormalize(searchEl.value.trim());
      sortMode = sortEl.value;

      let items = projects.filter((p) => {
        const okType = activeType === "Tümü" ? true : (p.type === activeType);
        if (!okType) return false;

        if (!query) return true;

        const hay = trNormalize(
          `${p.title ?? ""} ${p.description ?? ""} ${(p.technologies ?? []).join(" ")} ${p.type ?? ""} ${p.year ?? ""}`
        );
        return hay.includes(query);
      });

      if (sortMode === "new") {
        items.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
      } else if (sortMode === "old") {
        items.sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
      } else if (sortMode === "az") {
        items.sort((a, b) => (a.title ?? "").localeCompare((b.title ?? ""), "tr"));
      }

      // Featured projeyi listeden çıkar (aynı projeyi iki kez göstermeyelim)
      if (featured?.title) {
        items = items.filter((p) => p.title !== featured.title);
      }

      renderList(listEl, items);
    };

    // Event binding (tekrar renderRoute çağrılınca iki kez bağlanmasın)
    if (!chipsEl.dataset.bound) {
      chipsEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-chip");
        if (!btn) return;
        activeType = btn.dataset.type || "Tümü";
        [...chipsEl.querySelectorAll(".filter-chip")].forEach(b => b.classList.toggle("active", b === btn));
        apply();
      });
      chipsEl.dataset.bound = "true";
    }

    if (!searchEl.dataset.bound) {
      searchEl.addEventListener("input", apply);
      searchEl.dataset.bound = "true";
    }

    if (!sortEl.dataset.bound) {
      sortEl.addEventListener("change", apply);
      sortEl.dataset.bound = "true";
    }

    apply();
  } catch (error) {
    console.error(error);
    if (statsEl) statsEl.textContent = "Hata";
    featuredEl.innerHTML = `<p>Projeler yüklenirken bir hata oluştu.</p>`;
    listEl.innerHTML = `<p>Projeler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>`;
    chipsEl.innerHTML = "";
  }
}


// İletişim formu doğrulama
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");
    if (!form || !messageBox) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        messageBox.textContent = "";
        messageBox.className = "form-message";

        // HTML5 validity API
        if (!form.checkValidity()) {
            messageBox.textContent =
                "Lütfen formdaki zorunlu alanları doğru şekilde doldurunuz.";
            messageBox.classList.add("error");
            return;
        }

        const message = form.message.value.trim();

        // Ek JS doğrulamaları (örnek)
        if (message.length < 20) {
            messageBox.textContent =
                "Mesajınız en az 20 karakter olmalıdır.";
            messageBox.classList.add("error");
            return;
        }

        // Backend olmadığı için sadece başarı mesajı gösteriyoruz
        messageBox.textContent = "Mesajınız başarıyla gönderildi (simülasyon). Teşekkürler!";
        messageBox.classList.add("success");

        // Formu temizleyelim
        form.reset();
    });
}

// Hamburger menü kontrolü
function setupNavigationToggle() {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".site-nav a");

    if (!navToggle || !nav) return;

    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Linke tıklanınca mobil menüyü kapat
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("open")) {
                nav.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    });
}

// Sayfa yüklendiğinde
window.addEventListener("load", () => {
    if (!window.location.hash) {
        window.location.hash = "#hakkimda";
    }
    setupNavigationToggle();
    renderRoute();
});

// Hash değiştiğinde (menü linklerine tıklayınca vs.)
window.addEventListener("hashchange", () => {
    renderRoute();
});
