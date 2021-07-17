'use strict'

const carrots = document.querySelector('.carrot__group');
const startBtn = document.querySelector('.start__btn');
const modalBox = document.querySelector('.modal');


//position rabbit & bugs randomly

const randomLocation = () => {
	const gameSection = document.querySelector('.game-space');
	const imgs = document.querySelectorAll('.carrot');

	let winWidth = gameSection.clientWidth;
	let winHeight = gameSection.clientHeight;

	for(let i=0; i < imgs.length; i++) {
		let thisImgs = imgs[i];
		let randomTop = getRandomNum(0, winHeight) + 350;
		let randomLeft = getRandomNum(0, winWidth);
		

		thisImgs.style.top = `${randomTop}px`;
		thisImgs.style.left = `${randomLeft}px`;
	}

	
	function getRandomNum (min, max) {
		return Math.random() * (max - min) + min;
	};

}


const showCarrorts = () => {
	carrots.style.display = 'block';
	randomLocation();
}

//restart버튼 클릭시 페이지 reload
const restartGame = () => {
	const reBtn = document.querySelector('.restart__btn');

	reBtn.addEventListener('click', () => {
		window.location.reload();

	});
}


const gameOver = () => {
	modalBox.style.display = 'block';
	restartGame();
}


//Count 함수
const countStart = () => {
	const timerSpan = document.querySelector('.count');
	let count = 11;
	const counter = setInterval(timer, 1000);


	function timer() {
		count--;

		if (count === 0) {
			
			clearInterval(counter);
			
			gameOver();
			
			

			timerSpan.innerHTML = "";
			startBtn.innerHTML = "Start!";
			startBtn.style.fontSize = '28px';

			

		}
		timerSpan.innerHTML = `00:${count<10 ? `0${count}` : `${count}`}`;

	}

	
}

const startGame = () => {

	startBtn.addEventListener('click', () => {
		showCarrorts();
		startBtn.innerHTML = "⏸";
		startBtn.style.fontSize = '60px';

		countStart();
		showCarrorts();
	});

	
}









(function init() {
	carrots.classList.add('hide');	
	startGame();
	randomLocation();
	
	
	
	
	
}());