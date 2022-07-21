'use strict'

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    if (score > 1) {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            document.querySelector('.message').textContent = 'Not a number!';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number!';
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'Too high!';
            document.querySelector('.score').textContent = --score;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'Too low!';
            document.querySelector('.score').textContent = --score;
        }
    } else {
        document.querySelector('.message').textContent = 'Game Over!';
        document.querySelector('.score').textContent = 0;
    }

});