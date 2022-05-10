let youtube = document.querySelector('.youtube');
let progDroos = document.querySelector('.progDroos');
let droos = document.querySelector('.droos-online-chanel');
let droosTitle = document.querySelector('.droos-title');
let menu = document.querySelector('.menu');
let aside = document.querySelector('aside');
let islam = document.querySelector('.islam');
let passion = document.querySelector('.passion');
let idiom = document.querySelector('.idiom');
let hassanVid = document.querySelector('.hassanVid');
let link = document.getElementById('a');

//Menu Opening and Closing
menu.addEventListener('click', () => {
	aside.classList.toggle('none');
});
//Youtube Opening
youtube.addEventListener('click', () => {
	let src = 'https://www.youtube.com/';
	link.setAttribute('href', src);
	link.click();
});
//Droos Video programming
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('progDroos')) {
		let src = 'https://www.youtube.com/watch?v=m0jyjCyFw_c&t=1s';
		link.setAttribute('href', src);
		link.click();
	}
});
//Droos Video passion
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('passion')) {
		let src = 'https://www.youtube.com/watch?v=5Z4MorOFbEo&t=705s';
		link.setAttribute('href', src);
		link.click();
	}
});
//Droos Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('droos-ch')) {
		let src = 'https://www.youtube.com/channel/UCEHvaZ336u7TIsUQ2c6SAeQ';
		link.setAttribute('href', src);
		link.click();
	}
});
//zAmerican Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('idiom')) {
		let src = 'https://www.youtube.com/watch?v=nSHtck2UVzw&t=1s';
		link.setAttribute('href', src);
		link.click();
	}
});
//Islam Hisham Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('islam')) {
		let src = 'https://www.youtube.com/watch?v=dyof97-T2OU&t=6s';
		link.setAttribute('href', src);
		link.click();
	}
});
//Islam Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('islam-ch')) {
		let src = 'https://www.youtube.com/channel/UCHBq980JT8dra4eMydVpcOA';
		link.setAttribute('href', src);
		link.click();
	}
});
//hassan Hashim Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('hassanVid')) {
		let src = 'https://www.youtube.com/watch?v=K3835fAB0Uc';
		link.setAttribute('href', src);
		link.click();
	}
});
//hassan Hashim Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('hassan-ch')) {
		let src = 'https://www.youtube.com/channel/UCN1Lyow-3R4jtN-cddDd_eQ';
		link.setAttribute('href', src);
		link.click();
	}
});
//Elzero Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('elzeroVid')) {
		let src = 'https://www.youtube.com/watch?v=rZcBHcmStJM';
		link.setAttribute('href', src);
		link.click();
	}
});
//Elzero Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('elzero-ch')) {
		let src = 'https://www.youtube.com/channel/UCSNkfKl4cU-55Nm-ovsvOHQ';
		link.setAttribute('href', src);
		link.click();
	}
});
//Messi Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('messiVid')) {
		let src = 'https://www.youtube.com/watch?v=p693u53Q10U&t=12s';
		link.setAttribute('href', src);
		link.click();
	}
});
//Messi Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('messi-ch')) {
		let src = 'https://www.youtube.com/channel/UCPzSHflEECCGDQPV4y-kh4Q';
		link.setAttribute('href', src);
		link.click();
	}
});
//Platform Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('platformVid')) {
		let src = 'https://www.youtube.com/watch?v=fxT9nK_rKqk&t=57s';
		link.setAttribute('href', src);
		link.click();
	}
});
//Platform Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('platform-ch')) {
		let src = 'https://www.youtube.com/channel/UCPzSHflEECCGDQPV4y-kh4Q';
		link.setAttribute('href', src);
		link.click();
	}
});
//Daheeh Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('daheehVid')) {
		let src = 'https://www.youtube.com/watch?v=gPJhjnnBNAs';
		link.setAttribute('href', src);
		link.click();
	}
});
//Daheeh Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('daheeh-ch')) {
		let src = 'https://www.youtube.com/channel/UCtJmfVv0a52Bu7BnJJtZXKw';
		link.setAttribute('href', src);
		link.click();
	}
});
//Daheeh Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('islamVideo')) {
		let src = 'https://www.youtube.com/watch?v=rq4Mcji1tyA';
		link.setAttribute('href', src);
		link.click();
	}
});
//omar Abdelrhim Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('omarAbdVid')) {
		let src = 'https://www.youtube.com/watch?v=x4My351CFaw';
		link.setAttribute('href', src);
		link.click();
	}
});
//omar Abdelrhim Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('omarAbd-ch')) {
		let src = 'https://www.youtube.com/channel/UCxmEEGYXJkgJJO12nJhXl5g';
		link.setAttribute('href', src);
		link.click();
	}
});
//mmm Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('mmmVid')) {
		let src = 'https://www.youtube.com/watch?v=RlSjWRPt9dU';
		link.setAttribute('href', src);
		link.click();
	}
});
//mmm Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('mmm-ch')) {
		let src = 'https://www.youtube.com/channel/UCrRiVfHqBIIvSgKmgnSY66g';
		link.setAttribute('href', src);
		link.click();
	}
});
//mam Video
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('mmm-ch')) {
		let src = 'https://www.youtube.com/watch?v=yhcrYPFtp38';
		link.setAttribute('href', src);
		link.click();
	}
});
//mam Chanel
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('mmm-ch')) {
		let src = 'https://www.youtube.com/channel/UC9c89meMU-ES5hb3CVAgIjQ';
		link.setAttribute('href', src);
		link.click();
	}
});
