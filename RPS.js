function getComputerChoice(){
    let option = ["Rock", "Paper", "Scissor"] ;  
    let output = Math.floor(Math.random() * option.length) ; 
    return option[output] ; 
 }

let player_point = Number(document.getElementById('player_score').textContent) ;
let computer_point = Number(document.getElementById('computer_score').textContent);



function playRound(player_selection){
    let comp = getComputerChoice();
    let selection = player_selection ; 

    document.getElementById('computer_score').textContent = computer_point;
    document.getElementById('player_score').textContent = player_point;

    if (selection.toLowerCase() == 'rock')
        {
            if (comp.toLowerCase() == 'paper')
                {
                    console.log('You lose, paper beats rock') ;
                    computer_point ++ ; 
                    document.getElementById('computer_score').textContent = computer_point; 
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
            else if (comp.toLowerCase() =='scissor')
                {
                    console.log('You win, rock beats scissor');
                    player_point ++ ;
                    document.getElementById('player_score').textContent = player_point; 
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
            else
                {
                    console.log('Its a tie, both picked rock');
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
        }
        
    else if (selection.toLowerCase() == 'paper')
        {
            if (comp.toLowerCase() == 'scissor')
                {
                    console.log('You lose, scissor beats paper');
                    computer_point ++ ;
                    document.getElementById('computer_score').textContent = computer_point; 
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
            else if (comp.toLowerCase() == 'rock')
                {
                    console.log('You win, paper beats rock');
                    player_point ++ ; 
                    document.getElementById('player_score').textContent = player_point; 
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
            else
                {
                    console.log('Its a tie, both picked paper');
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
        }
    else if (selection.toLowerCase() == 'scissor')
        {
            if (comp.toLowerCase() == 'scissor')
                {
                    console.log('Its a tie, both picked scissor');
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
            else if (comp.toLowerCase() == 'rock')
                {
                    console.log('You lose, rock beats scissor');
                    computer_point ++ ;
                    document.getElementById('computer_score').textContent = computer_point; 
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;

                }
            else
                {
                    console.log('You win, scissor beats paper');
                    player_point ++ ; 
                    document.getElementById('player_score').textContent = player_point; 
                    console.log("Player point " + player_point + " Computer point " + computer_point) ;
                }
        }

        if (player_point >= 5){
            console.log("You win. GAME OVER!");
            document.getElementById('player_score').textContent = "YOU WIN. GAME WILL RESTART";
            document.getElementById('computer_score').textContent = "COMPUTER LOST. GAME WILL RESTART";
            player_point = 0 ;
            computer_point = 0 ; 
        }
        if (computer_point >= 5){
            console.log("You lose. GAME OVER!");
            document.getElementById('computer_score').textContent = "YOU LOSE. GAME WILL RESTART";
            document.getElementById('player_score').textContent = "COMPUTER WIN. GAME WILL RESTART";
            player_point = 0 ;
            computer_point = 0 ; 
        }
        
    }

// playRound(prompt("Rock paper of scissor")); 

let rock = document.querySelector('.rock') ; 
let event_rock = rock.addEventListener('click', () => {playRound(rock.innerText)});

let paper = document.querySelector('.paper') ; 
let event_paper = paper.addEventListener('click', () => {playRound(paper.innerText)});

let scissor = document.querySelector('.scissor') ; 
let event_scissor = scissor.addEventListener('click', () => {playRound(scissor.innerText)});


 

