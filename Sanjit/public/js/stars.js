document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('stars-container');
  const starsCount = 100;
  
  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random size between 1px and 3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random position
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    
    // Random opacity and animation delay
    star.style.opacity = Math.random();
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    // Occasionally make some stars purple
    if (Math.random() > 0.8) {
      star.style.backgroundColor = '#ba68c8';
    }
    
    container.appendChild(star);
  }
});