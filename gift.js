document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('giftSlider');
    const sliderValue = document.getElementById('sliderValue');
    const feedbackText = document.getElementById('feedbackText');
    const submitBtn = document.getElementById('submitBtn');
    const commentField = document.getElementById('comment');
    feedbackText.id = 'feedbackText';
    slider.parentElement.appendChild(feedbackText);

    // Update the slider value display
    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
        if (slider.value == 10) {
            feedbackText.textContent = "I'm glad you liked it! :)";
        } else if (slider.value == 0) {
            feedbackText.textContent = "I'm sorry you didn't like it :((";
        } else {
            feedbackText.textContent = "";
        }
    });
    // Handle form submission
    submitBtn.addEventListener('click', () => {
        const sliderValue = slider.value;
        const comment = commentField.value;

        // Replace with your webhook URL
        const webhookUrl = 'REPLACE-WITH-YOUR-WEBHOOK';

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
                alert("Something didn't work :( tell me your thoughts in DMs instead :)");
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
