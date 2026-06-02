let currentPageIndex = 0;
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateBook() {
    pages.forEach((page, index) => {
        if (index === currentPageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    // Atur tombol aktif/nonaktif
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === pages.length - 1;
}

function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateBook();
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateBook();
    }
}

function resetBook() {
    currentPageIndex = 0;
    updateBook();
}

function openEnvelope(element) {
    element.classList.toggle('open');
}

// ====== ANIMASI TAMBAHAN: Efek Kelopak Hati Berjatuhan ======
function createHeartEffect() {
    const container = document.querySelector('.falling-elements');
    const shapes = ['❤️', '✨', '🌸', '💖'];
    
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.innerText = shapes[Math.floor(Math.random() * shapes.length)];
        el.style.position = 'fixed';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = '-20px';
        el.style.fontSize = Math.random() * 15 + 15 + 'px';
        el.style.animation = `fallEffect ${Math.random() * 3 + 3}s linear infinite`;
        el.style.animationDelay = `${Math.random() * 5}s`;
        el.style.opacity = Math.random();
        container.appendChild(el);
    }
}

// Tambahkan CSS Keyframe buat animasi jatuh secara dinamis
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fallEffect {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(105vh) rotate(360deg); }
    }
`, styleSheet.cssRules.length);

// Jalankan efek saat halaman dimuat
window.onload = () => {
    createHeartEffect();
};