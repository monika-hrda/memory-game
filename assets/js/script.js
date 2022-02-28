const menu = document.querySelector('#menu');
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const playButton = document.querySelector('#play-button');
const game = document.querySelector('#game');
const board = document.querySelector('#board');

let numOfCards = 6;
let cards = [];

let isPaused = false;
let chosenCards = [];

function checkCards(event) {
    if (isPaused) return;
    const card = event.currentTarget;
    card.classList.add('flipped');

    if (chosenCards.length === 0) {
        chosenCards.push(card);
    } else if (chosenCards.length === 1) {
            isPaused = true;
            chosenCards.push(card);
            // check cards for match

            setTimeout(() => {
                isPaused = false;
                chosenCards = [];
            }, 2500)
    }
}

function setCardListeners() {
    const playingCards = document.querySelectorAll('.card');
    playingCards.forEach(function (playingCard) {
        playingCard.addEventListener('click', checkCards);
    });
}

function createCard(card, index) {
    return `
        <div class="card" data-id="${card.id}" data-index="${index}">
            <img src="${card.image}">
        </div>
    `
}

function displayCards(cards) {
    cards.forEach(function (card, index) {
        card = createCard(card, index);
        board.innerHTML += card;
    });
    setCardListeners();
}

function shuffleCards(cards) {
    return cards.sort(() => Math.random()-0.5);
}

function startGame() {
    cards = shuffleCards(cards.concat(cards));
    // console.log(cards);
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

