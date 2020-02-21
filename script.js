let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Sets max number to be guessed at 9
function generateTarget()
{
  return Math.floor(Math.random() * 9);
};

  //Calcaulates the absolute value between inputs to determine difference
function compareGuesses (human, comp, secret)
{
  if (Math.abs(secret - human) < (Math.abs(secret - comp)))
    {
      return true;
    }
  else
    {
      return false;
    }
};

//Updates score for the winner
function updateScore(winnerString)
{
  if (winnerString === 'human')
    {
      humanScore += 1;
    }
  else if (winnerString === 'computer')
    {
      computerScore += 1;
    }
};

//Increments round counter
function advanceRound()
{
  currentRoundNumber += 1;
};
  

