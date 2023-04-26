
function playRound(playerSelection, computerSelection)
{

 plarSelection=playerSelection.toLowerCase();

if(playerSelection===computerSelection)
{
	return "tie";
}
else if((playerSelection==="rock" && computerSelection==="paper") ||(playerSelection==="paper" && computerSelection==="sissor") ||(playerSelection==="sissor" && computerSelection==="rock") )
{
	
	return "computer wins";
	
}
else
{
	
	return "you wins";
}



}

function getComputerChoice()
{
let choice=Math.floor(Math.random()*3)
return choice===0? "rock":(choice===1? "paper": "sissor");
}

function game()
{
let choice;
let player=0;
let computer=0;
	for(i=0;i<5;i++)
	{
        let playerSelection = prompt("Enter rock, paper or sissor",0);
	let computerSelection = getComputerChoice();
	choice=playRound(playerSelection,computerSelection);
	if(choice==="computer wins")
	{
		computer++;
	}

	else if (choice==="you wins")
	{player++;}
	
	}
return player===computer? "youll had a tie":(player>computer? "you won!!!congrats":"computer won");
}
 


console.log(game());