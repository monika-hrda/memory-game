const menu = document.querySelector('#menu');
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const playButton = document.querySelector('#play-button');
const game = document.querySelector('#game');
const board = document.querySelector('#board');

let numOfCards = 6;
let cards = [];

// Event Listeners

difficultyButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const btn = event.target;
        difficultyButtons.forEach(function (choice) {
            if (choice.classList.contains('button-active')) {
                choice.classList.remove('button-active');
            }
        });
        btn.classList.add('button-active');
        numOfCards = Number(btn.dataset.value);
        //console.log(numOfCards);
    })
});

playButton.addEventListener('click', function () {
    cards = animalCards.slice(0, numOfCards);
    menu.style.display = 'none';
    game.style.display = 'block';
});

//console.log(board);