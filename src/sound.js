'use strict'

const alertSound = new Audio('./sound/alert.wav');
const carrotAudio = new Audio('./sound/carrot_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const bgSound = new Audio('./sound/bg.mp3');

export function playBg() {
		
	playSound(bgSound);
}

export function pauseBg() {
	pauseSound(bgSound);	
}

export function playAlert() {
	playSound(alertSound);	
}

export function playCarrot() {
	playSound(carrotAudio);	
}

export function playWin() {
	playSound(winSound);	
}

export function playBug() {
	playSound(bugSound);	
}

function playSound(sound) {
	sound.play();
}

function pauseSound(sound) {
	sound.pause();
}


