// Array of emojis to float up
const emojis = ['🎈', '💝', '🎉', '💖', '🎁', '🎊', '❤️', '🎀', '🎂'];
let emojiInterval = 500;
let emojiIntervalId = setInterval(createFloatingEmoji, emojiInterval);
let currentUrl = "gift.html";
let previousUrl = "";

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

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the iframe always starts with gift.html
    document.getElementById('gift-iframe').src = 'gift.html';
});

document.getElementById('gift-btn').addEventListener('click', () => {
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.classList.remove('hidden');

        // Force reflow to ensure the animation plays
        void iframeContainer.offsetHeight;

    setTimeout(() => {
        iframeContainer.classList.add('visible');
    }, 10); // Small delay to ensure the transition occurs

    // Show the bottom-right button with a smooth transition
    const bottomRightBtn = document.getElementById('bottom-right-btn');
    bottomRightBtn.style.display = 'block'; // Ensure it's displayed

    void bottomRightBtn.offsetHeight;

    setTimeout(() => {
        bottomRightBtn.classList.add('visible');
    }, 10); // Small delay to ensure the transition occurs
        
});

document.getElementById('bottom-right-btn').addEventListener('click', () => {
    const iframe = document.getElementById('gift-iframe');
    if (iframe.src.endsWith('gift.html')) {
        // Switch to the new URL
        previousUrl = currentUrl;
        currentUrl = "gallery.html"; // Change this to the desired URL
        iframe.src = currentUrl;
        document.getElementById('bottom-right-btn').textContent = "Back";
       /* console.log("Switched to gallery.html");
        console.log(previousUrl);
        console.log(currentUrl);*/
    } else {
        // Switch back to the previous URL
        iframe.src = previousUrl;
        currentUrl = previousUrl;
        previousUrl = "gift.html"; // Reset to the initial URL
        document.getElementById('bottom-right-btn').textContent = "Next";
       /* console.log("Switched to gift.html");
        console.log(previousUrl);
        console.log(currentUrl); */
    }
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