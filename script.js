// Particle system
function initParticles() {
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
        let p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";
        p.style.animationDuration = (Math.random() * 10 + 10) + "s";
        p.style.opacity = Math.random() * 0.4;
        p.style.transform = `scale(${Math.random()})`;
        
        const keyframes = [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 50 - 25}px, -120vh)` }
        ];
        p.animate(keyframes, {
            duration: (Math.random() * 5000 + 10000),
            iterations: Infinity,
            easing: 'linear'
        });
        
        document.body.appendChild(p);
    }
}

// Copy IP Functionality
function copyIP(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        const msg = document.getElementById("copied");
        if (msg) {
            msg.style.display = "block";
            msg.style.opacity = "1";
            setTimeout(() => {
                msg.style.opacity = "0";
                setTimeout(() => { msg.style.display = "none"; }, 300);
            }, 2000);
        }
    });
}

// Scroll reveal
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => observer.observe(el));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initReveal();
    
    const intro = document.getElementById("intro");
    if (intro) {
        setTimeout(() => {
            intro.classList.add("hide");
            setTimeout(() => { intro.style.display = "none"; }, 1500);
        }, 2500);
    }
});
