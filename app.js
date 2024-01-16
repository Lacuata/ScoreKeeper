const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");

let roundSelect = document.querySelector("#playingTo");

let winningScore = 0; // winning score
let pScore1 = 0; // player1 score
let pScore2 = 0; // player2 score
let isGameOver = false; // if game is still playing or not

p1Button.addEventListener("click", () => {
  // if game is still on
  if (!isGameOver) {
    pScore1++; // increment
    if (pScore1 === winningScore) {
      // check if the score is === winning score
      isGameOver = true; // if is it update isGameOver to true
      p1Button.disabled = true; // then disable the p1Button
      p2Button.disabled = true; // then disable the p1Button
      // using css
      //   p1Score.classList.add("winner"); /// adding class winner
      //   p2Score.classList.add("losser"); /// adding class winner
      //   using bulma
      p1Score.classList.add("has-text-success"); /// adding class winner
      p2Score.classList.add("has-text-danger"); /// adding class winner
    }
    //then upload the score in p1Score in browser

    p1Score.innerText = pScore1;
  }
});

p2Button.addEventListener("click", () => {
  // if game is still on
  if (!isGameOver) {
    pScore2++; // increment
    if (pScore2 === winningScore) {
      // check if the score is === winning score
      isGameOver = true; // if is it update isGameOver to true
      p1Button.disabled = true; // then disable the p1Button
      p2Button.disabled = true; // then disable the p2Button
      //   using css
      //   p1Score.classList.add("losser"); /// adding class losser
      //   p2Score.classList.add("winner"); // removing class winner
      //   using bulma
      p1Score.classList.add("has-text-danger"); /// adding class winner
      p2Score.classList.add("has-text-success"); /// adding class winner
    }
    //then upload the score in p2Score in browser

    p2Score.innerText = pScore2;
  }
});

const reset = () => {
  isGameOver = false; // return to false
  p1Button.disabled = false; // undo the disabled button
  p2Button.disabled = false;
  // update score  back to 0
  pScore1 = 0;
  pScore2 = 0;

  //   then update the text in browser
  //   using css
  //   p1Score.classList.remove("winner", "losser"); // removing class winner
  //   p2Score.classList.remove("losser", "winner"); // removing class loser
  //   using bulma
  p1Score.classList.remove("has-text-success", "has-text-danger"); // removing class has-text-success
  p2Score.classList.remove("has-text-danger", "has-text-success"); // removing class loser
  p1Score.innerText = 0;
  p2Score.innerText = 0;
  roundSelect = "";
};

// roundSelect btw we use ordinary/regular function here because this is not working in arrow function
roundSelect.addEventListener("change", function () {
  // we will use change to update it per change ex alert('change')
  //   winningScore = this.value; // this refer to the value or object this listening for in our case the roundSelect
  winningScore = Number(this.value); // since the thing we get from this is string we will convert it to number

  reset(); // to reset  if we set another rounds
});

resetButton.addEventListener("click", reset);
