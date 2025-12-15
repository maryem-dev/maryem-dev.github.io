// ===== SKILL ANIMATOR COMPONENT =====
class SkillAnimator {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.observer = null;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillBar(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        this.skillBars.forEach(bar => this.observer.observe(bar));
    }

    animateSkillBar(progressBar) {
        const width = progressBar.style.width;
        progressBar.style.width = '0%';
        
        setTimeout(() => {
            progressBar.style.width = width;
            progressBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 300);
    }
}

export default SkillAnimator;