'use strict'

const carrots = document.querySelector('.item__group');
const startBtn = document.querySelector('.start__btn');
const modalBox = document.querySelector('.modal');


//아이템 클릭 시 점수 증가

const addScore = () => {
	const carrot = document.querySelectorAll('.carrot');
	const scoreSpan = document.querySelector('.score__span');
	let score = 0;

	scoreSpan.innerHTML = score;

	for(var i = 0; i<carrot.length; i++) {
		
		carrot[i].addEventListener('click', () => {

				score++;
			
				scoreSpan.innerHTML="";
				scoreSpan.innerHTML= score;

				carrot.style.display = 'none';
				
			

		});


	}
}

//당근, 벌레들 랜덤 배치

const randomLocation = () => {
	const gameSection = document.querySelector('.game-space');
	const imgs = document.querySelectorAll('.item');

	let winWidth = gameSection.clientWidth;
	let winHeight = gameSection.clientHeight;

	for(let i=0; i < imgs.length; i++) {
		let thisImgs = imgs[i];
		let randomTop = getRandomNum(0, winHeight - 100);
		let randomLeft = getRandomNum(0, winWidth - 100);
		

		thisImgs.style.top = `${randomTop}px`;
		thisImgs.style.left = `${randomLeft}px`;
	}

	
	function getRandomNum (min, max) {
		return Math.random() * (max - min) + min;
	};

}


const showCarrortsAndBugs = () => {
	
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
		showCarrortsAndBugs();
		startBtn.innerHTML = "⏸";
		startBtn.style.fontSize = '60px';

		countStart();
		showCarrortsAndBugs();
		
	});

	
}









(function init() {
	carrots.classList.add('hide');	
	startGame();
	randomLocation();
	addScore();
	

}());