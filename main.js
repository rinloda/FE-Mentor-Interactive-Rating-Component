const button = document.querySelector('input');


const submitButton = document.querySelector('#submit-rating');
const respondRating = document.getElementById('response-rating');
submitButton.addEventListener('click', generateThankyou);

function generateThankyou(){
    submitButton.classList.add('hidden');
    respondRating.classList.remove('hidden');
}