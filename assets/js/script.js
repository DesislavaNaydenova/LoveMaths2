//Wait for the DOM  to finish loading befor starting the game
// Getthe button elements and add the event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }

        })
    }
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            checkAnswer();
        }
    })
    runGame("addition");
})
/**
 * The main game Loop, called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus;

    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }else if(gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    }else if(gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }else if(gameType === "division") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown gametype: ${gameType}`);
        throw `Unknown gametype: ${gameType}. Aborting!`;
    }

}
/**
 * Gets the users Guess and compres it to the first element 
 * in the array returned from the calculateCorrectAnswer function
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrecrAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        incrementScore();
    }else {
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands(num1 and num2) and the operator(+,-,*,/)
 * directly from the DOM and returns the correct answer.
 */
function calculateCorrecrAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").textContent);
    let operand2 = parseInt(document.getElementById("operand2").textContent);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else if(operator === "X"){
        return [operand1 * operand2, "multiply"];
    }else if(operator === "-"){
        return [operand1 - operand2, "subtract"];
    }else if(operator === "/"){
        return [operand1 / operand2, "division"];
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}! Aborting!`;
    }

}
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").textContent);
    document.getElementById("score").textContent = ++oldScore;

}
/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").textContent);
    document.getElementById("incorrect").textContent = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";

}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";

}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "X";
}