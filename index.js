window.addEventListener('load', () => {
  const d2pos = [
    [300,  50],
    [100,  250],
    [300,  250]
  ];
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < d2pos.length; i++) {
    const start = d2pos[i];
    const end = d2pos[i + 1] !== undefined ? d2pos[i + 1] : d2pos[0];
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }
  const base = 200;
  const height = 200;
  ctx.strokeStyle = 'rgb(255, 0, 0)';
  for (let i = height; i >= 0; i--) {
    const hypo = Math.floor(Math.sqrt(Math.pow(base - i, 2) + Math.pow(height - i, 2)));
    const length = Math.floor(Math.sqrt(Math.pow(hypo, 2) - Math.pow(height - i, 2)));
    console.log(hypo, length);
    ctx.beginPath();
    ctx.moveTo(300, 50 + i);
    ctx.lineTo(length + 100, 50 + i);
    ctx.stroke();
  }
});