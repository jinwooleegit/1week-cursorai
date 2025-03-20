// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links (only for index page links)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            // Only apply smooth scrolling if it's an in-page anchor and we're on the same page
            if (!targetId.includes('.html')) {
                e.preventDefault();
                
                // Close mobile menu if it's open
                if (mainNav && mainNav.classList.contains('show')) {
                    mainNav.classList.remove('show');
                    hamburger.classList.remove('active');
                }
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // For links to other pages, just follow the link normally
                // But still close mobile menu if it's open
                if (mainNav && mainNav.classList.contains('show')) {
                    mainNav.classList.remove('show');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Add active class to navigation links based on scroll position (only on index page)
    function updateActiveNavLink() {
        // Only run on the index page
        if (window.location.pathname.includes('index.html') || 
            window.location.pathname.endsWith('/') || 
            window.location.pathname === '') {
            
            const sections = document.querySelectorAll('section[id]');
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeight - 20;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.add('active');
                } else {
                    document.querySelector(`.main-nav a[href="#${sectionId}"]`)?.classList.remove('active');
                }
            });
        } else {
            // For other pages, highlight the nav item that corresponds to the current page
            const currentPage = window.location.pathname.split('/').pop();
            const currentNavLink = document.querySelector(`.main-nav a[href="${currentPage}"]`);
            
            if (currentNavLink) {
                currentNavLink.classList.add('active');
            } else if (currentPage === 'guide.html') {
                document.querySelector('.main-nav a[href="guide.html"]')?.classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .step, .example-card, .resource-card, .portfolio-section, .blog-section, .landing-section, .guide-section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .step, .example-card, .resource-card, .portfolio-section, .blog-section, .landing-section, .guide-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animate, .step.animate, .example-card.animate, .resource-card.animate, 
        .portfolio-section.animate, .blog-section.animate, .landing-section.animate, .guide-section.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hamburger.active {
            background-color: transparent;
        }
        
        .hamburger.active::before {
            transform: rotate(45deg);
            top: 0;
        }
        
        .hamburger.active::after {
            transform: rotate(-45deg);
            bottom: 0;
        }
        
        .main-nav.show {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--background-color);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            z-index: 1000;
        }
        
        .main-nav.show ul {
            flex-direction: column;
            align-items: center;
        }
        
        .main-nav.show li {
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}); 