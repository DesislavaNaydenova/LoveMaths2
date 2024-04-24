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

function runGame() {

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