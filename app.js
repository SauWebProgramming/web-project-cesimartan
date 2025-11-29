// 1) Sayfalarımızın HTML içeriklerini burada tanımlıyoruz
const routes = {
    hakkimda: `
        <section>
            <h2>Hakkımda</h2>
            <p>Merhaba, ben Cesim. Web geliştirme ile ilgileniyorum.</p>
            <p>Bu site, JavaScript ile yapılmış tek sayfalık (SPA) bir portfolyo örneğidir.</p>
        </section>
    `,
    projelerim: `
        <section>
            <h2>Projelerim</h2>
            <ul>
                <li>Proje 1 - Açıklama</li>
                <li>Proje 2 - Açıklama</li>
                <li>Proje 3 - Açıklama</li>
            </ul>
        </section>
    `,
    iletisim: `
        <section>
            <h2>İletişim</h2>
            <p>Bana ulaşmak için ileride buraya bir form koyacağız.</p>
        </section>
    `
};

// 2) Şu anki URL'den ( #hakkimda gibi ) route ismini al
function getCurrentRoute() {
    const hash = window.location.hash.replace('#', ''); // "#hakkimda" -> "hakkimda"

    if (!hash) {
        // Eğer hash yoksa (hiç # yoksa) varsayılan sayfa "hakkimda" olsun
        return 'hakkimda';
    }

    // Eğer tanımlı bir route ise onu döndür
    if (routes[hash]) {
        return hash;
    }

    // Tanımsız bir şey yazılırsa yine "hakkimda"ya dön
    return 'hakkimda';
}

// 3) Seçilen route'a göre #app içine HTML bas
function renderRoute() {
    const route = getCurrentRoute();           // Örn: "hakkimda"
    const app = document.getElementById('app'); // <main id="app">

    app.innerHTML = routes[route]; // ilgili HTML'i buraya yaz
}

// 4) Sayfa yüklendiğinde bir kez çalıştır
window.addEventListener('load', () => {
    // Eğer URL'de hash yoksa varsayılan olarak #hakkimda yap
    if (!window.location.hash) {
        window.location.hash = '#hakkimda';
    }

    renderRoute();
});

// 5) URL'deki hash değiştiğinde (linke tıklayınca) tekrar çalıştır
window.addEventListener('hashchange', () => {
    renderRoute();
});

