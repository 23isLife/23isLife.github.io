function breakFunk() {
    alert('You did not become a billionaire, but can.')

}

function winBank() {
    switch (attempts) {
        case 3: 
            bank+=maxPrize
            break;
        case 2:
            bank+=mediumPrize
            break;
        case 1:
            bank+=minPrize
            break;
    }
}

function possiblePrize() {
    switch (attempts) {
        case 3: 
            possiblePrizeWin=maxPrize
            break;
        case 2:
            possiblePrizeWin=mediumPrize
            break;
        case 1:
            possiblePrizeWin=minPrize
            break;
    }
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function regretConfirm() {
    if(again===false){
        regret = confirm('Do you want to play a game?');
    }
    if (regret === true) {
        randomNumberValue = randomNumber(0,maxRandomNumber)
        possiblePrize()
        number = parseInt(prompt('Choose a roulette pocket number from 0 to '+maxRandomNumber
        +'\nAttemps left: '+attempts+'\nTotal prize: '+bank+'$\nPossible prize on current attempt:'
        +possiblePrizeWin+'$'))
        playGame()
    } else {
        breakFunk() 
    }
}

function userNumber() {
    possiblePrize()
    if (regret===true) {
        number = parseInt(prompt('Choose a roulette pocket number from 0 to '+maxRandomNumber
        +'\nAttemps left: '+attempts+'\nTotal prize: '+bank+'$\nPossible prize on current attempt:'
        +possiblePrizeWin+'$'))
    } else {
        return 0
    }
    
}

function playGame() {
    for (let index = 0; index < 3; index++) {
        if (number===randomNumberValue) {
            winBank()
            again = confirm('Congratulation, you won!\nYour prize is: '+bank+'$.\nDo you want to continue?')
            if (again===true) {
                maxRandomNumber += 4;
                maxPrize *= 2;
                mediumPrize *= 2;
                minPrize *= 2;
                attempts = 3;
                regretConfirm()
            } else {
                alert('Thank you for your participation. Your prizeis: '+bank+'$');
                maxRandomNumber = 8;
                maxPrize = 100;
                mediumPrize = 50;
                minPrize = 25;
                attempts = 3;
                regretConfirm()
            }
            break
        } else {
            alert('Wrong number, try again')
            attempts--
            if (attempts===0){
                alert('Thank you for your participation. Your prizeis: '+bank+'$');
                attempts = 3;
                regretConfirm()
            }
            userNumber()
            
        }
        
    }
}

let again = false;
let regret;
let gameStatus = 1;
let number;
let maxRandomNumber = 8;
let randomNumberValue = randomNumber(0,maxRandomNumber);
let attempts = 3;
let maxPrize = 100;
let mediumPrize = 50;
let minPrize = 25;
let bank = 0;
let possiblePrizeWin = 0;


regretConfirm()




