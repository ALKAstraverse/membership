document.addEventListener("DOMContentLoaded", function () {
    // 1. Cấu hình cho gói Plus (Particles JS)
    const plusContent = document.querySelector('.plan.plus .plan-content');
    
    // Chỉ chạy nếu phần tử tồn tại và thư viện particlesJS đã được tải
    if (plusContent && window.particlesJS) {
        particlesJS('plus-particles', {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.6, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.6, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }, },
            "retina_detect": true
        });
    }

    // 2. Cấu hình cho gói Pro (Hiệu ứng lấp lánh Sparkles)
    const proContent = document.querySelector('.plan.pro .plan-content');
    if (proContent) {
        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            // Vị trí ngẫu nhiên
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            // Độ trễ ngẫu nhiên để không nhấp nháy cùng lúc
            sparkle.style.animationDelay = `${Math.random() * 5}s`;
            proContent.appendChild(sparkle);
        }
    }
    
});
