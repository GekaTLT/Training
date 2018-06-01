'use strict';

window.onload = function() {

	const testItem = document.getElementsByClassName('test__view__item');

	for (let i = 0; i < testItem.length; i++) {

		testItem[i].onclick = function() {
			for (let n = 0; n < testItem.length; n++) {
				testItem[n].classList.remove('test__view__item--active');
			}
			this.classList.add('test__view__item--active');
		}
	}
};