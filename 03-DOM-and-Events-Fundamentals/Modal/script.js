'use strict'

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};

for (let index = 0; index < btnShowModal.length; index++) {
    const element = btnShowModal[index];
    element.addEventListener('click', showModal);
};


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

