const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Error! Try again");
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Its a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won';
        } else {
            return 'You WON!';
        };
    }

    if (userChoice === 'paper') {
        if (computerChoice === scissors) {
            return 'Computer won';
        } else {
            return "You WON!";
        };
    }

    if (userChoice === scissors) {
        if (computerChoice === rock) {
            return 'Computer won';
        } else {
            return 'You WON!';
        };
    }
}
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();



