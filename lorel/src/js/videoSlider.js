const linkVideo = [
		'https://www.youtube.com/embed/P5csD0SX8jI',
		'https://www.youtube.com/embed/kQKi3bFFjT8',
		'https://www.youtube.com/embed/JZZ3y30leUM'
	];

let index = 0;
let lastIndex = linkVideo.length - 1;

function getElem(arr) {
	let iframe = document.getElementById('iframeSlider');
		iframe.removeAttribute('src');
		iframe.setAttribute('src', `${arr}?autoplay=0&amp;rel=0&amp;showinfo=0`);
};

window.onload = function() {
	getElem(linkVideo[index]);
}
	
document.getElementById('videoLeft').addEventListener('click', function() {
	if (index == 0) {
		getElem(linkVideo[lastIndex]);
		index = lastIndex;
	}
	else {
		getElem(linkVideo[index - 1]);
		index = index - 1;
	}
});

document.getElementById('videoRight').addEventListener('click', function() {
		if (index == lastIndex) {
			getElem(linkVideo[0]);
			index = 0;
		}
		else {
			getElem(linkVideo[index + 1]);
			++index;
		}
	});