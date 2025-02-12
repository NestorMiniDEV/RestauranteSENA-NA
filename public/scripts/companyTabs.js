const tabs = document.querySelectorAll('.tab');
const navCont = document.querySelectorAll('.navCont');

tabs.forEach((_, i) => {
	tabs[i].addEventListener('click', () => {

		navCont.forEach((_, i) => {
			navCont[i].classList.remove('active');
			tabs[i].classList.remove('active');
		});

		tabs[i].classList.add('active');
		navCont[i].classList.add('active');
	});

})