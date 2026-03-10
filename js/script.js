document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth scroll
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
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // 2. Scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // 3. Info popups
    function closeAllPopups() {
        document.querySelectorAll('.info-popup.show').forEach(p => p.classList.remove('show'));
    }

    function repositionPopup(popup) {
        popup.style.left = '';
        popup.style.right = '';
        popup.style.transform = '';
        const rect = popup.getBoundingClientRect();
        if (rect.right > window.innerWidth - 10) {
            popup.style.left = 'auto';
            popup.style.right = '0';
            popup.style.transform = 'none';
        } else if (rect.left < 10) {
            popup.style.left = '0';
            popup.style.transform = 'none';
        }
    }

    document.querySelectorAll('.info-trigger').forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            const popup = this.nextElementSibling;
            const isOpen = popup.classList.contains('show');
            closeAllPopups();
            if (!isOpen) {
                popup.classList.add('show');
                repositionPopup(popup);
            }
        });
    });

    document.querySelectorAll('.info-popup').forEach(popup => {
        popup.addEventListener('click', e => e.stopPropagation());
    });

    document.addEventListener('click', closeAllPopups);

});