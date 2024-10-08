setInterval(function() {
    var adVideo = document.querySelector('.video-stream.html5-main-video');
    //var adSkipButton = document.querySelector('.ytp-skip-ad-button');
    
    if (document.querySelector('.ad-showing') && adVideo) {
        console.log("Ad detected, speeding up.");
        adVideo.playbackRate = 5.0;
    } else if (adVideo && adVideo.playbackRate !== 1.0) {
        console.log("No ad detected, resetting speed.");
        adVideo.playbackRate = 1.0;
    }

    /*if (adSkipButton) {
        console.log("Skip button detected, simulating hover.");
        
        // Small delay to ensure the hover takes effect
    }*/

}, 1000);