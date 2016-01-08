$(function(){

//各ボックスの高さ取得
	var storyTop = $('#boxA').offset().top;
	var charaTop = $('#boxB').offset().top;
	var itemTop = $('#boxC').offset().top;


///////////////////////////////////
//にくきゅうするする
///////////////////////////////////

//一番右下にGoTop作って隠しておく
	$('#container').after('<p id="goTop"><i class="fa fa-paw"></i><br><span class="gotop_text">Go Top</span></p>');
	$('#goTop').hide();

//肉球をクリックしてTopヘ上がる
	$('#goTop').click(function(){
		$('html,body').animate({scrollTop:0},800);
	});

//NAV・ブックマーククリックで出たり引っ込んだり
	var flug = true;
	$('#bookmark').click(function(){
		if(flug == true){
			$('#global_menu').animate({left:'-200px'},500,'swing').addClass('nav_off').removeClass('nav_on');
				bkm = 50;
		}else{
			$('#global_menu').animate({left:'0px'},500,'swing').addClass('nav_on').removeClass('nav_off');
			bkm = 200;
		}
		flug = !flug;//flugの中に入っているboolianをひっくり返す
	});

//右上のスクロール値を計って表示するやつ（あとで消す）/////
	$('#container').prepend('<p id="scrcnt">スクロール0</p>');
	$('#scrcnt').css({position:'fixed',top:'0',right:'0',zIndex:'500'});
///////////////ここまで//////////////////////////////



///////////////////////////////////
//スクロールしたら～
///////////////////////////////////

	$(document).scroll(function(){
		scrlcount = $(document).scrollTop();
		$('#scrcnt').text('スクロール'+scrlcount);

//スクロールでコンテンツがふわっと出てくる・その１

		if(scrlcount>=(storyTop-800)){
			$('#boxA').addClass('js_fadein').css({opacity:'1'});
		}
		if(scrlcount>=(charaTop-800)){
			$('#boxB').addClass('js_fadein').css({opacity:'1'});
		}
		if(scrlcount>=(itemTop-800)){
			$('#boxC').addClass('js_fadein').css({opacity:'1'});
		}
//スクロールでにくきゅう登場
		if(scrlcount>=1500){
			$('#goTop').fadeIn(800);
		}else{
			$('#goTop').fadeOut(800);
		}
//スクロールでナビ片付ける
	var bkm = $('#bookmark').offset().left;
		if(scrlcount>=1000 && $('nav').hasClass('nav_on')){
			$('#global_menu').addClass('js_bookmark_off').removeClass('nav_on').addClass('nav_off');
		}
		if(scrlcount<=1000 && $('nav').hasClass('nav_off')){
			$('#global_menu').addClass('js_bookmark_on').removeClass('nav_off').addClass('nav_on');
		}
		
	});//スクロール

//Nav・メニュータイトルクリックでスクロールリンク
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