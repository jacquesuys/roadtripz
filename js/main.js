window.onload = function() {
	var $overlay, $menuBtn, $toggle;

	$overlay = document.getElementById('overlay');
 	$menuBtn = document.querySelectorAll('.overflow')[0];

 	var $toggle = function() {
 		document.body.classList.toggle('menu-open');
 	};

	$menuBtn.addEventListener('click', $toggle);

	$overlay.addEventListener('click', $toggle);
}