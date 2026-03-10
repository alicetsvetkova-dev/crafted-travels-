document.addEventListener('DOMContentLoaded', () => {

    // 1. Défilement doux compensé pour la barre de navigation fixe
    const navHeight = document.querySelector('.sticky-nav').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
    
            if (targetElement) {
    
                let targetPosition;
    
                if (window.innerWidth <= 768) {
                    // mobile offset
                    targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                } else {
                    // EXACT original desktop behavior
                    targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + 4;
                }
    
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Animations au défilement (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Déclenche l'animation 100px avant que l'élément n'entre dans l'écran

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Déclencher une fois au chargement pour les éléments déjà visibles
    revealOnScroll();

    // Déclencher à chaque défilement
    window.addEventListener('scroll', revealOnScroll);
});
function toggleInfo(icon) {
    const popup = icon.nextElementSibling;

    document.querySelectorAll('.info-popup').forEach(p => {
        if (p !== popup) {
            p.classList.remove('active');
        }
    });

    popup.classList.toggle('active');
}

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('info-trigger')) {
        document.querySelectorAll('.info-popup').forEach(p => {
            p.classList.remove('active');
        });
    }
});