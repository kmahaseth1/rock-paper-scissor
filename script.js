// Function to output the Computer's choice

function getComputerChoice () {

    let rawChoice = Math.random()
    let finalChoice

    if(rawChoice <= 0.33) {
        finalChoice = "Rock"
    } else if (rawChoice <= 0.67) {
        finalChoice = "Paper"
    } else {
        finalChoice = "Scissors"
    }

    return finalChoice
}

// Function to obtain player's choice
function getHumanChoice() {

    let valid_responses = ["rock", "paper", "scissors"]
    let response = prompt("What would you like to play?")

    if(!valid_responses.includes(response.toLowerCase())) {
        response = prompt(
            "Invalid move.\n" +
            "Please check your spelling and reenter your response."
            )
        getHumanChoice()
    } else {
        return response
    }
    
}

// Initialize variables to hold the scores
let machineScore = 0;
let playerScore = 0;

// Function to play a round of the game
function playRound(getComputerChoice, getHumanChoice) {

}
