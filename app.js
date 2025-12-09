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
        <section>
        <div class="section-header">
    <h2 class="section-title">Projelerim</h2>
    <p class="section-subtitle">
        Kişisel projelerim; frontend, SPA ve küçük web uygulamaları.
    </p>
</div>
            <div id="projects-list" class="projects-grid">
                <!-- Projeler JavaScript ile yüklenecek -->
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
async function loadProjects() {
    const container = document.getElementById("projects-list");
    if (!container) return;

    try {
        const response = await fetch("projects.json");
        if (!response.ok) {
            throw new Error("Projeler yüklenirken hata oluştu.");
        }

        const projects = await response.json();

        if (!Array.isArray(projects) || projects.length === 0) {
            container.innerHTML = "<p>Şu anda görüntülenecek proje bulunmuyor.</p>";
            return;
        }

        container.innerHTML = projects
            .map(
                (project) => `
            <article class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="project-meta">
                    <strong>Yıl:</strong> ${project.year} •
                    <strong>Tür:</strong> ${project.type}
                </p>
                <div class="project-tags">
                    ${project.technologies
                        .map((t) => `<span class="tag">${t}</span>`)
                        .join("")}
                </div>
                ${
                    project.link
                        ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">Projeyi Gör</a>`
                        : ""
                }
            </article>
        `
            )
            .join("");
    } catch (error) {
        console.error(error);
        container.innerHTML =
            "<p>Projeler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>";
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
