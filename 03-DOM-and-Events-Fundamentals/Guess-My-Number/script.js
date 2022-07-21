'use strict'

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);
*/

let secretNumber;
let score;
let isPlayerWin;
let highScore = 0;

const start = function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    isPlayerWin = false;
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', function () {
    if (!isPlayerWin) {

        if (score > 1) {
            const guess = Number(document.querySelector('.guess').value);
            if (!guess) {
                document.querySelector('.message').textContent = 'Not a number!';
            } else if (guess === secretNumber) {
                document.querySelector('.message').textContent = 'Correct Number!';
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = secretNumber;
                isPlayerWin = true;
                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }

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
    }

});


document.querySelector('.again').addEventListener('click', start);
start();