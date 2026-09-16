// Logic/Middleware layer
const HIGH_SCORE_KEY = 'recruitemon_highscore';

// Data Layer: read/write high score via localStorage (browser-side persistence)
function getHighScore() {
  return Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
}

function startGame() {
  window.location.href = 'game-code.html';
}

function showHighScore() {
  document.getElementById('highscore-value').textContent = getHighScore();
  document.getElementById('highscore-panel').classList.remove('hidden');
}

function hideHighScore() {
  document.getElementById('highscore-panel').classList.add('hidden');
}

document.getElementById('startGameBtn').addEventListener('click', startGame);
document.getElementById('highScoreBtn').addEventListener('click', showHighScore);
document.getElementById('closeHighScoreBtn').addEventListener('click', hideHighScore);
document.getElementById('settingsBtn').addEventListener('click', () => {
  console.log('Settings clicked...');
  // Add logic to open a settings panel
});
