$(function(){

//ロードした時、タイトルの準備
	$('h1').css({
		width:'3000px',
		height:'3000px',
		position:'relative',
		top:'-500px',
		left:'-500px',
		opacity:'0'
	});
	setTimeout(function(){
			$('h1').animate({width:'658px',height:'130px',top:'0',left:'0',opacity:'1'},800,'easeOutBounce');
	},1000);


});