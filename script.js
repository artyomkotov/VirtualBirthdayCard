// Array of emojis to float up
const emojis = ['🎈', '💝', '🎉', '💖'];

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

// Generate emojis every 500ms
setInterval(createFloatingEmoji, 500);

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