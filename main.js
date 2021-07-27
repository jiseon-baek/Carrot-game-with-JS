'use strict'

import ModalBox from './modalbox.js';
import Field from './field.js';



const carrots = document.querySelector('.item__group');
const startBtn = document.querySelector('.start__btn');


const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/alert.wav');

const finishGame = new ModalBox();
finishGame.setClickListener(() => {
	window.location.reload();
});

//아이템 클릭 시 점수 증가 및 감소

const addScore = () => {
	const carrot = document.querySelectorAll('.carrot');
	const bug = document.querySelectorAll('.bug');
	const scoreSpan = document.querySelector('.score__span');
	let score = carrot.length;

	scoreSpan.innerHTML = score;

	for(var i = 0; i<carrot.length; i++) {
		
		carrot[i].addEventListener('click', (e) => {
				score--;
			
				scoreSpan.innerHTML="";
				scoreSpan.innerHTML= score;
				
				e.target.style.display='none'; //당근 클릭 시 display='none'

				const carrotAudio = new Audio('./sound/carrot_pull.mp3');
				carrotAudio.play();



				if (score === 0) {
					
					bgSound.pause();
					finishGame.gameOver();
					const winSound = new Audio('./sound/game_win.mp3');
					winSound.play();
					
					
				}
				
		});

		bug[i].addEventListener('click', () => {
			const bugSound = new Audio('./sound/bug_pull.mp3');
			bugSound.play();
			finishGame.gameOver();
			bgSound.pause();
			alertSound.play();
			
		});

		
	}
}

//당근, 벌레들 랜덤 배치

const randomLocate = new Field();




const showCarrortsAndBugs = () => {
	
	carrots.style.display = 'block';
	randomLocation();
}






//Count 함수
const countStart = () => {
	const timerSpan = document.querySelector('.count');
	let count = 11;
	
	const counter = setInterval(timer, 1000);

	function timer() {
		timerSpan.innerHTML= count;
		--count;

		if (count === 0) {
			
			clearInterval(counter);
			alertSound.play();
			bgSound.pause();
			finishGame.gameOver();
			

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
		addScore();
		bgSound.play();
		
	});

	
}

(function init() {
	carrots.classList.add('hide');	
	startGame();
	randomLocate.randomLocation();
	addScore();
	
	

}());