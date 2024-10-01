// Array of emojis to float up
const emojis = ['🎈', '❤️', '🎉', '💖'];

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random position for the emoji
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 2 + 6) + 's'; // Random speed between 6 and 8 seconds

    document.body.appendChild(emoji);

    // Set a timeout to fade out the emoji after 3 seconds
    setTimeout(() => {
        emoji.classList.add('faded');
    }, 3000);

    // Remove the emoji after it has faded out
    setTimeout(() => {
        emoji.remove();
    }, 5000); // Matches with fade out + transition time
}

// Generate emojis every 500ms
setInterval(createFloatingEmoji, 500);

document.getElementById('gift-btn').addEventListener('click', () => {
    alert('🎁 Surprise! Here\'s your gift!');
});
lementById('gift-btn').addEventListener('click', () => {
    alert('🎁 Surprise! Here\'s your gift!');
});
