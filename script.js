function drawRandomLines(canvas, numLines) {
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < numLines; i++) {
    const x1 = Math.floor(Math.random() * canvas.width);
    const y1 = Math.floor(Math.random() * canvas.height);
    const x2 = Math.floor(Math.random() * canvas.width);
    const y2 = Math.floor(Math.random() * canvas.height);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}


function drawRandomCurves(canvas, numLines) {
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < numLines; i++) {
    const x1 = Math.floor(Math.random() * canvas.width);
    const y1 = Math.floor(Math.random() * canvas.height);
    const x2 = Math.floor(Math.random() * canvas.width);
    const y2 = Math.floor(Math.random() * canvas.height);
    const cp1x = Math.floor(Math.random() * canvas.width);
    const cp1y = Math.floor(Math.random() * canvas.height);
    const cp2x = Math.floor(Math.random() * canvas.width);
    const cp2y = Math.floor(Math.random() * canvas.height);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
    ctx.stroke();
  }
}