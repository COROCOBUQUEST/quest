$(function(){

//ロードした時、ひとまずボックスを透明にしておく
	$('#boxA,#boxB,#boxC').css({opacity:'0'});

//各ボックスの高さ取得
	var storyTop = $('#boxA').offset().top;
	var charaTop = $('#boxB').offset().top;
	var itemTop = $('#boxC').offset().top;


///////////////////////////////////
//にくきゅうするする
///////////////////////////////////

//一番右下にGoTop作って隠しておきます
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

//肉球をクリックしてTopヘ上がる
	$('#goTop').click(function(){
		$('html,body').animate({scrollTop:0},800);
	});

//NAV・ブックマーククリックで出たり引っ込んだり
	var bkm = $('.bookmark').offset().left;
	$('.bookmark').click(function(){
		if(bkm>=150){
			$('#global_menu').animate({left:'-200px'},500,'swing');
				bkm = 50;
		}else{
			$('#global_menu').animate({left:'0px'},500,'swing');
			bkm = 200;
		}
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
			$('#boxA').animate({opacity:'1'},800,'swing');
		}
		if(scrlcount>=(charaTop-800)){
			$('#boxB').animate({opacity:'1'},800,'swing');
		}
		if(scrlcount>=(itemTop-800)){
			$('#boxC').animate({opacity:'1'},800,'swing');
		}
//スクロールでにくきゅう登場
		if(scrlcount>=1500){
			$('#goTop').fadeIn(800);
		}else{
			$('#goTop').fadeOut(800);
		}
		
		
		if(scrlcount>=1000){
			if(bkm>=150){
				$('#global_menu').animate({left:'-200px'},800);
			}
		}/*else{
			$('#global_menu').animate({left:'0px'},800);

		}*/

	});



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