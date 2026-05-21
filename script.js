document.addEventListener('DOMContentLoaded', () => {
    const flask = document.querySelector('.flask');
    const primaryBtn = document.querySelector('.primary-btn');
    const liquid = document.querySelector('.liquid');

    // Create bubbles dynamically
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Randomize bubble properties
        const size = Math.random() * 15 + 5; // 5px to 20px
        const left = Math.random() * 100; // 0% to 100%
        const animationDuration = Math.random() * 2 + 2; // 2s to 4s
        const delay = Math.random() * 2;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.bottom = '10px';
        bubble.style.animationDuration = `${animationDuration}s`;
        bubble.style.animationDelay = `${delay}s`;

        flask.appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, (animationDuration + delay) * 1000);
    }

    // Start bubbling effect
    setInterval(createBubble, 300);

    // Interactive button
    primaryBtn.addEventListener('click', () => {
        // Change liquid color on click for interaction
        const hue = Math.floor(Math.random() * 360);
        liquid.style.background = `linear-gradient(180deg, hsl(${hue}, 80%, 50%), hsl(${hue}, 90%, 30%))`;
        liquid.style.boxShadow = `0 0 30px hsl(${hue}, 80%, 50%)`;
        
        // Temporarily increase bubble creation rate
        for (let i = 0; i < 10; i++) {
            setTimeout(createBubble, i * 50);
        }
    });
});
