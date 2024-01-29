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
