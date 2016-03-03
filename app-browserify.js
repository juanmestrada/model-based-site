

$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#header').offset().top;
 
        $(window).scroll(function(){
            if( $(window).scrollTop() >= stickyHeaderTop ) {
                $('#header').css({position: 'fixed', top: '0px', left: '0'});
                $('#logo_img').css('backgroundSize', 'contain')
                    
            } else {
                $('#header').css({position: 'static', top: '0px'});
				$('#logo_img').css('backgroundSize','65% 110%');

            }

        });

		var menuVisible = false;

		$('#menuBtn').click(function() {
		    if (menuVisible) {
		    	$('header').css('left', '0')
				$('#full-menu').css({'left':'-475px'});
				$('.section').css('left', '0');
				console.log('first if statement, menu should be closed')
				$('body').css('overflow','auto');
				menuVisible = false;
				return;
		    }
		    $('header').css('left', '280px')
		    $('#full-menu').css('left','-280px');
		    $('.section').css('left', '475px');
		    $('body').css('overflow','hidden');
		    
		    console.log('outside first if statement, menu should be open');
		    menuVisible = true;
		    
		});
		  
	
		  //contact background
		  var contactParallax = document.querySelector("#contact"),
		  speed = 0.5;
		// Info text scroll into view

		var model = $('#model').offset().top,
			dancer = $('#dancer').offset().top,
			actor = $('#actor').offset().top,
			gamer = $('#gamer').offset().top,
			contact = $('#contact').offset().top,
	    	$window = $(window);
	    	
	    	

		$window.scroll(function() {

			var windowYOffset = window.pageYOffset,
	    	elBackgrounPos = "50% " + (windowYOffset * speed) + "px";


      		contactParallax.style.backgroundPosition = elBackgrounPos;


			//Model Section
		    if ( $window.scrollTop() >=  (model - 200) ) {
		        $('.model_info').css('right', '10px')
		        $('#model-name').css({'transform': 'scale(.7, .7)', 'transitionDuration': '1s'});
		        $('#m1').css({transitionProperty: 'all', transitionDuration: '1s', transform: 'scale(1)', opacity:'1'});
		    	$('#m2').css({transitionProperty: 'all', transitionDuration: '400ms', transform: 'scale(1)', opacity:'1'});
		    	$('#m3').css({transitionProperty: 'all', transitionDuration: '2s', transform: 'scale(1)', opacity:'1'});
		    	$('#m4').css({transitionProperty: 'all', transitionDuration: '600ms', transform: 'scale(1)', opacity:'1'});
		    	$('#m5').css({transitionProperty: 'all', transitionDuration: '3s', transform: 'scale(1)', opacity:'1'});
		        console.log("Model is at the top of the screen")
		    }
		    if(!($window.scrollTop() >= model)){
		    	$('.model_info').css('right', '-600px');
		    	$('#model-name').css({'transform': 'scale(2, 2)', 'transitionDuration': '1s'});
		    	$('.ms').css('opacity', '0');
		    }
		    //Dancer Section
		    if ( $window.scrollTop() >= (dancer - 650)) {
		        
		        $('.dancer_info').css('left', '100px')
		        console.log("Dancer is at the top of the screen")
		    }
		    if ( !($window.scrollTop() >= dancer) ) {
		        
		        $('.dancer_info').css('left', '-500px')
		        console.log("Dancer is at the top of the screen")
		    }
		    //Actor Section
		    if ( $window.scrollTop() >= actor ) {
		        
		        $('.actor_info').css('bottom', '10px')
		        console.log("Actor is at the top of the screen")
		    }

		    if(!($window.scrollTop() >= actor)){
		    	$('.actor_info').css('bottom', '-600px')
		    }
		    //Gamer section
		    if ( $window.scrollTop() >= gamer ) {
		        $('.gamer_info').css('display', 'block');
		        $('.gamer-name').css({'transform': 'scale(1)'});
		        $('#g1').css({transitionProperty: 'all', transitionDuration: '1s',  opacity:'1'});
		    	$('#g2').css({transitionProperty: 'all', transitionDuration: '3s',  opacity:'1'});
		    	$('#g3').css({transitionProperty: 'all', transitionDuration: '1.5s',  opacity:'1'});
		    	$('#g4').css({transitionProperty: 'all', transitionDuration: '3s',  opacity:'1'});
		    	$('#g5').css({transitionProperty: 'all', transitionDuration: '400ms',  opacity:'1'});
		    	$('#gamer .info-text').css({'borderTop': '1px solid white', })
		        console.log("Gamer is at the top of the screen")
		    }

		    if ( !($window.scrollTop() >= gamer) ) {
		    	$('.gamer-name').css({'transform': 'scale(3)', 'transitionDuration': '1s'});
		        $('#g1').css({transitionProperty: 'all', transitionDuration: '100ms', transform: 'scale(2)', opacity:'0'});
		    	$('#g2').css({transitionProperty: 'all', transitionDuration: '100ms', transform: 'scale(2)', opacity:'0'});
		    	$('#g3').css({transitionProperty: 'all', transitionDuration: '100ms', transform: 'scale(2)', opacity:'0'});
		    	$('#g4').css({transitionProperty: 'all', transitionDuration: '100ms', transform: 'scale(2)', opacity:'0'});
		    	$('#g5').css({transitionProperty: 'all', transitionDuration: '100ms', transform: 'scale(2)', opacity:'0'});
		    }
		    //Contact section 
		    if ( $window.scrollTop() >= (contact - 150)) {
		        
		        $('#contact > form').css('opacity', '1')
		        console.log("contact section is at the top of the screen")
		    }

		    if ( !($window.scrollTop() >= (contact - 150))) {
		     

		        $('#contact > form').css('opacity', '0')
		        console.log("contact section is at the top of the screen")
		    }



		    //contact parallax
		    
		  contactParallax.style.backgroundPosition = elBackgrounPos;
		});

	//Ad
	window.setTimeout(function() {
	    $('#ad-wrapper').css('display', 'block')

	    $('body').css('overflow', 'hidden')

	    $("#close-btn").click(function(){
		    
		   $('#ad-wrapper').css('display', 'none')
		   $('body').css('overflow', 'auto')
		});

	}, 20000);
	

 });

$(document).ready(function(){

  	console.log("juery is working")
        $(window).scroll(function() {
            var parallax = $(this).scrollTop();

            $('.dancer').css('transform', 'translate(0px, '+ parallax / 50 + '%)')
            $('.actor').css('transform', 'translate(0px, -'+ parallax / 32 + '%)')
            $('#dust-1').css('transform', 'translate(0px, -'+ parallax / 5 + '%)')
            $('#dust-2').css('transform', 'translate(0px, -'+ parallax / 15 + '%)')
            $('#dust-3').css('transform', 'translate(0px, -'+ parallax / 7 + '%)')
            //$('.as').css('textShadow', 'black -5px -' + parallax / 220 + 'px')
            
        });
        
        

        
})