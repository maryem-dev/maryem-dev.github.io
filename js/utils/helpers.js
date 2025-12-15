// ===== HELPER FUNCTIONS =====
export function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    const footerText = document.querySelector('.footer-internship');
    if (footerText && footerText.textContent.includes('2025')) {
        footerText.textContent = footerText.textContent.replace('2025', '2026');
    }
}

export function updateAvailabilityBadge() {
    const availabilityBadge = document.querySelector('.availability-badge.available');
    if (availabilityBadge) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        
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

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function displayWelcomeMessage() {
    console.log("%c👋 Welcome to Maryem's Portfolio!", 
        "color: #6366f1; font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;");
    console.log("%cFull Stack Developer | Seeking Feb 2026 Internship", 
        "color: #8b5cf6; font-size: 14px;");
    console.log("%cBuilt with passion and attention to detail 💻", 
        "color: #64748b; font-size: 12px;");
    
    console.group("📊 Portfolio Information");
    console.log("📍 Location: Morocco");
    console.log("🎯 Target: Training Internship starting Feb 2026");
    console.log("💼 Status: Available for opportunities");
    console.groupEnd();
}