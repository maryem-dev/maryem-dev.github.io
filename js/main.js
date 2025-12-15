// ===== MAIN JAVASCRIPT FILE =====
import Navigation from './components/Navigation.js';
import SkillAnimator from './components/SkillAnimator.js';
import ProjectCards from './components/ProjectCards.js';
import { 
    initSmoothScrolling, 
    updateCopyrightYear, 
    updateAvailabilityBadge, 
    displayWelcomeMessage 
} from './utils/helpers.js';

class Portfolio {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        console.log("🎯 Maryem's Portfolio - Loaded Successfully");
        
        // Initialize utilities
        updateCopyrightYear();
        initSmoothScrolling();
        displayWelcomeMessage();
        updateAvailabilityBadge();
        
        // Initialize components
        this.components.navigation = new Navigation();
        this.components.skillAnimator = new SkillAnimator();
        this.components.projectCards = new ProjectCards();
        
        // Export for debugging
        window.portfolio = this;
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});