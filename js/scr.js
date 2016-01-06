$(function(){

//ロードした時、ひとまずボックスを透明にしておく
	$('#boxA,#boxB,#boxC').css({opacity:'0'});
//ついでに矢印作って隠しておきます
	$('#container').after('<p id="goTop"><i class="fa fa-paw"></i><br><span class="gotop">Go Top</span></p>');
//肉球CSS
	$('#goTop').css({
		position:'fixed',
		bottom:'0px',
		right:'50px',
		zIndex:'10000',
		fontSize:'3rem',
		opacity:'0.7',
		color:'#000',
		lineHeight:'0',
		textAling:'center',
		cursor:'pointer'
	}).hide();
//GoTop文字のみCSS
	$('.gotop').css({fontSize:'0.3em',fontWeight:'bold'});


//スクロール値を計って表示する
	$('#container').prepend('<p id="scrcnt">スクロール0</p>');
	$('#scrcnt').css({position:'fixed',top:'0',right:'0',zIndex:'500'});
	
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
		if(scrlcount>=1000){
			$('#goTop').fadeIn(800);
		}else{
			$('#goTop').fadeOut(800);
		}
	});
	
//肉球をクリックしてTopヘ上がる
	$('#goTop').click(function(){
		$('html,body').animate({scrollTop:0},800);
	
	});


});