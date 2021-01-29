
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("btn");
    
    /*Control Video*/
    function myFunction() {
      //IF video is playing, display 'Pause' button.
      if (video.paused) {
          video.play();
          btn.innerHTML = "Pause";
      }
      //IF video is in pause, display 'Play' button.
      else {
          video.pause();
          btn.innerHTML = "Play";
      }
    }

    /*Control Sound*/
    function mute() { 
      video.muted = true;
    } 
    function unmute() { 
      video.muted = false;
    } 