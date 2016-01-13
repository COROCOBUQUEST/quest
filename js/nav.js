$(function(){
	
//スクリーンサイズ取得
	var windowWidth = $(window).width()+17;
	//ボタン作る
	$('#container').before('<p id="navbutton"><i class="fa fa-book"></i></p>');
	$('#navbutton').hide();

	$(window).resize(function(){
		var windowWidth = $(window).width()+17;
		if(windowWidth <= 400){
			$('nav').css({left:'-500px'});
			$('#navbutton').show();
		}else{
			$('nav').css({left:'0px'});
			$('#navbutton').hide();
		}
	});
	if(windowWidth <= 400){
		$('nav').css({left:'-500px'});
		$('#navbutton').show();
	}else{
		$('nav').css({left:'0px'});
		$('#navbutton').hide();
	}

	
	

if(windowWidth<=400){

	var flug = true;
	$('#navbutton').click(function(){
		if(flug == true){
			$('nav').animate({left:'10px'},1000);
		}else{
			$('nav').animate({left:'-500px'},1000);
		}
		flug = !flug;
	});
}//if400


});