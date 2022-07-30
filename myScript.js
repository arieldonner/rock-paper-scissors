const words = ["Rock", "Paper", "Scissors"];
function getComputerChoice() 
{
    let random = words[Math.floor(Math.random() * words.length)];
    return random;
}


let playerScore = 0;
let computerScore = 0;



function playerWin() 
{
    playerScore+=1;
}

function computerWin() 
{
    computerScore+=1;
}


function playRound(playerSelection, computerSelection) 
{
    playerSelection = prompt("Rock, paper, or scissors?");
    computerSelection = getComputerChoice();
    function whatWasPlayed() {
        console.log("The computer played: " + computerSelection);
        console.log("You played: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
    }

    if(playerSelection.toLowerCase() === "rock")
    {
        if (computerSelection === "Paper") 
        {
            whatWasPlayed();
            let result = "You lose! Paper beats Rock.";
            computerWin();
            console.log(result);
            return result;
        }
        else if(computerSelection === "Scissors")
        {
            whatWasPlayed();
            let result = "You win! Rock beats Scissors.";
            playerWin();
            console.log(result);
            return result;
        }
        else 
        {
            whatWasPlayed();
            let result = "It's a tie.";
            console.log(result);
            return result;
        }
    }
    else if(playerSelection.toLowerCase() === "paper")
    {
        if (computerSelection === "Paper") 
        {
            whatWasPlayed();
            let result = "It's a tie.";
            console.log(result);
            return result;
        }
        else if(computerSelection === "Scissors")
        {
            whatWasPlayed();
            let result = "You lose! Scissors beats Paper.";
            computerWin();
            console.log(result);
            return result;
        }
        else {
            whatWasPlayed();
            let result = "You win! Paper beats Rock.";
            playerWin();
            console.log(result);
            return result;
        }
    }
    else if(playerSelection.toLowerCase() === "scissors")
    {
        if (computerSelection === "Paper") 
        {
            whatWasPlayed();
            let result = "You win! Scissors beats Paper.";
            playerWin();
            console.log(result);
            return result;
        }
        else if(computerSelection === "Scissors")
        {
            whatWasPlayed();
            let result = "It's a tie.";
            console.log(result);
            return result;
        }
        else 
        {
            whatWasPlayed();
            let result = "You lose! Rock beats Scissors.";
            computerWin();
            console.log(result);
            return result;
        }
    }
    else 
    {
        let result = "Please choose one of the following options: Rock, Paper, Scissors"
        console.log(result);
        return result;
    }
}


function game() 
{
    for (let i = 1; i < 6; i++)
    {
        playRound();
        let round = "Round " + i + " Score:" + "Player - " + playerScore + " Computer - " + computerScore;
        console.log(round);
    }
    if(playerScore > computerScore)
    {
        console.log("Congrats! You won the game!");
    }
    else if(playerScore < computerScore)
    {
        console.log("Sorry, you lost the game.");
    }
    else 
    {
        console.log("Wow, it's a tie!");
    }
}

console.log(game());