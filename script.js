const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(x, y, color, speedX, speedY, radius) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;
    this.opacity = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= 0.01;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

const particles = [];

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Generate random fireworks explosions
  if (Math.random() < 0.01) {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    const particleCount = Math.random() * 50 + 50; // Random number of particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1; // Random speed
      const particle = new Particle(x, y, `hsl(${Math.random() * 360}, 100%, 50%)`, Math.cos(angle) * speed, Math.sin(angle) * speed, Math.random() * 3 + 1); // Random radius
      particles.push(particle);
    }
  }

  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.opacity <= 0) {
      particles.splice(index, 1);
    }
  });
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
