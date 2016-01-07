$(function(){

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

	$(document).scroll(function(){
		if(){
		
		}
	});

	$('#global_menu').css({left:'-150px'});


//ブックマーククリックで出たり引っ込んだり
	$('.bookmark').click(function(){
		$('#global_menu').animate({left:'0px'},1000,'swing');
	});
/*
	$('#nav_top,#nav_story,#nav_chara,#nav_item,#nav_ex').click(function(){
		return false;
	});
	*/

});