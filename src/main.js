'use strict'

import ModalBox from './modalbox.js';
import Field from './field.js';
import * as sound from './sound.js';



const carrots = document.querySelector('.item__group');
const startBtn = document.querySelector('.start__btn');



const finishGame = new ModalBox();
finishGame.setClickListener(() => {
	window.location.reload();
});



//당근, 벌레들 랜덤 배치

const randomLocate = new Field();




const showCarrortsAndBugs = () => {
	
	carrots.style.display = 'block';
	randomLocate.randomLocation();
}








//Count 함수
export const countStart = () => {
	const timerSpan = document.querySelector('.count');
	let count = 10;
	const counter = setInterval(timer, 1000);

	function timer() {
		timerSpan.innerHTML= count;
		--count;

		if (count === 0) {
			
			
			sound.playAlert();
			sound.pauseBg();
			finishGame.gameOver();
			
			timerSpan.innerHTML = "";
			startBtn.innerHTML = "Start!";
			startBtn.style.fontSize = '24px';
			clearInterval(counter);

			
		} 
		timerSpan.innerHTML = `00:${count<10 ? `0${count}` : `${count}`}`;

		
	}

}

//아이템 클릭 시 점수 증가 및 감소

const addScore = () => {
	const carrot = document.querySelectorAll('.carrot');
	const bug = document.querySelectorAll('.bug');
	const scoreSpan = document.querySelector('.score__span');
	let score = carrot.length;

	const timerSpan = document.querySelector('.count');

	scoreSpan.innerHTML = score;

	for(var i = 0; i<carrot.length; i++) {
		
		carrot[i].addEventListener('click', (e) => {
				score--;
			
				scoreSpan.innerHTML="";
				scoreSpan.innerHTML= score;
				
				e.target.style.display='none'; //당근 클릭 시 display='none'

				sound.playCarrot();

				if (score === 0) {
					
					sound.pauseBg();
					finishGame.gameSuccess();
					
					sound.playWin();
					startBtn.innerHTML="⏹";
					timerSpan.style.opacity=0;

					
				}
		});

		bug[i].addEventListener('click', () => {
			
			sound.playBg();
			finishGame.gameOver();
			sound.pauseBg();
			sound.playAlert();
			startBtn.innerHTML="⏹";
			timerSpan.style.opacity=0;
			
		});

		
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
		sound.playBg();
		
	});

	
}

(function init() {
	carrots.classList.add('hide');	
	startGame();
	randomLocate.randomLocation();
	addScore();
	
}());