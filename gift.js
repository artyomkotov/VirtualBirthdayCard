const emojis = ['🎈', '❤️', '🎉', '💖'];

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('giftSlider');
    const sliderValue = document.getElementById('sliderValue');
    const submitBtn = document.getElementById('submitBtn');
    const commentField = document.getElementById('comment');
    
    // Update the slider value display
    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });

    // Handle form submission
    submitBtn.addEventListener('click', () => {
        const sliderValue = slider.value;
        const comment = commentField.value;

        // Replace with your webhook URL
        const webhookUrl = 'https://discord.com/api/webhooks/1290680238937866361/msIEIN77DEGUu-f_YbPQ7Xu0SrXiU5V1lCQnP9qlzEZxeyPlkdmKEu4oIbWpmafcKVS8';

        // Prepare the payload for Discord webhook
        const payload = {
            content: `Slider Value: ${sliderValue}\nComment: ${comment}`,
            username: 'Gift Slider Bot'
        };

        // Send data to the webhook
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (response.ok) {
                console.log('Success:', response);
                alert('Thanks :)');
            } else {
                console.error('Error:', response);
                alert("Something didn't work :( tell me your thoughts on Discord instead :)");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Submission failed.');
        });
    });

    // Add emoji background on hover
    submitBtn.addEventListener('mouseenter', addEmojiBackground);
});

function addEmojiBackground() {
    const button = document.getElementById('submitBtn');
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