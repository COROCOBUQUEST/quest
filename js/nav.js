$(function(){

	$('#global_menu').css({left:'-100px'});
	
//各ボックスの高さ取得
	var storyTop = $('#boxA').offset().top;
	var charaTop = $('#boxB').offset().top;
	var itemTop = $('#boxC').offset().top;
	
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


/*
	$('#nav_top,#nav_story,#nav_chara,#nav_item,#nav_ex').click(function(){
		return false;
	});
	*/

});