import { useEffect, useRef } from 'react';
import './Canvas.css';

export default function Canvas(props) {
    const canvas = useRef();
    let particles = [];
    let canvasX;
    let canvasY;

    useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        document.addEventListener('mousemove', (e) => { onMouseUpdate(e, ctx, canvas) }, false);
        window.addEventListener('resize', rePaint);
        init();
        animate(ctx);

        function rePaint() {
            console.log("Called");
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            particles = [];
            init();
        }

        return () => {
            let a = canvas;
            a.current.removeEventListener('mousemove', (e) => { onMouseUpdate(e, ctx, canvas) }, false);
            window.removeEventListener('resize', rePaint);
        }
    }, [])


    function onMouseUpdate(e, ctx, canvas) {
        let cRect = canvas.current.getBoundingClientRect();
        canvasX = Math.round(e.clientX - cRect.left);
        canvasY = Math.round(e.clientY - cRect.top);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function getMouseX() {
        return canvasX;
    }

    function getMouseY() {
        return canvasY;
    }

    function Particle(x, y, dirX, dirY, size, color) {
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.size = size;
        this.color = color;
    }

    Particle.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    Particle.prototype.update = function (ctx) {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.dirX = - this.dirX;
        }
        if (this.y + this.size > canvas.width || this.y - this.size < 0) {
            this.dirY = - this.dirY;
        }
        this.x += this.dirX;
        this.y += this.dirY;
        this.draw(ctx);
    }

    function init() {
        for (let index = 0; index < props.totalParticles; index++) {
            let size = Math.random() * 3;
            let x = Math.random() * (window.innerWidth - size * 2);
            let y = Math.random() * (window.innerHeight - size * 2);
            let dirX = (Math.random() * .4) - .2;
            let dirY = (Math.random() * .4) - .2;
            let color = 'black';

            particles.push(new Particle(x, y, dirX, dirY, size, color));
        }
    }
    function animate(ctx) {
        requestAnimationFrame(() => { animate(ctx) });
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let index = 0; index < particles.length; index++) {
            particles[index].update(ctx);
        }
        connect(ctx);
    }

    function connect(ctx) {
        for (let index = 0; index < particles.length; index++) {
            let distance = Math.sqrt((getMouseX() - particles[index].x) ** 2 + (getMouseY() - particles[index].y) ** 2);
            if (distance < 80) {
                ctx.strokeStyle = 'rgba(140,85,31,1)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[index].x, particles[index].y);
                ctx.lineTo(getMouseX(), getMouseY());
                ctx.stroke();
            }
        }
    }


    return <canvas ref={canvas} className="canvas">

    </canvas>
}