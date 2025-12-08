document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });


    // --- Scroll Animations (Intersection Observer) ---
    const animateBlocks = document.querySelectorAll('.animate-block');

    const observerOptions = {
        root: null, // use browser viewport as root
        rootMargin: '0px',
        threshold: 0.2 // trigger animation when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // stop observing once animated
            }
        });
    }, observerOptions);

    animateBlocks.forEach(block => {
        observer.observe(block);
    });


    // --- Simple Parallax Effect for Global Network Section ---
    // (The background-attachment: fixed in CSS handles this for most devices, 
    // but JS can offer more control if needed. For now, the CSS solution is sufficient and performant.)

});