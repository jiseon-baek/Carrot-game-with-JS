'use strict'


export default class Field {
	constructor() {
		this.gameField = document.querySelector('.game-space');
		
		
		
	}

	//randomLocation = () => {
		//this.gameSection = document.querySelector('.game-space');
		//const imgs = document.querySelectorAll('.item');

		//let winWidth = this.gameSection.clientWidth;
		//let winHeight = this.gameSection.clientHeight;

		//for(let i=0; i < imgs.length; i++) {
			//let thisImgs = imgs[i];
			//let randomTop = this.getRandomNum(0, winHeight - 100);
			//let randomLeft = this.getRandomNum(0, winWidth - 100);
			
	
			//thisImgs.style.top = `${randomTop}px`;
			//thisImgs.style.left = `${randomLeft}px`;
		//}
	//}
	//getRandomNum (min, max) {
		//return Math.random() * (max - min) + min;
	//};

	getRandomLocate = () => {
		this.addItem('carrot', 2, './img/tri.png');
		this.addItem('carrot', 3, './img/cir.png');
		this.addItem('bug', 6, './img/front.png');

		
	}

	addItem = (className, count, imgPath) => {
		const fieldRect = this.gameField.getBoundingClientRect();
		const x1 = 0;
		const y1 = 0;
		const x2 = fieldRect.width;
		const y2 = fieldRect.height;
		
		for (let i = 0; i < count; i++) {
			const item = document.createElement('img');
			item.setAttribute('class', className);
			item.setAttribute('src', imgPath);
			item.style.position = 'absolute';

			const x = this.randomNumber(x1, x2);
			const y = this.randomNumber(y1, y2);
			item.style.left = `${x}px`;
			item.style.top = `${y}px`;
			item.style.width = '80px';
			this.gameField.appendChild(item);
		}
	}
	randomNumber = (min, max) => {
		return Math.random() * (max - min) + min;

	}

	

	

	
}