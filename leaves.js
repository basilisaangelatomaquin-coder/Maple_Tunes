(() => {
  const canvas = document.getElementById('leaves');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const leafColors = ['#d9541e', '#f2b53f', '#a62b1f', '#e6a23a', '#8c3b12', '#c2410c', '#f59e0b', '#7b8a34'];
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;   // gentler if the user prefers
  let W = 0, H = 0, leaves = [];

  function newLeaf(anywhere){
    return {
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : -40,
      size: 9 + Math.random() * 16,
      speed: (0.25 + Math.random() * 0.45) * (calm ? 0.35 : 1),
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.008,
      swayAmt: 0.2 + Math.random() * 0.5,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.018,
      flip: Math.random() * Math.PI * 2,
      color: leafColors[Math.floor(Math.random() * leafColors.length)]
    };
  }

  function resizeLeaves(){
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(12, Math.min(32, Math.round(W / 48)));
    while (leaves.length < count) leaves.push(newLeaf(true));
    leaves.length = count;
  }

  function drawLeaf(l){
    const s = l.size;
    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.rotate(l.rot);
    ctx.scale(Math.cos(l.flip) * 0.6 + 0.5, 1);            // makes the leaf flutter
    ctx.globalAlpha = 0.75;
    ctx.fillStyle = l.color;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.bezierCurveTo(s * 0.95, -s * 0.45, s * 0.8, s * 0.6, 0, s);
    ctx.bezierCurveTo(-s * 0.8, s * 0.6, -s * 0.95, -s * 0.45, 0, -s);
    ctx.fill();
    ctx.strokeStyle = 'rgba(60,20,8,.5)';                  // the leaf's middle vein + stem
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(0, s * 1.35);
    ctx.stroke();
    ctx.restore();
  }

  function animateLeaves(){
    ctx.clearRect(0, 0, W, H);
    for (const l of leaves){
      l.y += l.speed;
      l.sway += l.swaySpeed;
      l.x += Math.sin(l.sway) * l.swayAmt + 0.12;
      l.rot += l.rotSpeed;
      l.flip += 0.012;
      if (l.y > H + 40){ Object.assign(l, newLeaf(false)); }
      if (l.x > W + 40) l.x = -40;
      if (l.x < -40) l.x = W + 40;
      drawLeaf(l);
    }
    requestAnimationFrame(animateLeaves);
  }

  window.addEventListener('resize', resizeLeaves);
  resizeLeaves();
  animateLeaves();
})();