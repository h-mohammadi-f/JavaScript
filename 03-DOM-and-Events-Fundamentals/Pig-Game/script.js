'use strict'

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const btnDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let activePlayer = 0;
let haveWinner = false;

const newGame = () => {
    activePlayer = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    diceEL.classList.add('hidden');
    player1EL.classList.remove('player--active');
    player0EL.classList.add('player--active');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    haveWinner = false;
}

btnNew.addEventListener('click', newGame);

const swapPlayer = () => {
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    player1EL.classList.toggle('player--active');
    player0EL.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
}


btnDice.addEventListener('click', () => {
    if (!haveWinner) {

        let diceNumber = Math.trunc(Math.random() * 6) + 1;
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${diceNumber}.png`;
        if (diceNumber > 1) {
            if (activePlayer === 0) {
                current0EL.textContent = Number(current0EL.textContent) + diceNumber;
            }
            else {
                current1EL.textContent = Number(current1EL.textContent) + diceNumber;
            }
        }
        else {
            swapPlayer();
        }
    }
    else
        alert('The game has a winner :) Please start a new game!');
});

btnHold.addEventListener('click', () => {
    if (!haveWinner) {

        if (activePlayer === 0) {
            score0EL.textContent = Number(score0EL.textContent) + Number(current0EL.textContent);
        }
        else {
            score1EL.textContent = Number(score1EL.textContent) + Number(current1EL.textContent);
        }
        if (Number(score0EL.textContent) >= 100) {
            player0EL.classList.add('player--winner');
            player0EL.classList.remove('player--active');
            haveWinner = true;
            diceEL.classList.add('hidden');
        }
        else if (Number(score1EL.textContent) >= 100) {
            player1EL.classList.add('player--winner');
            player1EL.classList.remove('player--active');
            haveWinner = true;
            diceEL.classList.add('hidden');
        }
        else
            swapPlayer();
    }
    else
        alert('The game has a winner :) Please start a new game!');
});

newGame();