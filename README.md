# Memory-Game

The Odin Project Memory Game using React Hooks. Basically just a game where you're presented with a certain amount of unique cards. You click one, and then they shuffle. You're not supposed to

## Code Outline

### Context provider. Holds current score, high core, and current level states.

- [x] Function to increment current score.
- [x] Set current score to 0.
- [x] Compare current score to high score and update high score when current score > high score.
- [x] Increment level.
- [x] Set level to zero.

### Scoreboard component

- [x] Display current score.
- [x] Display high score.
- [x] Display current level.
- [] Reset button.

### "Gameboard" component

- [x] Holds card array in state.
- [x] Card object : ID(int), Name(string), img(string URL), clicked(bool) properties
- [] Maybe multiple arrays for more levels.
- [x] Function that ,given a unique ID, finds card object and sets it's clicked property state to true.
- [] Level win state.

#### Rendering Cards

- [] Function that renders all cards in state object to JSX in random order. Corresponding state properties are passed as props.
  - Changed. Properties are now just accessed through local state.
- [x] onClick
  - [x] Check if clickable
  - [x] Increment current score
  - [] Re-shuffle board without changing state.
  - [] Advance level if all cards in state are clicked.
  - [x] Reset Board if not clickable.
  - [x] Reset level if not clickable.

### Message components.

- [] Lose screen with Score, High Score, and Play again button.
- [] Reset confirmation screen. Yes/No?
- [] Secret screen that says something wacky and dumb.
- [] 2nd even secreter screen that says something even dumber and wackier.
