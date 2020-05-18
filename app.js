/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;
newgame();

//dice=Math.floor(Math.random()*6)+1;

//setter
//document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice +'</em>';
// document.querySelector('#current-' + activePlayer).textContent = <em> +dice+ </em>;

//getter
//var x= document.querySelector('#score-0').textContent;
//console.log(x);



document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click',holdDice);

document.querySelector('.btn-new').addEventListener('click', newgame);

function newgame(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
//document.querySelector('.btn-roll').style.display='block';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
function holdDice(){
    if(gamePlaying){
        // 1. add the current score to global score.
    scores[activePlayer] += roundScore;
    
    // 2. Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if(scores[activePlayer] >=100){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none';
        //document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }else{
        // change the player
        nextPlayer();
    }
    }
    
}

function rollDice(){
    if(gamePlaying){
        // 1. generate Random Number.
    var dice=Math.floor(Math.random()*6)+1;

    // 2. Display the result
    var diceDOM;
    diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src ='dice-' + dice +".png";

    // 3. update the round score IF the rolled number is NOT 1.
    if(dice !== 1){
        // add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        //next player
        nextPlayer();
    }
    }
    
}

function nextPlayer(){
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore=0;

    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}