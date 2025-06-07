document.addEventListener('DOMContentLoaded', function() {
  const cube = document.getElementById('floating-cube');
  const logo = document.getElementById('3d-logo');
  
  if (cube) {
    let rotateX = 0;
    let rotateY = 0;
    
    // Auto-rotation
    setInterval(() => {
      rotateY += 0.5;
      cube.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, 50);
    
    // Mouse interaction
    window.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      rotateX = yAxis;
      rotateY = xAxis;
      cube.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }
  
  if (logo) {
    logo.addEventListener('mousemove', (e) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      
      logo.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
});