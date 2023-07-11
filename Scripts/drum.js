document.getElementById('burger-text-menu-wrapper').addEventListener('click', function() {
    const checker = document.getElementById('check-menu')
    const burgerMenu = document.getElementById('burger-menu')
    const name = document.getElementById('page-name')
    const japanFlag = document.getElementById('japan-flag')
    const arrowUp = document.getElementById('arrow-up')
  
    if (!checker.checked) {
      name.textContent = 'Японская атмосфера';
      japanFlag.style.display = 'block'  
      name.style.textShadow ='-3px 3px #558ABB'  
      checker.checked = true
      burgerMenu.style.maxHeight = '80vh'
      arrowUp.style.display = 'none'
    } else {
      checker.checked = false
      burgerMenu.style.maxHeight = '0'
      name.textContent = 'Игра тайко (太鼓)';
      name.style.textShadow = 'none'
      japanFlag.style.display = 'none'
      arrowUp.style.display = 'block'
      }
  
  })

  var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          playerVars: { 'rel': 1, 'showinfo': 0, 'autoplay': 0, 'controls': 0},
          height: '500',
          width: '950',
          videoId: 'IPGKTSEXuhc',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        // event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 6000);
        //   done = true;
        // }
      }
      function stopVideo() {
        player.stopVideo();
      }


      
  var rightDrums = new Audio('../sounds/rightBong.wav')
  var leftDrums = new Audio('../sounds/leftBong.wav')
  var meow = new Audio ('../sounds/meow.wav')

  var startButton = document.getElementById('start-button');
  startButton.addEventListener('click', function() {
    startGame();
  });
  
  function startGame() {
      // var drum = document.getElementById('drum');
  var gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `<div id="hit-zone"></div>
  <div id="score-display"></div>
  <div class="cat-bong-etc">
      <img src="../img/catUpPaws.png" class="cat" id="cat">
      <img src="../img/bongo.png" class="bong">
  </div>`
  var hitZone = document.getElementById('hit-zone');
  var score = 0;
  
  // drum.addEventListener('click', function() {
  //     score++;
  //     var balls = document.getElementsByClassName('ball');
  //     if (balls.length > 0) {
  //       var ball = balls[0];
  //       var ballRect = ball.getBoundingClientRect();
  //       var hitZoneRect = hitZone.getBoundingClientRect();
  //       if (ballRect.left >= hitZoneRect.left && ballRect.right <= hitZoneRect.right) {
  //         score += 10;
  //         gameContainer.removeChild(ball);
  //       } else {
  //         score -= 5;
  //       }
  //     }
  //   });
  let ten = 10
  let speed = 1000
  let oneHundred = 100

  
    gameContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('ball')) {
        var ball = event.target;
        var ballRect = ball.getBoundingClientRect();
        var hitZoneRect = hitZone.getBoundingClientRect();
        if (ballRect.left >= hitZoneRect.left && ballRect.right <= hitZoneRect.right) {
          score += 10;
          scoreDisplay.textContent = 'Score: ' + Math.round(score);
          gameContainer.removeChild(ball);
        } else {
          score -= 5;
          if (score < 0) {
            score = 0;
          }
          scoreDisplay.textContent = 'Score: ' + Math.round(score);
        }
      } else {
        score--;
        if (score < 0) {
          score = 0;
        }
        scoreDisplay.textContent = 'Score: ' + Math.round(score);
      }
    });
  
  var start = setInterval(function() {
    // score -= 0.1;
    if (score < 0) {
      score = 0;
    }
    scoreDisplay.textContent = 'Score: ' + Math.round(score);
    console.log('Score:', Math.floor(score));
  }, 10);
  
  var createBall = setInterval(function() {
      var ball = document.createElement('div');
      ball.className = 'ball';
      ball.style.backgroundColor = getRandomColor();
      ball.style.left = gameContainer.offsetWidth + 'px';
      gameContainer.appendChild(ball);
      
      var movement = setTimeout(function() {
        ball.style.left = '-30px';
      }, oneHundred);
      
      var animationInterval = setInterval(function() {
        var ballRect = ball.getBoundingClientRect();
        var hitZoneRect = hitZone.getBoundingClientRect();
        if (ballRect.right < hitZoneRect.left) {
          clearInterval(animationInterval);
          gameContainer.removeChild(ball);
          score -= 5;
          scoreDisplay.textContent = 'Score: ' + Math.round(score);
        }
      }, ten);
    }, speed);
  
    function getRandomColor() {
      var colors = ['blue', 'red'];
      var randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  
    // var score = 0;
    var scoreDisplay = document.getElementById('score-display');
    var paws = document.getElementById('cat')
    document.addEventListener('keydown', function(event) {
      if (event.key === 'a' || event.key === 'A' || event.key === 'ф' || event.key === 'Ф') {
        paws.setAttribute('src', '../img/catUpLeftPaws.png')
        leftDrums.currentTime = 0
        leftDrums.play()
        hitDrum('red');
      } else if (event.key === 'd' || event.key === 'D' || event.key === 'В' || event.key === 'в') {
        paws.setAttribute('src', '../img/catDownRightPaws.png')
        rightDrums.currentTime = 0
        rightDrums.play()
        hitDrum('blue');
      }
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === ' ' || event.key === 'Spacebar') {
        meow.currentTime = 0
        meow.play()
      }
    })
    document.addEventListener('keyup' ,function(event) {
      if (event.key === 'a' || event.key === 'A' || event.key === 'ф' || event.key === 'Ф') {
        if (score < 0) {
          score = 0;
        }
        if (score > 200) {
          clearInterval(createBall)
          // clearTimeout(movement)
          clearInterval(start)
          rightDrums.remove()
          leftDrums.remove()
          score = 0
          // speed = 0
          // ten = 0
          // gameContainer.remove()
          // gameContainer = document.createElement('div')
          // gameContainer.id = 'game-container'
          // document.getElementsByClassName('ball').style.removeProperty('transition')
          gameContainer.innerHTML = `<div class ='winner-text-wrapper'><div class='winner-text'>Поздравляем вы набрали
          максимальное количество очков</div>
          <button id='again-button'></button></div>`
          const againButton = document.getElementById('again-button')
          againButton.addEventListener('click', function() {
            startGame();
          });
          // againButton.style.background = `url('../img/againBtn.svg')`
          // againButton.style.backgroundRepeat = 'no-repeat'
        }
        paws.setAttribute('src', '../img/catUpPaws.png')
        // hitDrum('red');
      } else if (event.key === 'd' || event.key === 'D' || event.key === 'В' || event.key === 'в') {
        if (score < 0) {
          score = 0;
        }
        if (score > 200) {
          clearInterval(createBall)
          clearInterval(start)
          rightDrums.remove()
          leftDrums.remove()
          score = 0
          // gameContainer.remove()
          // gameContainer = document.createElement('div')
          // gameContainer.id = 'game-container'
          gameContainer.innerHTML = `<div class = 'winner-text-wrapper'><div class='winner-text'>Поздравляем вы набрали
          максимальное количество очков</div>
          <button id='again-button'></button></div>`
          const againButton = document.getElementById('again-button')
          againButton.addEventListener('click', function() {
            startGame();
          });
          // const againButton = document.getElementById('start-button')
          // againButton.style.background = `url('../img/againBtn.svg')`
          // againButton.style.backgroundRepeat = 'no-repeat'
        }
        paws.setAttribute('src', '../img/catUpPaws.png')
        // hitDrum('blue');
      }
    })
    
    function hitDrum(color) {
      // score++;
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
      scoreDisplay.textContent = 'Score: ' + Math.round(score);
    }
  }
  
  