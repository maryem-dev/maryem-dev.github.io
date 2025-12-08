// Portfolio JavaScript - Modern & Interactive
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎯 Maryem's Portfolio - Loaded Successfully");
    
    // Initialize all features
    initializePortfolio();
});

function initializePortfolio() {
    // 1. Update copyright year automatically
    updateCopyrightYear();
    
    // 2. Initialize smooth scrolling for navigation
    initSmoothScrolling();
    
    // 3. Animate skill bars on scroll
    animateSkillBars();
    
    // 4. Set up active navigation highlighting
    setupActiveNav();
    
    // 5. Add hover effects to project cards
    setupProjectCardEffects();
    
    // 6. Console welcome message
    displayWelcomeMessage();
    
    // 7. Update availability badge
    updateAvailabilityBadge();
}

// 1. Update copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Also update footer text if needed
    const footerText = document.querySelector('.footer-internship');
    if (footerText && footerText.textContent.includes('2025')) {
        footerText.textContent = footerText.textContent.replace('2025', '2026');
    }
}

// 2. Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Skip if it's just #
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Navigation height
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
                
                // Update active nav after scrolling
                setTimeout(() => updateActiveNav(), 300);
            }
        });
    });
}

// 3. Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                // Animate to actual width
                setTimeout(() => {
                    progressBar.style.width = width;
                    progressBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 300);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => observer.observe(bar));
}

// 4. Set up active navigation highlighting
function setupActiveNav() {
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// 5. Add hover effects to project cards
function setupProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
}

// 6. Console welcome message
function displayWelcomeMessage() {
    console.log("%c👋 Welcome to Maryem's Portfolio!", 
        "color: #6366f1; font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;");
    console.log("%cFull Stack Developer | Seeking Feb 2026 Internship", 
        "color: #8b5cf6; font-size: 14px;");
    console.log("%cBuilt with passion and attention to detail 💻", 
        "color: #64748b; font-size: 12px;");
    
    // Easter egg - show portfolio info
    console.group("📊 Portfolio Information");
    console.log("📍 Location: Morocco");
    console.log("🎯 Target: Training Internship starting Feb 2026");
    console.log("💼 Status: Available for opportunities");
    console.groupEnd();
}

// 7. Update availability badge
function updateAvailabilityBadge() {
    const availabilityBadge = document.querySelector('.availability-badge.available');
    if (availabilityBadge) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1; // January is 0
        
        // Update badge based on current month
        if (currentMonth >= 1 && currentMonth <= 3) {
            availabilityBadge.textContent = 'Available Feb 2026';
            availabilityBadge.style.background = '#d1fae5';
            availabilityBadge.style.color = '#065f46';
        } else if (currentMonth >= 4 && currentMonth <= 6) {
            availabilityBadge.textContent = 'Available for Summer 2026';
            availabilityBadge.style.background = '#fef3c7';
            availabilityBadge.style.color = '#92400e';
        }
    }
}

// 8. Form validation (for future contact form)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Export functions for debugging (optional)
window.portfolio = {
    updateCopyrightYear,
    initSmoothScrolling,
    animateSkillBars,
    setupActiveNav,
    setupProjectCardEffects,
    validateEmail
};

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}