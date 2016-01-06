$(function(){

//ロードした時、タイトルの準備
	$('#title_logo').css({
		width:'300%',
		height:'300%',
		position:'absolute',
		top:'50%',
		left:'50%',
		opacity:'0'
	});
	setTimeout(function(){
			$('h1').animate({width:'658px',height:'130px',opacity:'1'},800,'easeOutBounce');
	},1000);


});