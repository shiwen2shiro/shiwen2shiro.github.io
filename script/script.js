$(document).ready(function(){

/*--
	$('a').click(function(){
		$('#about').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);

		return false;

	});

*/

$('#work').click(function() {
  
    if($('#work1').css("margin-left") == "1300px")
	    {
	        $('#work1').animate({"margin-left": '-=1300'});
	        $('#work1').css({"z-index": '999'});
	        $('#work1').css({"display": 'block'});

	    }


  });


$('.exit').click(function() {
	
	if($('#work1').css("margin-left") == "0px")
	    {
	       	$('#work1').animate({"margin-left": '+=1300'});
	  
	    }	

});










});//end all
