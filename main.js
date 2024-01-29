function getComputerChoice()
{
    let num = Math.floor((Math.random() * 3) + 1)
    if (num == 1)
    {
        return "Rock";
    }
    else if (num == 2)
    {
        return "Scissors";
    }
    else if (num == 3)
    {
        return "Paper";
    }
    
}

function getPlayerSelection()
{
    let selection = window.prompt("Rock, paper or scissors?");
    if (selection.toLowerCase() !== "rock" && selection.toLowerCase() !== "scissors" && selection.toLowerCase() !== "paper")
    {
        do{
            selection = window.prompt("That was an invalid selection, pick again")
        }while(selection.toLowerCase() !== "rock" && selection.toLowerCase() !== "scissors" && selection.toLowerCase() !== "paper")
    }
    console.log(selection.toLowerCase());
    return selection.toLowerCase();
}

function playRound(playerSelection, computerChoice)
{
    // winner = 0, player
    // winner = 1, computer
    let winner = -1;
    playerSelection = getPlayerSelection().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    if (playerSelection == computerChoice)
    {
        winner = -1; // draw
    }
    else{
        if (playerSelection == "rock")
        {
            if (computerChoice == "scissors")
            {
                winner = 0;
                console.log("Player wins")
            }
            else if (computerChoice == "paper")
            {
                winner = 1;
                console.log("Computer wins")
            }
        }
        else if (playerSelection == "scissors")
        {
            if (computerChoice == "rock")
            {
                winner = 1;
                console.log("Computer wins")
            }
            else if (computerChoice == "paper")
            {
                winner = 0;
                console.log("Player wins");
            }
        }
        else if (playerSelection == "paper")
        {
            if (computerChoice == "rock")
            {
                winner = 0;
                console.log("Player wins");
            }
            else if (computerChoice == "scissors")
            {
                winner = 1;
                console.log("Computer wins");
            }
        }
    }
}
