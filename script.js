document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const hero = document.getElementById('landing');
    const surpriseBtn = document.getElementById('surprise-btn');
    const ticketOverlay = document.getElementById('ticket-overlay');
    const closeTicket = document.getElementById('close-ticket');
    const viewItineraryBtn = document.getElementById('view-itinerary-btn');
    const itinerarySection = document.getElementById('itinerary');
    const openLetterBtn = document.getElementById('open-letter-btn');
    const letterOverlay = document.getElementById('letter-overlay');
    const closeLetter = document.getElementById('close-letter');

    // 1. Loader Logic
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.classList.add('hidden');
                hero.classList.add('active');
                // Auto-reveal hero items if needed
                const heroReveals = document.querySelectorAll('#landing .reveal');
                heroReveals.forEach(el => el.classList.add('visible'));
            }, 500);
        }, 1500);
    });

    // 2. Surprise Button Reveal
    surpriseBtn.addEventListener('click', () => {
        ticketOverlay.classList.remove('hidden');
        setTimeout(() => {
            ticketOverlay.classList.add('visible');
        }, 10);
    });

    // 3. Close Logic (Universal)
    [closeTicket, closeLetter].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                const overlay = btn.closest('.overlay');
                overlay.classList.remove('visible');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                }, 400);
            });
        }
    });

    // 4. View Itinerary Logic
    viewItineraryBtn.addEventListener('click', () => {
        ticketOverlay.classList.remove('visible');
        setTimeout(() => {
            ticketOverlay.classList.add('hidden');
            itinerarySection.classList.remove('hidden');

            setTimeout(() => {
                itinerarySection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, 400);
    });

    // 5. Letter Reveal Logic
    if (openLetterBtn) {
        openLetterBtn.addEventListener('click', () => {
            letterOverlay.classList.remove('hidden');
            setTimeout(() => {
                letterOverlay.classList.add('visible');
            }, 10);
        });
    }

    // 6. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});
