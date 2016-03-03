$(document).ready(function(){
    schedule = $('#schedule-wrapper').offset().top;

    if($(window).scrollTop() >= schedule){
    	$('.typed-text').css('opacity', '1');
		console.log('if statement activated!!!')
    }
        
});