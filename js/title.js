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
	alert('ちっさい');
}






});