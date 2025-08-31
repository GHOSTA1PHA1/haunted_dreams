(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)'); if (mq.matches) return;
  const c = document.getElementById('fx'); if (!c) return;
  const ctx = c.getContext('2d'); const DPR = Math.min(window.devicePixelRatio||1,2);
  const fit = () => { c.width = c.clientWidth*DPR; c.height = c.clientHeight*DPR; };
  fit(); addEventListener('resize', fit);
  const COUNT = Math.floor((c.width*c.height)/90000);
  const p = Array.from({length:COUNT}, ()=>({
    x: Math.random()*c.width, y: Math.random()*c.height, r: .7+Math.random()*1.8,
    vx:(Math.random()-.5)*.12*DPR, vy:(Math.random()-.5)*.12*DPR, a:.2+Math.random()*.5
  }));
  let id; (function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    const g = ctx.createRadialGradient(c.width*.2,c.height*.2,0,c.width*.2,c.height*.2,Math.max(c.width,c.height));
    g.addColorStop(0,'rgba(124,58,237,.06)'); g.addColorStop(1,'rgba(0,0,0,0)'); ctx.fillStyle=g; ctx.fillRect(0,0,c.width,c.height);
    for (const o of p){ o.x+=o.vx; o.y+=o.vy;
      if(o.x<0)o.x=c.width; else if(o.x>c.width)o.x=0;
      if(o.y<0)o.y=c.height; else if(o.y>c.height)o.y=0;
      ctx.beginPath(); ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(168,85,247,${o.a})`; ctx.shadowBlur=12; ctx.shadowColor="rgba(168,85,247,.45)"; ctx.fill();
    }
    id = requestAnimationFrame(draw);
  })();
})();
