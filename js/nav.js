$(function(){
	
//スクリーンサイズ取得
	var windowWidth = $(window).width()+17;
	//ボタン作る
	$('nav').before('<p id="navbutton"><i class="fa fa-book"></i></p>');
	$('nav').prepend('<p id="cross"><i class="fa fa-times"></i></p>');
	$('#navbutton').hide();

	$(window).resize(function(){
		var windowWidth = $(window).width()+17;
		if(windowWidth <= 400){
			$('nav').css({left:'-210px'});
			$('#navbutton,#cross').show();
		}else{
			$('nav').css({left:'0px'});
			$('#navbutton,#cross').hide();
		}
	});
	if(windowWidth <= 400){
		$('nav').css({left:'-210px'});
		$('#navbutton,#cross').show();
	}else{
		$('nav').css({left:'0px'});
		$('#navbutton,#cross').hide();
	}

	$('#navbutton').click(function(){
			$('nav').animate({left:'0px'},400,function(){
				$('#navbutton').hide();
			});
	});
	$('#cross').click(function(){
			$('nav').animate({left:'-210px'},400,function(){
				$('#navbutton').show();
			});
			
	});


	
/*
if(windowWidth<=400){

	var flug = true;
	$('#navbutton').click(function(){
		if(flug == true){
			$('nav').animate({left:'0px'},1000);
			$('#navbutton').hide();
		}else{
			$('nav').animate({left:'0px'},1000);
			$('#navbutton').show();
		}
		flug = !flug;
	});
	
	
	
	
}//if400
*/

});