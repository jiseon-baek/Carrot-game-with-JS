'use strict'


export default class Field {
	constructor() {

	}

	randomLocation = () => {
		this.gameSection = document.querySelector('.game-space');
		const imgs = document.querySelectorAll('.item');

		let winWidth = this.gameSection.clientWidth;
		let winHeight = this.gameSection.clientHeight;

		for(let i=0; i < imgs.length; i++) {
			let thisImgs = imgs[i];
			let randomTop = this.getRandomNum(0, winHeight - 100);
			let randomLeft = this.getRandomNum(0, winWidth - 100);
			
	
			thisImgs.style.top = `${randomTop}px`;
			thisImgs.style.left = `${randomLeft}px`;
		}
	}
	getRandomNum (min, max) {
		return Math.random() * (max - min) + min;
	};

	
}