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

	//ロードした時、ナビの準備
	$('#global_menu').css({position:'absolute',left:'-400px',top:'-200px'});

	$('.sale').css({background:'none',width:'500px'});
	$('#menu1').find('h2').css({
		color:'#fff',
		fontSize:'3.8em',
	});

	setTimeout(function(){
		$('#title_logo').animate({width:'670px',height:'150px',opacity:'1'},1300,'easeInOutElastic');
	},2000);
	setTimeout(function(){
		$('#global_menu').animate({left:'0',top:'0'},1500);
	},4000);
	
}


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