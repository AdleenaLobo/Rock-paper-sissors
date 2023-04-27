	let you=0,computer=0;
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const sissor=document.querySelector('#sissor');
const body=document.querySelector('body');
const name=document.createElement('div');
const buttons=document.querySelectorAll('button');
const divScore=document.createElement('div');

function getComputerChoice()
{
	let choice=Math.floor(Math.random()*3)
	return choice===0? "rock":(choice===1? "paper": "sissor");
}

function score(you,computer)
{
	
	divScore.classList.add('.scoreDisplay');
	divScore.textContent=`User:-${you} Computer:-${computer}`;
			body.appendChild(divScore);
	

}

function gameover(you, computer)
{
	gameoverdiv=document.createElement('div');
	if (you==5)
		{
	gameoverdiv.textContent="GameOver! You Won";
		}
	else
		{
	gameoverdiv.textContent="GameOver! Computer won";
		}
	rock.disabled=true;
	paper.disabled=true;
	sissor.disabled=true;
	body.appendChild(gameoverdiv);
}


function playRound()
{

	let a= this.textContent;
	a=a.toLowerCase();

	let computerSelection=getComputerChoice();
	name.classList.add('display');


	if(a == computerSelection)
	{
		name.textContent="tie";
		body.appendChild(name);
			if ((you == 5 )|| (computer == 5))
				{
					score(you,computer);
					gameover(you, computer);
				}
				else
					{score(you,computer);}
		
	}

	else if((a =="rock" && computerSelection==="paper") ||(a =="paper" && computerSelection==="sissor") ||(a =="sissor" && computerSelection==="rock") )
	{
	
		name.textContent="computer wins";
		body.appendChild(name);
		computer++;
			if ((you == 5 )|| (computer == 5))
				{
					score(you,computer);
					gameover(you, computer);
				}
				else
					{
						score(you,computer);
					}
	
	}

	else
	{
	
		name.textContent="you win";
		body.appendChild(name);
			you++;
			if ((you == 5 ) || (computer == 5))
				{
					score(you,computer);
					gameover(you, computer);
				}

				else{
					score(you,computer);
				}
	}
}



rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
sissor.addEventListener('click',playRound);

name.classList.remove('.display');
divScore.classList.remove('.scoreDisplay');



