document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.skills-carousel');
  
  if (carousel) {
    const skills = [
      { name: 'Python', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'TensorFlow/Keras', level: 75 },
      { name: 'Flask', level: 70 },
      { name: 'Data Analysis', level: 85 }
    ];
    
    skills.forEach(skill => {
      const skillElement = document.createElement('div');
      skillElement.classList.add('skill-item');
      
      skillElement.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar">
          <div class="skill-progress" style="width: ${skill.level}%"></div>
        </div>
        <div class="skill-percent">${skill.level}%</div>
      `;
      
      carousel.appendChild(skillElement);
    });
  }
});