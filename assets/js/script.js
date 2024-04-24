//Wait for the DOM  to finish loading befor starting the game
// Getthe button elements and add the event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            }else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }

        })
    }
    runGame("addition")
})
/**
 * The main game Loop, called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }else {
        alert(`Unknown gametype: ${gameType}`);
        throw `Unknown gametype: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {

}
/**
 * Gets the operands(num1 and num2) and the operator(+,-,*,/)
 * directly from the DOM and returns the correct answer.
 */
function calculateCorrecrAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operand2 = parseInt(document.getElementById("operand2").textContent);
    let operator = document.getElementById("operand").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}! Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayDivideQuestion() {

}

function displayMultiplyQuestion() {

}