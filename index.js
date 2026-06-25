// ========================================
// MUSIC PLAYER CONTROLS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bg-music');
    
    if (audio) {
        console.log('✅ Music player found!');
        audio.volume = 0.3;
        
       
        // Event listeners
        audio.addEventListener('play', function() {
            console.log('▶️ Music started playing');
        });

        audio.addEventListener('pause', function() {
            console.log('⏸️ Music paused');
        });
    } else {
        console.error('❌ Audio element NOT found!');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    const audio = document.getElementById('bg-music');
    if (!audio) return;
    
    if (e.key === 'm' || e.key === 'M') {
        audio.muted = !audio.muted;
        console.log(audio.muted ? '🔇 Muted' : '🔊 Unmuted');
    }
    
    if (e.key === ' ' && !e.target.matches('input, textarea, button')) {
        e.preventDefault();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});
