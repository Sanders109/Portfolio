// showhide.js

//$(function() {
//	alert('Hello?');
//});

$(document).ready(function() {
	$('.labout').click(function() {
		$('#about').slideDown(1000);
		$('html,body').animate(
			{
				scrollTop: $('#here').offset().top
			},
			2000
		);
	});
});
