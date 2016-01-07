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
		
	var storyTop = $('#boxA').offset().top;
	var charaTop = $('#boxB').offset().top;
	var itemTop = $('#boxC').offset().top;
		if(scrlcount>=(storyTop-600)){
			$('#boxA').animate({opacity:'1'},1000,'swing');
		}
		if(scrlcount>=(charaTop-600)){
			$('#boxB').animate({opacity:'1'},1000,'swing');
		}
		if(scrlcount>=(itemTop-600)){
			$('#boxC').animate({opacity:'1'},1000,'swing');
		}
		if(scrlcount>=1500){
			$('#goTop').fadeIn(800);
		}else{
			$('#goTop').fadeOut(800);
		}
		//メニュータイトルでスクロール
	$('#nav_story').click(function(){
		$('body,html').animate({scrollTop:storyTop},1000);
		return false;
	});
	$('#nav_chara').click(function(){
		$('body,html').animate({scrollTop:charaTop},1000);
		return false;
	});
	$('#nav_item').click(function(){
		$('body,html').animate({scrollTop:itemTop},1000);
		return false;
	});

		
		
	});



//肉球をクリックしてTopヘ上がる
	$('#goTop').click(function(){
		$('html,body').animate({scrollTop:0},800);
	
	});


});