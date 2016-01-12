$(function(){
//タイム計測
console.time('timePush');

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
			$('#title_logo').animate({width:'670px',height:'150px',opacity:'1'},1300,'easeInOutElastic');
	},2000);

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


$('#left_chara').addClass('hide');
$('#right_chara').addClass('hide');
$('#newsslide').addClass('slide_before');

setTimeout(function(){
	$('#left_chara').removeClass('hide').addClass('left_chara').addClass('view');
},1000);	
setTimeout(function(){
	$('#right_chara').removeClass('hide').addClass('right_chara').addClass('view');
},1500);
setTimeout(function(){
	$('#newsslide').removeClass('slide_before').addClass('slide_in');
},4000);


//タイム計測終了
console.timeEnd('timePush');



});