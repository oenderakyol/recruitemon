// Logic/Middleware layer
const SCORES_KEY = 'recruitemon_scores';
const PLAYER_NAME_KEY = 'recruitemon_playername';

// Data Layer: shared leaderboard, read/written via localStorage (also used by game-code.html)
function getScores() {
  try {
    const raw = JSON.parse(localStorage.getItem(SCORES_KEY));
    return Array.isArray(raw) ? raw : [];
  } catch (e) {
    return [];
  }
}

function openNameModal() {
  const input = document.getElementById('player-name-input');
  input.value = '';
  document.getElementById('name-modal').classList.remove('hidden');
  input.focus();
}

function closeNameModal() {
  document.getElementById('name-modal').classList.add('hidden');
}

function confirmName() {
  const input = document.getElementById('player-name-input');
  const name = input.value.trim() || 'Recruiter';
  localStorage.setItem(PLAYER_NAME_KEY, name);
  window.location.href = 'game-code.html?name=' + encodeURIComponent(name);
}

function startGame() {
  openNameModal();
}

function showHighScore() {
  const scores = getScores().slice(0, 10);
  const list = document.getElementById('highscore-list');

  if (scores.length === 0) {
    list.innerHTML = '<li class="highscore-empty" style="border:none;">No games played yet!</li>';
  } else {
    list.innerHTML = scores
      .map((entry) => `<li><span class="hs-name">${entry.name}</span><span class="hs-score">${entry.score}</span></li>`)
      .join('');
  }

  document.getElementById('highscore-panel').classList.remove('hidden');
}

function hideHighScore() {
  document.getElementById('highscore-panel').classList.add('hidden');
}

function showInstructions() {
  document.getElementById('instructions-panel').classList.remove('hidden');
}

function hideInstructions() {
  document.getElementById('instructions-panel').classList.add('hidden');
}

document.getElementById('startGameBtn').addEventListener('click', startGame);
document.getElementById('highScoreBtn').addEventListener('click', showHighScore);
document.getElementById('closeHighScoreBtn').addEventListener('click', hideHighScore);
document.getElementById('instructionsBtn').addEventListener('click', showInstructions);
document.getElementById('closeInstructionsBtn').addEventListener('click', hideInstructions);
document.getElementById('cancelNameBtn').addEventListener('click', closeNameModal);
document.getElementById('confirmNameBtn').addEventListener('click', confirmName);
document.getElementById('player-name-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') confirmName();
});
