// Logic/Middleware layer

function randomBrightColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 80 + Math.random() * 20;
  const lightness = 55 + Math.random() * 15;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function applyRandomColor() {
  document.body.style.backgroundColor = randomBrightColor();
}

document.getElementById('change-btn').addEventListener('click', applyRandomColor);

applyRandomColor();
