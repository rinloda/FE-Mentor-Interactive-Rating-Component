const button = document.querySelector('input');

const submitRating = document.querySelector('#submit-rating');
const submitButton = document.querySelector('#submit-button');
const respondRating = document.querySelector('#response-rating');
submitButton.addEventListener('click', generateThankyou);

function generateThankyou(){
    submitRating.classList.add('hidden');
    respondRating.classList.remove('hidden');
}