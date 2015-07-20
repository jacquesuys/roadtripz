(function() {
	var $input = document.querySelectorAll('.search-bar input')[0],
		$auto = document.querySelectorAll('.autocomplete')[0],
		$places = $auto.getElementsByTagName('a'),
		$nav = document.querySelectorAll('nav ul li'),
		$modal = document.querySelectorAll('.modal')[0],
		$close = document.querySelectorAll('.close')[0];

	var $overlay = document.getElementById('overlay');

	// Auto complete
	var $activate = function(e) {

		if($input.value.length > 2) {
			$auto.className += ' active';
		} else {
			$auto.className = 'autocomplete';
		}

		if(e.keyCode === 27) {
			$auto.className = 'autocomplete';
		}
	};

	$input.onkeyup = $activate;

	$input.onfocus = $activate;

	for(var i = 0; i < $places.length; i++) {

		$places[i].onclick = function(e){
			e.preventDefault();
			
			var $val = this.innerHTML;
			$input.value = $val;
			$auto.className = 'autocomplete';
		};
	}

	// AJAX
	var $ajax = function(url) {

		var $http;

		if (window.XMLHttpRequest) $http = new XMLHttpRequest();

		$http.onreadystatechange = function() {
			if ($http.readyState === 4) {
				// request finished and response is ready
				if ($http.status === 200) {
					$modal.querySelectorAll('.inner')[0].innerHTML = '';
					$modal.querySelectorAll('.inner')[0].innerHTML = $http.responseText;
					$modal.className += ' active';
					$overlay.className += ' active';
				} else {
					console.log('AJAX error');
				}
			}
		};

		$http.open('GET', url);
		$http.send();
	}; 

	for(var i = 0; i < 2; i++) {

		$nav[i].getElementsByTagName('a')[0].onclick = function(e){
			e.preventDefault();
			
			var $url = this.getAttribute('href');

			$ajax($url);
		};
	}

	// Close for modal
	$close.onclick = function() {
		console.log('close');
	};

})();