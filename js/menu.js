var menu = document.querySelector('.click-me').addEventListener('click', toggleMenu);


function toggleMenu(){
	var bar = document.querySelectorAll('.bar');
	for (var i = 0; i < bar.length;  i++) {
		bar[i].classList.toggle('active');
	}
	var rotarMenu = document.getElementById('rotarMenu');
	rotarMenu.classList.toggle('show');
}
