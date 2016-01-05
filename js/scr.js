$(function(){

//ロードした時、ひとまずボックスを透明にしておく
	$('#boxA,#boxB,#boxC').css({opacity:'0'});

//スクロール値を計って表示する
	$('#container').prepend('<p id="scrcnt">スクロール0</p>');
	$('#scrcnt').css({position:'fixed',top:'0',right:'0'});
	
	$(document).scroll(function(){
		scrlcount = $(document).scrollTop();
		$('#scrcnt').text('スクロール'+scrlcount);
		
		var boxa = $('#boxA').offset().top;
		var boxb = $('#boxB').offset().top;
		var boxc = $('#boxC').offset().top;
		if(scrlcount>=(boxa-600)){
			$('#boxA').animate({opacity:'100'},5000,'swing');
		}
		if(scrlcount>=(boxb-600)){
			$('#boxB').animate({opacity:'100'},5000,'swing');
		}
		if(scrlcount>=(boxc-600)){
			$('#boxC').animate({opacity:'100'},5000,'swing');
		}
	});



});