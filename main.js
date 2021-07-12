'use strict'

const carrot = document.querySelector('.carrot__group');
const carrotIdx = document.querySelectorAll('.carrot');
let carrots = [];


const removeCarrot = (idx) => {
	
	carrotIdx.addEventListener('click', () => {
		
	})
}


const showCarrorts = () => {
	carrot.classList.remove('hide');
}


const startGame = () => {
	const startBtn = document.querySelector('.start__btn');

	startBtn.addEventListener('click', () => {
		showCarrorts();
	})
}


function init() {
	carrot.classList.add('hide');	
	startGame();
	
	
}

init();