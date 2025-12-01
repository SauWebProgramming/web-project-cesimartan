// SPA ROUTES: Her sayfa için HTML şablonları
const routes = {
    hakkimda: () => `
        <section>
            <h2>Hakkımda</h2>
            <div class="about-grid">
                <!-- Sol taraf: metin -->
                <div class="about-text">
                    <p class="about-intro">
                        Merhaba, ben <strong>Cesim</strong>. Frontend geliştirme ve modern web
                        teknolojileriyle kullanıcı dostu arayüzler oluşturmaya ilgi duyuyorum.
                    </p>
                    <p>
                        HTML5, CSS3 ve JavaScript (ES6+) kullanarak dinamik ve duyarlı web
                        arayüzleri geliştiriyorum. Bu portfolyo sitesi de tamamen
                        <strong>Single Page Application (SPA)</strong> mantığıyla, sayfa
                        yenilenmeden çalışan bir örnek olarak hazırlandı.
                    </p>
                    <p>
                        Öğrenmeyi, yeni teknolojiler denemeyi ve tasarım ile kodu bir araya
                        getirmeyi seviyorum. Özellikle component tabanlı yapılar, temiz kod
                        yazımı ve kullanıcı deneyimi (UX) konularına önem veriyorum.
                    </p>

                    <div class="about-tags">
                        <span class="tag">HTML5</span>
                        <span class="tag">CSS3</span>
                        <span class="tag">JavaScript (ES6+)</span>
                        <span class="tag">SPA</span>
                        <span class="tag">Responsive Design</span>
                        <span class="tag">Git & GitHub</span>
                    </div>
                </div>

                <!-- Sağ taraf: kısa bilgiler / istatistikler -->
                <aside class="about-side">
                    <h3>Kısa Bilgiler</h3>
                    <ul class="about-list">
                        <li><span>Rol:</span> Frontend / Web Developer (öğrenci)</li>
                        <li><span>Odak:</span> Modern JS, SPA, responsive tasarım</li>
                        <li><span>Şehir:</span> İstanbul</li>
                    </ul>

                    <h3>Hedeflerim</h3>
                    <p class="about-goal">
                        Kısa vadede temel frontend teknolojilerinde kendimi
                        geliştirerek gerçek projelerde yer almak; uzun vadede ise
                        güçlü bir portfolyo ve tam zamanlı geliştirici pozisyonu
                        hedefliyorum.
                    </p>

                    <a href="#projelerim" class="btn-primary about-cta">
                        Projelerimi Gör
                    </a>
                </aside>
            </div>
        </section>
    `,

    projelerim: () => `
        <section>
            <h2>Projelerim</h2>
            <p>Projelerim, yerel bir <code>projects.json</code> dosyasından
            <code>fetch</code> ile yüklenmektedir.</p>
            <div id="projects-list" class="projects-grid">
                <!-- Projeler JavaScript ile yüklenecek -->
            </div>
        </section>
    `,

    iletisim: () => `
        <section>
            <h2>İletişim</h2>
            <p>
                Aşağıdaki formu doldurarak benimle iletişime geçebilirsin.
                Form HTML5 doğrulama ve ek JavaScript kontrolleri içermektedir.
            </p>
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
        </section>
    `
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

    // Odak yönetimi (erişilebilirlik için)
    app.focus();
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
