## 🔁 MAIN GAME FLOW

```
click
 ↓
read player choice
 ↓
generate computer choice
 ↓
decide winner
 ↓
update score
 ↓
render UI
 ↓
check game over
 ↓
end game (if needed)
```

---

## 🧩 FULL STRUCTURE (ONE-GLANCE PSEUDOCODE)

```
INIT:
  CHOICES = [rock, paper, scissors]
  WIN_SCORE = 5
  playerScore = 0
  computerScore = 0
  gameOver = false

CACHE DOM:
  buttons
  resultDisplay
  computerChoiceDisplay
  playerScoreDisplay
  computerScoreDisplay
  restartButton

FUNCTION getComputerChoice():
  return random choice from CHOICES

FUNCTION decideWinner(playerChoice, computerChoice):
  if same → draw
  if player beats computer → "player"
  else → "computer"

FUNCTION updateScore(winner):
  if winner == "player" → playerScore++
  if winner == "computer" → computerScore++

FUNCTION renderUI(computerChoice, winner):
  show computer choice
  show round result
  update scoreboard

FUNCTION checkGameOver():
  return playerScore == WIN_SCORE OR computerScore == WIN_SCORE

FUNCTION endGame():
  gameOver = true
  disable buttons
  show final winner
  show restart button

FUNCTION resetGame():
  playerScore = 0
  computerScore = 0
  gameOver = false
  reset UI text
  enable buttons
  hide restart button

EVENT: button click
  if gameOver → stop
  playerChoice = button.id
  computerChoice = getComputerChoice()
  winner = decideWinner(playerChoice, computerChoice)
  updateScore(winner)
  renderUI(computerChoice, winner)
  if checkGameOver() → endGame()

EVENT: restart click
  resetGame()
```
