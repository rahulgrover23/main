function initStars() {
  const starsWrap = document.getElementById('stars');
  if (!starsWrap) return;
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 3 + 1;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.animationDuration = (Math.random() * 3 + 2) + 's, ' + (Math.random() * 6 + 4) + 's';
    s.style.animationDelay = (Math.random() * 3) + 's';
    starsWrap.appendChild(s);
  }
}

const confettiColors = ['#ff0080', '#7928ca', '#2af598', '#009efd', '#ff6a00', '#ffee00', '#ff3d3d'];

function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    c.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

function launchBalloons() {
  const emojis = ['🎈', '🎈', '🎈', '🎉', '⭐'];
  for (let i = 0; i < 12; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    b.style.left = Math.random() * 90 + 'vw';
    b.style.animationDelay = (Math.random() * 1.2) + 's';
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 4500);
  }
}

let partyOn = false;
function partyMode() {
  partyOn = !partyOn;
  document.body.classList.toggle('party-mode', partyOn);
  if (partyOn) {
    launchConfetti();
    launchBalloons();
  }
}

document.addEventListener('DOMContentLoaded', initStars);
