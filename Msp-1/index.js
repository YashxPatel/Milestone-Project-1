document.onkeydown = function(e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 32) {
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer');
        }, 700);
    }
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
    }
    else if (offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: " + score
}