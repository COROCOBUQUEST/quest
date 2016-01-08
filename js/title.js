$(function(){

//スクリーンサイズ取得
	var sWidth = 0;
	sWidth = window.innerWidth;

if(sWidth>=700){
	//ロードした時、タイトルの準備
	$('#title_logo').css({
		width:'2010px',
		height:'450px',
		opacity:'0'
	});

	setTimeout(function(){
			$('#title_logo').animate({width:'670px',height:'150px',opacity:'1'},1500,'easeOutElastic');
	},1000);

}else{
	//alert('ちっさい');
}

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

	
//キャラポップ用classつける
/*
$('.mainimgbox>img:first-child').addClass('');
$('.mainimgbox>img:nth-child(2)').addClass('');
$('.mainimgbox>img:nth-child(3)').addclass('');
*/





});