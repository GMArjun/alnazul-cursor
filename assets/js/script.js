// Custom JavaScript for Bootstrap Project

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: true,    // Whether animation should happen only once
        offset: 120,   // Offset (in px) from the original trigger point
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Show success message (you can replace this with actual form submission)
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Bootstrap tooltip initialization
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Bootstrap popover initialization
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// Custom JS for the project

document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: true,    // Whether animation should happen only once
        offset: 120,   // Offset (in px) from the original trigger point
    });

    // Auto-close mobile navbar on link click
    const navItems = document.querySelectorAll('#navbarNav .nav-link, #navbarNav .btn');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('#navbarNav');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            if (navCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Dynamic Navbar on Scroll
    const navbar = document.querySelector('.navbar-dynamic');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class and switch themes after scrolling a bit
        if (scrollTop > 10) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
        }
    }, false);
});

// Optionally, re-activate scrollspy on page load (for dynamic content)
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: 80
}); 