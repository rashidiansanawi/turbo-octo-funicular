document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const hero = document.getElementById('landing');
    const surpriseBtn = document.getElementById('surprise-btn');
    const ticketOverlay = document.getElementById('ticket-overlay');
    const closeTicket = document.getElementById('close-ticket');
    const viewItineraryBtn = document.getElementById('view-itinerary-btn');
    const itinerarySection = document.getElementById('itinerary');

    // 1. Loader Logic
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.classList.add('hidden');
                hero.classList.add('active');
            }, 500);
        }, 1500); // Artificial delay for premium feel
    });

    // 2. Surprise Button Logic
    surpriseBtn.addEventListener('click', () => {
        ticketOverlay.classList.remove('hidden');
        setTimeout(() => {
            ticketOverlay.classList.add('visible');
        }, 10);
    });

    // 3. Close Ticket Logic
    closeTicket.addEventListener('click', () => {
        ticketOverlay.classList.remove('visible');
        setTimeout(() => {
            ticketOverlay.classList.add('hidden');
        }, 400);
    });

    // 4. View Itinerary Logic
    viewItineraryBtn.addEventListener('click', () => {
        // Hide overlay
        ticketOverlay.classList.remove('visible');

        setTimeout(() => {
            ticketOverlay.classList.add('hidden');

            // Show Itinerary
            itinerarySection.classList.remove('hidden');

            // Scroll to itinerary after a short delay for smooth appearance
            setTimeout(() => {
                itinerarySection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, 400);
    });
});
