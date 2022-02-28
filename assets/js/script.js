const menu = document.querySelector('#menu');
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const playButton = document.querySelector('#play-button');
const game = document.querySelector('#game');
const board = document.querySelector('#board');

let numOfCards = 6;
let cards = [];

function createCard(card) {
    return `
        <div class="card">
            <img src="${card.image}">
        </div>
    `
}

function displayCards(cards) {
    cards.forEach(function (card) {
        card = createCard(card);
    });
}

function shuffleCards(cards) {
    return cards.sort(() => Math.random()-0.5);
}

function startGame() {
    cards = shuffleCards(cards.concat(cards));
    console.log(cards);
    displayCards(cards);
};

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
    startGame();
});

