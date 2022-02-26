const colors = ["#ff8080", "#ffff80", "#80ff80", "#80ffff", "#8080ff", "#ff80ff"];

const Particles = {
  canvas: null,
  context: null,
  count: 0,
  particleArray: [],

  mouse: { x: undefined, y: undefined },

  hoverRange: 50,
  radius: 0.5,
  maxRadius: 1.5,

  init: function () {
    this.canvas = document.getElementById("particles");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext("2d");

    this.count = Math.floor(Math.sqrt(window.innerWidth * window.innerWidth) * 0.75);

    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("resize", this.handleResize);

    this.generateParticles();
    this.drawParticles();

    return () => {
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("resize", this.handleResize);
    };
  },

  Star: function (x, y, dx, dy, radius, fill) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = this.radius;

    this.draw = function () {
      Particles.context.beginPath();
      Particles.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      Particles.context.fillStyle = fill;
      Particles.context.fill();
    };

    this.update = function () {
      if (this.x + this.radius > Particles.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
      if (this.y + this.radius > Particles.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

      this.x += this.dx;
      this.y += this.dy;

      if (
        Particles.mouse.x - this.x < Particles.hoverRange &&
        Particles.mouse.x - this.x > -Particles.hoverRange &&
        Particles.mouse.y - this.y < Particles.hoverRange &&
        Particles.mouse.y - this.y > -Particles.hoverRange
      ) {
        this.radius = this.minRadius + 1;
      } else if (this.radius > this.minRadius) {
        this.radius = this.minRadius;
      }

      this.draw();
    };
  },

  generateParticles: function () {
    this.particleArray = [];

    for (let i = 0; i < this.count; i++) {
      const radius = Particles.radius;
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;
      const dx = Math.random() - 0.5;
      const dy = Math.random() - 1;
      const fill = colors[Math.floor(Math.random() * colors.length)];

      this.particleArray.push(new this.Star(x, y, dx, dy, radius, fill));
    }
  },

  drawParticles: function () {
    Particles.context.clearRect(0, 0, Particles.canvas.width, Particles.canvas.height);

    for (let i = 0; i < Particles.particleArray.length; i++) {
      const circle = Particles.particleArray[i];
      circle.update();
    }

    requestAnimationFrame(Particles.drawParticles);
  },

  handleMouseMove: function ({ x, y }) {
    Particles.mouse.x = x;
    Particles.mouse.y = y;
  },

  handleResize: function () {
    Particles.canvas.width = window.innerWidth;
    Particles.canvas.height = window.innerHeight;
  },
};

export default Particles;
