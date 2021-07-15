'use strict'

const carrots = document.querySelector('.carrot__group');
const carrotIdx = document.querySelectorAll('.carrot');
const startBtn = document.querySelector('.start__btn');
const modalBox = document.querySelector('.modal');



const removeCarrot = (e) => {
	
	const target = e.target;
	const carrotGroup = target.parentNode;

	console.log(carrotGroup);
	
}


const showCarrorts = () => {
	carrots.classList.remove('hide');
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
	})

	
}






(function init() {
	carrots.classList.add('hide');	
	startGame();
	removeCarrot();
	
	
	
}());