
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const sissor=document.querySelector('#sissor');
const body=document.querySelector('body');
const name=document.createElement('div');
const buttons=document.querySelectorAll('button');


function getComputerChoice()
{
let choice=Math.floor(Math.random()*3)
return choice===0? "rock":(choice===1? "paper": "sissor");
}


function playRound()
{let a= this.textContent;
	a=a.toLowerCase();
let computerSelection=getComputerChoice();
name.classList.add('display');

if(a == computerSelection)
{
	name.textContent="tie";
	body.appendChild(name);
}
else if((a =="rock" && computerSelection==="paper") ||(a =="paper" && computerSelection==="sissor") ||(a =="sissor" && computerSelection==="rock") )
{
	
	name.textContent="computer wins";
	body.appendChild(name);
	
}
else
{
	
	name.textContent="you win";
	body.appendChild(name);
}
}



rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
sissor.addEventListener('click',playRound);

setTimeout(()=>name.classList.remove('.display'), 70);



