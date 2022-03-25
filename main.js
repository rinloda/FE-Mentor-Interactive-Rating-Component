// Reference: https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
function displayRadioValue() {
    var ele = document.getElementsByName('radioRating');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            document.getElementById("selectedRating").innerHTML
                = `You selected ${ele[i].value} out of 5`;
        }
        
    }
}
// Submit Button
const submitRating = document.querySelector('#submit-rating');
const submitButton = document.querySelector('#submit-button');
const respondRating = document.querySelector('#response-rating');
function generateThankyou(){
    submitRating.classList.add('hidden');
    respondRating.classList.remove('hidden');
}




submitButton.addEventListener('click', ()=> {
    displayRadioValue();
    generateThankyou();
} );

