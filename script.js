function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 10 + 10 + 'px';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  heart.innerText = '💖';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 200);

function goTo(url) {
  window.open(url, '_blank');
}

let devtoolsOpen = false;
let devtoolsTimer;

function redirectToBlockedPage() {
  if (window.location.pathname !== '/blocked.html') {
    window.location.replace('blocked.html');
  }
}

function detectDevTools() {
  const check = () => {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
      devtoolsOpen = true;
      redirectToBlockedPage();
    }
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i')) {
      event.preventDefault();
      devtoolsOpen = true;
      redirectToBlockedPage();
    }
  });

  setInterval(check, 500);
  window.addEventListener('resize', check);
}

detectDevTools();

document.addEventListener('click', () => {
  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic && bgMusic.muted) {
    bgMusic.muted = false;
    bgMusic.play().catch((e) => {
      console.log('Trình duyệt chặn tự động phát nhạc:', e);
    });
  }
});
