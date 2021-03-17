// Step 1:
//  Create a prompt window (use confirm()). Show the message inside the window ‘Do you want to play a game?’.
//  In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown (use alert).
// Step 2:
//  If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose an integer number in
// range [0; 8] (including 0 and 8) and ask user to enter a number of pocket on which the ball could
// land (use prompt()).
//  User has 3 attempts to guess a number.
//  If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize
// for current numbers range), 2-nd attempt – 50$, 3-rd attempt – 25$.

//  If user did not guess a number show the message ‘Thank you for your participation. Your prize
// is: ... $’ (Use alert) and ask if he wants to play again (use confirm). Step 3:
//  If user did guess - Show the message ‘Congratulation, you won! Your prize is: ... $. Do you want to continue?’.
//  If user does not want to continue – show the message ‘Thank you for your participation. Your prize is: ... $’ (Use alert) and ask if he wants to play again (use confirm).
//  If user does want to continue, make number range bigger at 4 as the previous one (for example [0; 8] -> [0; 12]), and two times bigger maximum prize (for example on 1-st attempt prize will be 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). Prize must be added to the previous one and number of attempts should be set to 3 (user should have 3 attempts to guess a number for each numbers range)
//  Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt. See Figure 1:
//  All these stuffs should be repeated until user lose or decide to quit

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function regretConfirm() {
    let regret = confirm('Do you want to play a game?');
    if (regret === true) {
        number = parseInt(prompt('Скажи мне номер?)))'))
        return number
    } else {
        alert('You did not become a billionaire, but can.')
    }
}

function userNumber() {
    number = parseInt(prompt('Скажи мне номер?)))'))
    return number
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

function playGame() {
    for (let index = 0; index < 2; index++) {
    
        if (number===randomNumberValue) {
            winBank()
            alert('da'+attempts+' '+bank)
            break
        } else {
            alert('no')
            userNumber()
            attempts--
        }
        
    }
}
let number;
let maxRandomNumber = 8;
let randomNumberValue = randomNumber(0,maxRandomNumber);
let attempts = 3;
let maxPrize = 100;
let mediumPrize = 50;
let minPrize = 25;
let bank = 0;


alert(randomNumberValue);
regretConfirm()
playGame()

// for (let index = 0; index < 2; index++) {
    
//     if (number===randomNumberValue) {
//         winBank()
//         alert('da'+attempts+' '+bank)
//     } else {
//         alert('no')
//         userNumber()
//         attempts--
//     }
    
// }




