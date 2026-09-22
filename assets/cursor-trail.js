/**
 * cursor-trail.js
 * Silver iridescent particle trail following the cursor.
 * Drop into assets/ and load via components.js (see below).
 *
 * To add to your site, paste this into components.js right before
 * the closing })(); :
 *
 *   const s = document.createElement('script');
 *   s.src = prefix + 'assets/cursor-trail.js';
 *   document.body.appendChild(s);
 */

(function () {
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed',
    top: '0', left: '0',
    width: '100%', height: '100%',
    pointerEvents: 'none',
    zIndex: '9999',
  });
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    'rgba(168,164,224,',   // violet-silver
    'rgba(157,216,232,',   // ice blue
    'rgba(196,184,240,',   // lavender
    'rgba(220,218,245,',   // near-white silver
    'rgba(168,216,208,',   // mint chrome
  ];

  window.addEventListener('mousemove', e => {
    for (let i = 0; i < 4; i++) {
      particles.push({
        x:     e.clientX + (Math.random() - 0.5) * 6,
        y:     e.clientY + (Math.random() - 0.5) * 6,
        size:  Math.random() * 3.5 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life:  1,
        decay: Math.random() * 0.022 + 0.016,
        vx:    (Math.random() - 0.5) * 0.7,
        vy:    (Math.random() - 0.5) * 0.7 - 0.25,
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, W, H);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= p.decay;
      p.x    += p.vx;
      p.y    += p.vy;
      p.size *= 0.97;

      if (p.life <= 0) { particles.splice(i, 1); continue; }

      const alpha = p.life * 0.85;

      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.1, p.size), 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha + ')';
      ctx.fill();

      /* 4-point sparkle on larger fresh particles */
      if (p.size > 2 && p.life > 0.65) {
        const arm = p.size * 2.2;
        ctx.beginPath();
        ctx.moveTo(p.x - arm, p.y); ctx.lineTo(p.x + arm, p.y);
        ctx.moveTo(p.x, p.y - arm); ctx.lineTo(p.x, p.y + arm);
        ctx.strokeStyle = p.color + (p.life * 0.3) + ')';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
