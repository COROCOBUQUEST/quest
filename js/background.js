$(function(){
	setTimeout('cloud1()',1000);//雲関数実行
	setTimeout('cloud2()',3000);//雲関数実行
	setTimeout('cloud3()',500);//雲関数実行

//雲表示
	$('#bg_img').prepend('<img src="./img/kumo01.png" id="cloud1">');
	$('#cloud1').css({position:'absolute',zIndex:'1',left:'2000px'});
	
	$('#bg_img').prepend('<img src="./img/kumo02.png" id="cloud2">');
	$('#cloud2').css({position:'absolute',zIndex:'1',top:'200px',left:'3500px'});

	$('#bg_img').prepend('<img src="./img/kumo03.png" id="cloud3">');
	$('#cloud3').css({position:'absolute',zIndex:'1',top:'500px',left:'1000px'});



});//jQuery終了


//雲１アニメ
	function cloud1(){
		$('#cloud1').animate({left:'-500px'},40000).animate({left:'2000px'},0);
		setTimeout('cloud1()',800);
	}
	function cloud2(){
		$('#cloud2').animate({left:'-500px'},35000).animate({left:'2000px'},0);
		setTimeout('cloud2()',2000);
	}
	function cloud3(){
		$('#cloud3').animate({left:'-500px'},25000).animate({left:'2500px'},0);
		setTimeout('cloud3()',1000);
	}