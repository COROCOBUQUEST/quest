$(function(){

//各ボックスの高さ・幅取得
	var storyTop = $('#boxA').offset().top;
	var charaTop = $('#boxB').offset().top;
	var itemTop = $('#boxC').offset().top;
	
//スクリーンサイズ取得
	var sWidth = 0;
	sWidth = window.innerWidth;
	alert(sWidth);

//メニュータイトルクリックでスクロールリンク
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

	$(document).scroll(function(){
		if(){
		
		}
	});

	$('#global_menu').css({left:'-150px'});


//ブックマーククリックで出たり引っ込んだり
	$('.bookmark').click(function(){
		$('#global_menu').animate({left:'0px'},1000,'swing');
	});




if(sWidth<=400){
	$('nav').css({left:'-500px'});
	$('#container').before('<p id="navbutton">●</p>');
	$('#navbutton').css({position:'fixed',left:'10px',top:'10px',zIndex:'15000',cursor:'pointer'});

	var flug = true;
	$('#navbutton').click(function(){
		if(flug == true){
			$('nav').animate({left:'0px'},1000);
		}else{
			$('nav').animate({left:'-500px'},1000);
		}
		flug = !flug;
	});
}//if400

});