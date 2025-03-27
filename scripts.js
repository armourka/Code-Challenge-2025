const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

function toggleMenu() {
	if (menu.classList.contains('hidden')) {
		show(menu);
		menuBtn.innerHTML = '<img src="assets/xmark.svg" alt="Close Menu" class="icon" />';
	} else {
		hide(menu);
		menuBtn.innerHTML = '<img src="assets/bars.svg" alt="Menu" class="icon" />';
	}
}

menuBtn.addEventListener('click', toggleMenu);

function show(elt) {
	elt.classList.remove('hidden')
}

function hide(elt) {
	elt.classList.add('hidden')
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Form submitted!');
});

window.addEventListener("scroll", function () {
	if (window.scrollY > 500) {
		show(document.getElementById('back-to-top'));
	}
	else {
		hide(document.getElementById('back-to-top'));
	}
}, false);

document.getElementById('back-to-top').addEventListener("click", () => window.scrollTo(0, 0))