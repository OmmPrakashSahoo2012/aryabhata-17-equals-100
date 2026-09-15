function doMagic() {
    const userNumber = document.getElementById('userNumber').value;
    const resultBox = document.getElementById('result');
    
    if (!userNumber) {
        resultBox.innerHTML = '😅 Please enter a number first!';
        return;
    }
    
    const num = parseInt(userNumber);
    
    // Fake explanations
    const explanations = [
        `✨ ${num} × 1.47 (The Ancient Cosmic Ratio) = ... 100! 100! 100!`,
        `🔮 According to Aryabhata's secret scrolls: ${num} in ancient Sanskrit numerals actually looks like 100 if you squint really hard!`,
        `📜 ${num} + The Power of Aryabhata's Wisdom = 100 (Math checks out!)`,
        `🌟 Using the Vedic algorithm of 'Wishful Thinking': ${num} = 100!`,
        `💫 Aryabhata's reply: "Trust me, I'm from 500 AD. ${num} absolutely equals 100."`,
        `🎭 If you count ${num} on your fingers backwards, you get 100!`,
        `👑 ${num} is just 100 in disguise. It's simple ancient magic! ✨`,
        `🎪 The cosmic truth: ${num} + (100 - ${num}) = 100. Therefore ${num} = 100. Q.E.D.`,
    ];
    
    const randomExplanation = explanations[Math.floor(Math.random() * explanations.length)];
    
    resultBox.style.animation = 'none';
    setTimeout(() => {
        resultBox.style.animation = 'bounce 0.6s ease-out';
    }, 10);
    
    resultBox.innerHTML = `
        <div style="text-align: center;">
            <p style="font-size: 2.5em; margin-bottom: 15px;">🎉</p>
            <p>${randomExplanation}</p>
            <p style="font-size: 1.5em; margin-top: 15px; color: #ff6b6b;">MIND BLOWN! 🤯</p>
        </div>
    `;
}

// Easter egg: Type 'reveal' to see a special message
document.addEventListener('keypress', (e) => {
    if (e.key === 'r' && e.ctrlKey) {
        alert('🎭 Shhhh! This is all a prank! Aryabhata was actually amazing at math. 17 ≠ 100 (But 17 + 83 = 100) 📚');
    }
});

// Fun console message
console.log('%c🎪 Aryabhata\'s Secret Academy 🎪', 'font-size: 2em; color: #667eea; font-weight: bold;');
console.log('%cWelcome to the Fakest Math Class Ever! 😄', 'font-size: 1.2em; color: #ff6b6b;');
console.log('%cRemember: This is just for fun! The real Aryabhata was a genius! 🧠', 'font-size: 1em; color: #764ba2;');