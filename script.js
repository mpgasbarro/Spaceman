// Grabbing elements for How to Play Button
const openBtn = document.getElementById('howToPlayModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

//Functions for How To Play Button
const openModal = () => {
	modal.style.display = 'block';
};
const closeModal = () => {
	modal.style.display = 'none';
};

//Event Listeners for How to Play Button
openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

let wordBank = ['bike', 'dog', 'cat', 'bed', 'house'];

// function to breakdown array (wordBank) into single characters
wordBank.forEach((word, index) => (wordBank[index] = `${word.split('')}`));

console.log(wordBank[0]);
