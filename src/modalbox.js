'use strict'

export default class ModalBox {
	constructor() {
		this.modalBox = document.querySelector('.modal');
		this.modalSpan = this.modalBox.querySelector('.modal__mes');
		this.reBtn = document.querySelector('.restart__btn');
		this.reBtn.addEventListener('click', () => {
			this.onClick && this.onClick();
			gameOver();
		});
		
	}

	

	setClickListener(onClick) {
		this.onClick = onClick;
		

	}

	gameSuccess() {
		this.modalBox.style.display = 'block';
		this.modalSpan.innerHTML = '💸 Success!';
		
	}
	gameOver() {
		this.modalBox.style.display = "block";
		this.modalSpan.innerHTML = 'You Lost 💣'
		
	}

}