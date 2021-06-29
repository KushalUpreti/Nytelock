let canvas = document.getElementById('canvas');
const ctx = canvas.current.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particles = [];


function Particle(x, y, dirX, dirY, size, color) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
}

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.dirX = - this.dirX;
    }
    if (this.y + this.size > canvas.width || this.y - this.size < 0) {
        this.dirY = - this.dirY;
    }
    this.x += this.dirX;
    this.y += this.dirY;
    this.draw();
}

function init() {
    for (let index = 0; index < 100; index++) {
        let size = Math.random() * 20;
        let x = Math.random() * (window.innerWidth - size * 2);
        let y = Math.random() * (window.innerHeight - size * 2);
        let dirX = (Math.random() * .4) - .2;
        let dirY = (Math.random() * .4) - .2;
        let color = 'black';

        particles.push(new Particle(x, y, dirX, dirY, size, color));
    }
}
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let index = 0; index < particles.length; index++) {
        particles[index].update();

    }
}

init()
animate()
