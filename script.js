// Array of emojis to float up
const emojis = ['🎈', '💝', '🎉', '💖', '🎁', '🎊', '❤️', '🎀', '🎂'];
let emojiInterval = 500;
let emojiIntervalId = setInterval(createFloatingEmoji, emojiInterval);

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random position for the emoji
    emoji.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(emoji);

    // Set a timeout to fade out the emoji after 3 seconds
    setTimeout(() => {
        emoji.classList.add('faded');
    }, 3000);

    // Remove the emoji after it has faded out
    setTimeout(() => {
        emoji.remove();
    }, 7000); // Matches with fade out + transition time
}

document.getElementById('gift-btn').addEventListener('click', () => {
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.classList.remove('hidden');
    setTimeout(() => {
        iframeContainer.classList.add('visible');
    }, 10); // Small delay to ensure the transition occurs
});

function addEmojiBackground() {
    const button = document.getElementById('gift-btn');
    const emojiContainer = document.createElement('div');
    emojiContainer.classList.add('emoji-background');
    
    const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    
    positions.forEach(position => {
        const emoji = document.createElement('div');
        emoji.classList.add('button-emoji', position);
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emojiContainer.appendChild(emoji);
    });

    button.appendChild(emojiContainer);

    // Remove emoji container when hover ends
    button.addEventListener('mouseleave', () => {
        emojiContainer.remove();
    });
}

// Add emoji background on hover
document.getElementById('gift-btn').addEventListener('mouseenter', addEmojiBackground);

const emojiIntervalSlider = document.getElementById('emoji-interval-slider');
const emojiIntervalValue = document.getElementById('emoji-interval-value');

emojiIntervalSlider.addEventListener('input', (event) => {
    emojiInterval = event.target.value;
    emojiIntervalValue.textContent = emojiInterval;
    clearInterval(emojiIntervalId);
    emojiIntervalId = setInterval(createFloatingEmoji, emojiInterval);

    emojiIntervalSlider.style.setProperty('--slider-value', `${(emojiIntervalSlider.value - emojiIntervalSlider.min) / (emojiIntervalSlider.max - emojiIntervalSlider.min) * 100}%`);

});