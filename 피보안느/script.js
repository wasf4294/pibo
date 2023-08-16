
let Video1 = document.querySelector('.video-1');
let Video2 = document.querySelector('.video-2');
let Video3 = document.querySelector('.video-3');

/*------------------clickevent---------------------*/ 
Video1.addEventListener('click', function() {
    Video1.play();
});
Video2.addEventListener('click', function() {
    Video2.play();
});
Video3.addEventListener('click', function() {
    Video3.play();
});



/*------------------scrollevent---------------------*/ 
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

if ( document.querySelectorAll('.video').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('.video');

    for (var i = 0; i < videoEl.length; i++) {

    var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

    if ( videoClientRect <= ( (windowHeight) - (videoHeight*.2) ) && videoClientRect >= ( 0 - ( videoHeight*.2 ) ) ) {
        thisVideoEl.play();
    } else {
        thisVideoEl.load();
    }

    }
}

}


/*--------------------audioscroll----------------*/

window.addEventListener('load', audioScroll);
window.addEventListener('scroll', audioScroll);

function audioScroll() {

if ( document.querySelectorAll('audio').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('audio');

    for (var i = 0; i < videoEl.length; i++) {

    var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

    if ( videoClientRect <= ( (windowHeight) - (videoHeight*.2) ) && videoClientRect >= ( 0 - ( videoHeight*.2 ) ) ) {
        thisVideoEl.play();
    } else {
        thisVideoEl.load();
    }

    }
}

}







// $('.video').each(function(){
//     if ($('.video').is(":in-viewport")) {
//         $(this)[0].play();
//     } else {
//         $(this)[0].load();
//     }
// })