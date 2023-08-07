const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
updateScoreElement()
localStorage.getItem('score')

function playJackInPoy(playerMove) {
   const computerMove = pickComputerMove();

   let result = '';
   //they created an statement to call a function in parameter
   if (playerMove === 'scissors') {
      if (computerMove === 'Rock') {
         result = 'You lose';
      } else if (computerMove === 'Paper') {
         result = 'You win';
      } else if (computerMove === 'scissors') {
         result = 'Tie';
      }
   }

   else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
         result = 'You win';
      } else if (computerMove === 'Paper') {
         result = 'Tie';
      } else if (computerMove === 'scissors') {
         result = 'You lose';
      }
   }

   else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
         result = 'Tie';
      } else if (computerMove === 'Paper') {
         result = 'You Lose';
      } else if (computerMove === 'scissors') {
         result = 'You win';
      }
   }
   //update the score
   if (result === 'You win') {
      score.wins += 1;
   } else if (result === 'You lose') {
      score.losses += 1;
   } else if (result === 'Tie') {
      score.ties += 1;
   }


   //after we upadte the score we got to save it in localStorage using localStorage set in down
   //localStorage only support strings
   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('#Result-score').innerHTML = result;

   document.querySelector("#move").innerHTML = `You
   <img src="image/${playerMove}-emoji.png" class="move-icon">
    <img src="image/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
   document.querySelector('#Update-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissor';
   }

   return computerMove;

}