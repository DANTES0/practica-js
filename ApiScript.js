
  

  var startButton = document.getElementById('start-button');
startButton.addEventListener('click', function() {
  startGame();
});

function startGame() {
    var drum = document.getElementById('drum');
var gameContainer = document.getElementById('game-container');
var hitZone = document.getElementById('hit-zone');
var score = 0;

drum.addEventListener('click', function() {
    score++;
    var balls = document.getElementsByClassName('ball');
    if (balls.length > 0) {
      var ball = balls[0];
      var ballRect = ball.getBoundingClientRect();
      var hitZoneRect = hitZone.getBoundingClientRect();
      if (ballRect.left >= hitZoneRect.left && ballRect.right <= hitZoneRect.right) {
        score += 10;
        gameContainer.removeChild(ball);
      } else {
        score -= 5;
      }
    }
  });

  gameContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('ball')) {
      var ball = event.target;
      var ballRect = ball.getBoundingClientRect();
      var hitZoneRect = hitZone.getBoundingClientRect();
      if (ballRect.left >= hitZoneRect.left && ballRect.right <= hitZoneRect.right) {
        score += 10;
        gameContainer.removeChild(ball);
      } else {
        score -= 5;
      }
    } else {
      score--;
    }
  });

setInterval(function() {
  score -= 0.1;
  if (score < 0) {
    score = 0;
  }
  console.log('Score:', Math.floor(score));
}, 1000);

setInterval(function() {
    var ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = getRandomColor();
    ball.style.left = gameContainer.offsetWidth + 'px';
    gameContainer.appendChild(ball);
    
    setTimeout(function() {
      ball.style.left = '-30px';
    }, 100);
    
    var animationInterval = setInterval(function() {
      var ballRect = ball.getBoundingClientRect();
      var hitZoneRect = hitZone.getBoundingClientRect();
      if (ballRect.right < hitZoneRect.left) {
        clearInterval(animationInterval);
        gameContainer.removeChild(ball);
        score -= 5;
        scoreDisplay.textContent = 'Score: ' + score;
      }
    }, 10);
  }, 1000);

  function getRandomColor() {
    var colors = ['blue', 'red'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  var score = 0;
  var scoreDisplay = document.getElementById('score-display');
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
      hitDrum('red');
    } else if (event.key === 'd' || event.key === 'D') {
      hitDrum('blue');
    }
  });
  
  function hitDrum(color) {
    score++;
    var balls = document.getElementsByClassName('ball');
    if (balls.length > 0) {
      var ball = balls[0];
      var ballRect = ball.getBoundingClientRect();
      var hitZoneRect = hitZone.getBoundingClientRect();
      if (ballRect.left >= hitZoneRect.left && ballRect.right <= hitZoneRect.right && ball.style.backgroundColor === color) {
        score += 10;
        gameContainer.removeChild(ball);
      } else {
        score -= 5;
      }
    }
    scoreDisplay.textContent = 'Score: ' + score;
  }
}

