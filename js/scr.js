$(function(){

//各ボックスの高さ・幅取得
	var storyTop = $('#boxA').offset().top;
	var charaTop = $('#boxB').offset().top;
	var itemTop = $('#boxC').offset().top;
	var bkm = $('#bookmark').offset().left;
	var chara1 = $('#chara1').offset().top;
	var chara2 = $('#chara2').offset().top;
	var chara3 = $('#chara3').offset().top;

//画面幅
	var sWidth = 0;
	sWidth = window.innerWidth;
//それを表示する（後で消す）/////
	$('#container').prepend('<p id="wlikid">横幅'+sWidth+'</p>');
	$('#wlikid').css({position:'fixed',top:'20px',right:'0',zIndex:'500'});

//右上のスクロール値を計って表示するやつ（あとで消す）/////
	$('#container').prepend('<p id="scrcnt">スクロール0</p>');
	$('#scrcnt').css({position:'fixed',top:'0',right:'0',zIndex:'500'});

//キャラボックスにクラス名つける
	/*if($('div').hasClass('crbox')){*/
		$('.crbox').addClass('js_charabox_default');
		$('.cname-h,.cr-pvimg,.cr-p').addClass('js_chara_default');



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

	$('#bookmark').click(function(){
		if(bkm <= 150){
			$('#global_menu').animate({left:'0px'},500,'swing').removeClass('js_bookmark_off');
			bkm = 200;
		}else{
			$('#global_menu').animate({left:'-200px'},500,'swing');
			bkm = 50;
		}
	});


///////////////ここまで//////////////////////////////



///////////////////////////////////
//スクロールしたら～
///////////////////////////////////

	$(document).scroll(function(){
		scrlcount = $(document).scrollTop();
		$('#scrcnt').text('スクロール'+scrlcount);

//スクロールでコンテンツがふわっと出てくる・コンテンツボックス編

		if(scrlcount>=(storyTop-700)){
			$('#boxA').addClass('js_fadein').css({opacity:'1'});
		}
		if(scrlcount>=(charaTop-700)){
			$('#boxB').addClass('js_fadein').css({opacity:'1'});
		}
		if(scrlcount>=(itemTop-700)){
			$('#boxC').addClass('js_fadein').css({opacity:'1'});
		}

//スクロールでコンテンツがふわっと出てくる・キャラクター編

		if(scrlcount>=(chara1-800)){
			$('#chara1').addClass('js_charabox_anime').removeClass('js_charabox_default');
			setTimeout(function(){
				$('#chara1 h3').addClass('js_chara_anime').removeClass('js_chara_default');
			},500);
			setTimeout(function(){
				$('#chara1 .cr-pvimg').addClass('js_chara_anime').removeClass('js_chara_default');
			},700);
			setTimeout(function(){
				$('#chara1 .cr-p').addClass('js_chara_anime').removeClass('js_chara_default');
			},1000);
		}
		if(scrlcount>=(chara2-500)){
			$('#chara2').addClass('js_charabox_anime').removeClass('js_charabox_default');
			setTimeout(function(){
				$('#chara2 h3').addClass('js_chara_anime').removeClass('js_chara_default');
			},500);
			setTimeout(function(){
				$('#chara2 .cr-pvimg').addClass('js_chara_anime').removeClass('js_chara_default');
			},700);
			setTimeout(function(){
				$('#chara2 .cr-p').addClass('js_chara_anime').removeClass('js_chara_default');
			},1000);
		}
		if(scrlcount>=(chara3-500)){
			$('#chara3').addClass('js_charabox_anime').removeClass('js_charabox_default');
			setTimeout(function(){
				$('#chara3 h3').addClass('js_chara_anime').removeClass('js_chara_default');
			},500);
			setTimeout(function(){
				$('#chara3 .cr-pvimg').addClass('js_chara_anime').removeClass('js_chara_default');
			},700);
			setTimeout(function(){
				$('#chara3 .cr-p').addClass('js_chara_anime').removeClass('js_chara_default');
			},1000);
		}

//スクロールでにくきゅう登場
		if(scrlcount>=1200){
			$('#goTop').fadeIn(800);
		}else{
			$('#goTop').fadeOut(800);
		}
//スクロールでナビ片付ける
		if(scrlcount>=900 && bkm>=150 && sWidth>400){
			$('#global_menu').addClass('js_bookmark_off').css({left:'-200px'});
			bkm = 50;
		}
	});//スクロール

//Nav・メニュータイトルクリックでスクロールリンク
	$('#nav_top').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});
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