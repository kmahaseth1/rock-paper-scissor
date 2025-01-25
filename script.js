// Function to output the Computer's choice

function getComputerChoice () {

    let raw_choice = Math.random()
    let final_choice

    if(raw_choice <= 0.33) {
        final_choice = "Rock";
    } else if (raw_choice <= 0.67) {
        final_choice = "Paper"
    } else {
        final_choice = "Scissors"
    }

    return final_choice
}