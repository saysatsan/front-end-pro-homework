const voiceBox = document.getElementById('voice_container');

voiceBox.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('voice_emoji')) {
        const voiceItem = target.parentElement;
        const voiceResult = voiceItem.querySelector('.voice_result');
        
        let result = parseInt(voiceResult.textContent);
        result++;
        voiceResult.textContent = result;
    }
});






