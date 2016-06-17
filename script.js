$(document).ready(function(){


	//big-video-background

	$(function() {
        var BV = new $.BigVideo();
		BV.init();

		if (Modernizr.touch) {
    		BV.show('video-poster.jpg');
		} else {
    		BV.show('https://youtu.be/26IGeylMygY',{ambient:true});
		}
	});
    

    







});
