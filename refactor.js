const p1 = {
  score: 0, // player1 score
  button: document.querySelector("#p1Button"), // button
  displayScore: document.querySelector("#p1Score"), // score from browser
};

const p2 = {
  // to access it p2.score and so on
  score: 0, // player2 score
  button: document.querySelector("#p2Button"),
  displayScore: document.querySelector("#p2Score"), //score from browser
};

const resetButton = document.querySelector("#reset");
let roundSelect = document.querySelector("#playingTo");
let winningScore = 0; // winning score
let isGameOver = false; // if game is still playing or not

// generate the code below in 1 go for player 1 and player 2
function updateScores(player, opponent) {
  // if game is still on
  if (!isGameOver) {
    player.score++; // increment
    if (player.score === winningScore) {
      // check if the score is === winning score
      isGameOver = true; // if is it update isGameOver to true
      player.button.disabled = true; // then disable the player button
      opponent.button.disabled = true; // then disable the opponent Button
      //  using bulma
      player.displayScore.classList.add("has-text-success");
      opponent.displayScore.classList.add("has-text-danger");
    }
    //then upload the score of player
    player.displayScore.innerText = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2); // this is for player , opponent means player 1 side is player opponent is player 2
});

p2.button.addEventListener("click", () => {
  // this player2 side as a player and player 1 is opponent
  updateScores(p2, p1);
});

const reset = () => {
  //   or we can loop it like this  for shorten code
  isGameOver = false;
  for (let p of [p1, p2]) {
    // this refer to p1 and p2
    // means if we are reffering to p1 or player1
    p.score = 0; // p1.score like this or p2.score same the code below
    p.displayScore.innerText = 0;
    p.displayScore.classList.remove("has-text-success", "has-text-danger"); // removing class has-text-success and has-text danger in p1 and p2
    p.button.disabled = false;
  }
};

// roundSelect btw we use ordinary/regular function here because this is not working in arrow function
roundSelect.addEventListener("change", function () {
  // we will use change to update it per change ex alert('change')
  //   winningScore = this.value; // this refer to the value or object this listening for in our case the roundSelect
  winningScore = Number(this.value); // since the thing we get from this is string we will convert it to number

  reset(); // to reset  if we set another rounds
});

resetButton.addEventListener("click", reset); //run reset function when reset button is clicked
