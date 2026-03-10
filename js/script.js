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
                    targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                } else {
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
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 3. Info popup toggle logic
    document.querySelectorAll('.info-trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            const popup = trigger.nextElementSibling;
            const isOpen = popup.classList.contains('show');

            // Close all popups first
            document.querySelectorAll('.info-popup.show').forEach(function (p) {
                p.classList.remove('show');
            });

            // Toggle the clicked one
            if (!isOpen) {
                popup.classList.add('show');
                repositionPopup(popup);
            }
        });
    });

    // Close popups on outside click
    document.addEventListener('click', function () {
        document.querySelectorAll('.info-popup.show').forEach(function (p) {
            p.classList.remove('show');
        });
    });

    // Prevent clicks inside popup from closing it
    document.querySelectorAll('.info-popup').forEach(function (popup) {
        popup.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

});

function repositionPopup(popup) {
    popup.style.left = '';
    popup.style.right = '';
    popup.style.transform = '';

    const rect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (rect.right > viewportWidth - 10) {
        popup.style.left = 'auto';
        popup.style.right = '0';
        popup.style.transform = 'none';
    } else if (rect.left < 10) {
        popup.style.left = '0';
        popup.style.transform = 'none';
    }
}