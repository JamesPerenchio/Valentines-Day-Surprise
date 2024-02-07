$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

function addConfetti() {
    // Configure confetti settings
    const config = {
        angle: 360,
        spread: 360,
        startVelocity: 45,
        elementCount: 400,
        decay: 0.9,
        colors: ['#FFD700', '#FF6347', '#00BFFF', '#FF4500', '#FF69B4'],
    };

    // Trigger confetti burst
    confetti(config);
    
}
document.getElementById('open').addEventListener('change', function () {
    if (this.checked) {
        addConfetti();
    }
});
