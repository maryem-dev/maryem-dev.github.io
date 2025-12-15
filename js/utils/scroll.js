// ===== SCROLL UTILITIES =====
export function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

export function scrollToElement(elementId, offset = 80) {
    const element = document.querySelector(elementId);
    if (element) {
        const position = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: position - offset,
            behavior: 'smooth'
        });
    }
}