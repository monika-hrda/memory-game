const menu = document.querySelector('#menu');
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const playButton = document.querySelector('#play-button');
const quitButton = document.querySelector('#quit-button');
const quitButtons = document.querySelectorAll('.quit-buttons');
const game = document.querySelector('#game');
const board = document.querySelector('#board');
const movesCounter = document.querySelector('#moves-counter');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const winMoves = document.querySelector('#win-moves');
const winTime = document.querySelector('#win-time');
const background = document.querySelector('#background-image');

let numOfCards = 4;
let cards = [];

let isPaused = false;
let chosenCards = [];
let numOfMatches = 0;
let moves = 0;
let mins = 0;
let secs = 0;
let timer;

function gameOver() {
    clearInterval(timer);
    winMoves.innerText = moves;
    if (secs < 10) {
        winTime.innerText = `${mins}:0${secs} min`;
    }  else {
        winTime.innerText = `${mins}:${secs} min`;
    }
    quitButton.innerText = 'Main Menu';
    $('#gameWon').modal('show');
}

function checkCardsForMatch(chosenCards) {
    let isMatch = chosenCards[0].dataset.id === chosenCards[1].dataset.id;
    if (!isMatch) {
        setTimeout(() => {
            chosenCards.forEach((card) => {
                const inner = card.querySelector('.flip-card-inner');
                inner.classList.remove('flipped');});
        }, 1500);
    } else {
        numOfMatches++;
        chosenCards.forEach((card) => {
            // disable matched cards from being clicked on again
            card.style.pointerEvents = 'none';
        });
        if (numOfMatches === cards.length/2) {
            gameOver();
        }
    }
}

function checkCards(event) {
    if (isPaused) return;
    const card = event.currentTarget;
    
    if (chosenCards.length === 1 && card.dataset.index === chosenCards[0].dataset.index) return;
    
    const inner = card.querySelector('.flip-card-inner');
    inner.classList.add('flipped');

    if (chosenCards.length === 0) {
        chosenCards.push(card);
    } else if (chosenCards.length === 1) {
            isPaused = true;
            chosenCards.push(card);
            movesCounter.innerText = ++moves;
            
            checkCardsForMatch(chosenCards);

            setTimeout(() => {
                isPaused = false;
                chosenCards = [];
            }, 1500);
    }
}

function startTimer() {
    timer = setInterval(() => {
        secs++;

        if (secs > 59) {
            minutes.innerText = ++mins;
            secs = 0;
        }

        if (secs < 10) {
            seconds.innerText = `0${secs}`;
        }  else {
            seconds.innerText = secs;
        }
    }, 1000);
}

function setCardListeners() {
    const playingCards = document.querySelectorAll('.flip-card');
    playingCards.forEach(function (playingCard) {
        playingCard.addEventListener('click', checkCards);
    });
}

// code adjusted from https://www.w3schools.com/howto/howto_css_flip_card.asp
function createCard(card, index) {
    return `
        <div class="flip-card col-3" data-index="${index}" data-id="${card.id}">
            <div class="flip-card-inner">
                <div class="flip-card-back rounded-sm">
                    <img class="card-image img-fluid" src="assets/images/cards/card-back.png" alt="bunch of leaves on the back of a card">
                </div>
                <div class="flip-card-front rounded-sm">
                    <img class="card-image img-fluid" src="${card.image}" alt="${card.animal}">
                </div>
            </div>
        </div>
    `;
}

function displayCards(cards) {
    let cardsHTML = '';

    for (let i = 0; i < cards.length; i+=4) {
        const chunk = cards.slice(i, i+4);
        
        chunk.forEach(function(card, index) {
            cardsHTML += createCard(card, index + i);
        });

        board.innerHTML += `<div class="row">${cardsHTML}</div>`;
        cardsHTML = '';
    }

    setCardListeners();
}

function shuffleCards(cards) {
    return cards.sort(() => Math.random()-0.5);
}

function fadeBackground() {
    background.style.opacity = 1.0;
    board.style.opacity = 0.0;
    
    let displayValue = 0.0;
    let fadeValue = 1.0;

    const fadeInterval = setInterval(function() {
        if (background.style.opacity <= 0) {
            background.style.display = 'none';
            clearInterval(fadeInterval);
        } else {
            fadeValue -= 0.010; 
            displayValue += 0.010; 
            background.style.opacity = fadeValue;
            board.style.opacity = displayValue;
        }
    }, 10);
}

function startGame() {
    cards = shuffleCards(cards.concat(cards));
    displayCards(cards);
    startTimer();
    fadeBackground();
}

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
    });
});

playButton.addEventListener('click', function () {
    cards = animalCards.slice(0, numOfCards);
    menu.style.display = 'none';
    game.style.display = 'block';
    startGame();
});

quitButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = window.location.href.includes('github') ? '/memory-game/' : '/';
    });
});
