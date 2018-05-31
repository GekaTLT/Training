import getTime from './timerOut.js';

const timeOut = '2018-12-31';

setInterval(function() {
	document.getElementById('days').innerHTML = `<p>${getTime(timeOut).days}</p>`;
	document.getElementById('Hours').innerHTML = `<p>${getTime(timeOut).hours}</p>`;
	document.getElementById('Minutes').innerHTML = `<p>${getTime(timeOut).minutes}</p>`;
	document.getElementById('Seconds').innerHTML = `<p>${getTime(timeOut).seconds}</p>`;
}, 1000);