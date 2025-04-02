// CharaVector Landing Page JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Toggle between hamburger and close icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations for elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    // Add animation classes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Add animation classes to section titles
        const title = section.querySelector('.section-title');
        if (title) title.classList.add('fade-in');
        
        // Add animation classes to feature points
        const featurePoints = section.querySelectorAll('.feature-point');
        featurePoints.forEach((point, index) => {
            point.classList.add('fade-in');
            point.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add animation classes to steps
        const steps = section.querySelectorAll('.step');
        steps.forEach((step, index) => {
            step.classList.add('fade-in');
            step.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add animation classes to benefits
        const benefits = section.querySelectorAll('.benefit');
        benefits.forEach((benefit, index) => {
            benefit.classList.add('fade-in');
            benefit.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add animation classes to use case cards
        const useCaseCards = section.querySelectorAll('.use-case-card');
        useCaseCards.forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Add animation classes to pricing cards
        const pricingCards = section.querySelectorAll('.pricing-card');
        pricingCards.forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        animatedElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check for elements in viewport
    handleScrollAnimations();
    
    // Check for elements in viewport on scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Sticky header on scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('header-hidden');
        } else {
            // Scrolling up
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Add CSS for mobile menu and sticky header that wasn't in the original CSS file
    const style = document.createElement('style');
    style.textContent = `
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--dark-bg);
            padding: 1rem;
            box-shadow: var(--shadow-md);
            z-index: 1000;
            border-top: 1px solid rgba(184, 193, 236, 0.1);
        }
        
        .nav-links.active a {
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba(184, 193, 236, 0.1);
        }
        
        .mobile-menu-toggle.active {
            color: var(--accent-color);
        }
        
        header.scrolled {
            box-shadow: var(--shadow-md);
            background-color: rgba(15, 22, 36, 0.95);
        }
        
        header.header-hidden {
            transform: translateY(-100%);
            transition: transform 0.3s ease;
        }
        
        header {
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});
