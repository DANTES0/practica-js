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