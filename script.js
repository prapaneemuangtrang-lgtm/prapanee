// Reveal Animations on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Trigger once on load
reveal();

// Navbar Logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        navbar.classList.add('py-2');
        navbar.classList.remove('py-3');
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.classList.remove('py-2');
        navbar.classList.add('py-3');
    }
});

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Secret Modal Logic
const secretBtn = document.getElementById('secret-btn');
const secretModal = document.getElementById('secret-modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.getElementById('modal-content');

function toggleModal(show) {
    if (!secretModal) return;

    if (show) {
        secretModal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            secretModal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-90');
            modalContent.classList.add('scale-100');
        }, 10);
    } else {
        secretModal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-90');
        setTimeout(() => {
            secretModal.classList.add('hidden');
        }, 300); // Wait for transition
    }
}

if (secretBtn) secretBtn.addEventListener('click', () => toggleModal(true));
if (closeModal) closeModal.addEventListener('click', () => toggleModal(false));

// Close on clicking outside
if (secretModal) {
    secretModal.addEventListener('click', (e) => {
        if (e.target === secretModal) {
            toggleModal(false);
        }
    });
}