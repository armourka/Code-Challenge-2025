document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');

	function toggleMenu() {
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			menuBtn.innerHTML = '<img src="assets/xmark.svg" alt="Close Menu" class="icon" />';
		} else {
			menu.classList.add('hidden');
			menuBtn.innerHTML = '<img src="assets/bars.svg" alt="Menu" class="icon" />';
		}
	}

	menuBtn.addEventListener('click', toggleMenu);
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});

window.onscroll = function () {
	if (window.scrollY > 500) {
		document.getElementById('back-to-top').style.display = "block";
	}
};
