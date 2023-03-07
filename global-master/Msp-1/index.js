// Game Music
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e) {
    console.log("key code is: ", e.keyCode)

    //KEY 32 is space bar
    if (e.keyCode == 32) {
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer');
        }, 700);//distance to jump
    }
    //KEY 39 and 37 is left and right arrow key
    if (e.keyCode == 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 100 + "px";
    }
    if (e.keyCode == 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + -100 + "px";
    }
} 

//Game score section
score = 0;
cross = true;
setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle'); 

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));
 
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px-ox);
    offsetY = Math.abs(py-oy);
    if (offsetX < 113 && offsetY <52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() =>{
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000); //time of jerk
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            //change speed of obstacle below
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 100); // score refresh

function updateScore(score){
    scoreCount.innerHTML = "Your Score: " + score
}

//temp Game instruction
setTimeout(function(){
    var tip = document.getElementById("options");
    tip.parentNode.removeChild(tip);
}, 10000);

//Main Pop-Up
let popUp = document.getElementById("popUp");

function openPopup(){
    popUp.classList.add("open-popUp");
}
function closePopup(){
    popUp.classList.remove("open-popUp");
}