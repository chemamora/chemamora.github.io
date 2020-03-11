// document.addEventListener('click', function (event) {
// 	if (!event.target.matches('#click-me')) return;
// 	alert('You clicked me!');
// }, false);

$(function() {
	smoothScroll(800);
	workBelt();
	workLoad();
	
	clientStuff();
	
//   $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' })
  
//   $('.tlt').each(function(){
// 		$(this).css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight})
//   });
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}