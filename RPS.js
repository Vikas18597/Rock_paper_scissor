function getComputerChoice(){
    let option = ["Rock", "Paper", "Scissor"] ;  
    let output = Math.floor(Math.random() * option.length) ; 
    return option[output] ; 
 }


 function playRound(player_selection){
    let comp = getComputerChoice();
    console.log('Computer choice is ' + comp.toLowerCase()) ;
    let selection = player_selection ; 

    if (selection.toLowerCase() == 'rock')
        {
            if (comp.toLowerCase() == 'paper')
                {
                    console.log('You lose, paper beats rock') ;
                }
            else if (comp.toLowerCase() =='scissor')
                {
                    console.log('You win, rock beats scissor');
                }
            else
                {
                    console.log('Its a tie, both picked rock');
                }
        }
        
    else if (selection.toLowerCase() == 'paper')
        {
            if (comp.toLowerCase() == 'scissor')
                {
                    console.log('You lose, scissor beats paper');
                }
            else if (comp.toLowerCase() == 'rock')
                {
                    console.log('You win, paper beats rock');
                }
            else
                {
                    console.log('Its a tie, both picked paper');
                }
        }
    else if (selection.toLowerCase() == 'scissor')
        {
            if (comp.toLowerCase() == 'scissor')
                {
                    console.log('Its a tie, both picked scissor');
                }
            else if (comp.toLowerCase() == 'rock')
                {
                    console.log('You lose, rock beats scissor');
                }
            else
                {
                    console.log('You win, scissor beats paper');
                }
        }
    }

playRound(prompt("Rock paper of scissor")); 