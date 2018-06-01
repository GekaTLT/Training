'use strict';

(function() {
	const keyAttr = 'data-open-img'; /*Ключевой атрибут для сортировки*/

	const arrayImg = document.getElementsByTagName('img');
	let openImg = [];

/*Массив обьектов <img> по атрибуту data-open-img*/
	for (let i = 0,n = 0; i < arrayImg.length; i++) { 

		if (arrayImg[i].hasAttribute(keyAttr)) {
			openImg[n] = arrayImg[i];
			openImg[n].id = n;
			n++;
		}

	}
/*END Массив обьектов <img> по атрибуту data-open-img*/

/*показ полноразмерного изображения*/
	for (var i = 0,n; i < openImg.length; i++) {

		openImg[i].style.cursor = 'pointer';
		let src = openImg[i].getAttribute('src');

		openImg[i].onclick = function() {
			document.getElementById('open-img__image').setAttribute('src', src);
			document.getElementById('open-img').style.display = 'flex';
		}
	}
/*END показ полноразмерного изображения*/	

/*прокрутка картинок в окне*/
	document.getElementById('open-img__image').onclick = function() {
			let n;
			for (var i = 0; i < openImg.length; i++) {
				if (openImg[i].src === this.src) {
					n = i;
				}
			}

			++n;

			if (n == openImg.length) {
				n = 0;
			}	
			document.getElementById('open-img__image').setAttribute('src', openImg[n].getAttribute('src'));
		}

		document.getElementById('open-img__closed').onclick = function() {
			document.getElementById('open-img').style.display = 'none';
		}
/*END прокрутка картинок в окне*/
})();