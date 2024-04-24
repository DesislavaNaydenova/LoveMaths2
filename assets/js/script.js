//Wait for the DOM  to finish loading befor starting the game
// Getthe button elements and add the event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            }else {
                let dataType = this.getAttribute("data-type");
                alert(`You clicked ${dataType}!`);
            }

        })
    }
})
/**
 * The main game Loop, called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {

    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

}

function checkAnswer() {

}

function calculateCorrecrAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayDivideQuestion() {

}

function displayMultiplyQuestion() {

}