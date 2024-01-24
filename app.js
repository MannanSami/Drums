function play(e) {
    const sound = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    
    if (!sound) {
        return;
    }

    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');

    setTimeout(() => {
        key.classList.remove('playing');
    }, 200);
}

window.addEventListener('keydown', play);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend'));
