// Function to draw random straight lines
// takes the canvas id and how many lines to draw
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

// Function to draw random curved lines
// takes the canvas id and how many lines to draw
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

// Function to randomly generate the number of lines to draw
// 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePDF(canvas) {
  const imgData = canvas.toDataURL("image/jpeg", 1.0);
  const pdf = new jsPDF();
  pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
  pdf.save("my-drawing.pdf");
}