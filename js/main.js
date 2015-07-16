window.onload = function() {
	var $header, $menuBtn;

	$header = document.querySelectorAll('header')[0],
 	$menuBtn = document.querySelectorAll('.overflow')[0];

	$menuBtn.addEventListener('click', function(){
		document.body.classList.toggle('menu-open');
	});
}