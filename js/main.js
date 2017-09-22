$(document).ready(function(){

	//function that plays sound on key press
	function playSound(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

		if(!audio) return; //stops function if key pressed is not a home row key
		audio.currentTime = 0; //resets sound if already playing
		audio.play();
		key.classList.add('playing');
	};

	//function that stops animation of key press 
	function removeTransition(e){
		if(e.propertyName !== 'transform') return; //skip if its not transform
		this.classList.remove('playing'); //removes playing class
	};

	window.addEventListener("keydown", playSound);
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});