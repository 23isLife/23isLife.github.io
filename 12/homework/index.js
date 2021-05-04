/* START TASK 1: Your code goes here */

/* END TASK 1 */

/* START TASK 2: Your code goes here */
const form = document.getElementById('form');
const username = document.getElementById('username');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	
    if(usernameValue === '') {
		setErrorFor(username, 'Type number does not follow formad\n +380*********');
	} else if (!isNumber(usernameValue)) {
		setErrorFor(username, 'Type number does not follow formad\n +380*********');
	} else {
		setSuccessFor(username, 'Data was successfully sent');
	}

}

function isNumber(phoneNumber) {
	return /((\+38)?\(?\d{3}\)?(\d{9}))/g.test(phoneNumber);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('label');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
	const small = formControl.querySelector('label');
    formControl.className = 'form-control success';
    small.innerText = message;
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
let theThing = document.querySelector("#thing");
let container = document.querySelector("#task3container");
let scoreA = 0;
let scoreB = 0;
function deleteFunc() {
    document.getElementById("goal").innerHTML = '';
}

container.addEventListener("click", function(event) {
	let xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
	let yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
    let x = event.clientX;
    let y = event.clientY;

    if (x >= 655 && x <= 674 && y >= 774 && y <= 810) {
    scoreA++
    let coords = "Team A = " + scoreA;
    let coords2 = "Team B = " + scoreB;
    document.getElementById("goal").innerHTML = 'Team A score';
    document.getElementById("goal").style.color = "red";
    document.getElementById("score").innerHTML = coords;
    document.getElementById("score2").innerHTML = coords2;
    setTimeout(deleteFunc, 3000)
    } else if (x >= 1173 && x <= 1201 && y >= 774 && y <= 810) {
    scoreB++
    let coords = "Team A = " + scoreA;
    let coords2 = "Team B = " + scoreB;
    document.getElementById("goal").innerHTML = 'Team B score';
    document.getElementById("goal").style.color = "blue";
    document.getElementById("score").innerHTML = coords;
    document.getElementById("score2").innerHTML = coords2;
    setTimeout(deleteFunc, 3000)
    } else {
    let coords = "Team A = " + scoreA;
    let coords2 = "Team B = " + scoreB;
    document.getElementById("score").innerHTML = coords;
    document.getElementById("score2").innerHTML = coords2;
    }
    
	theThing.style.left = xPosition + "px";
	theThing.style.top = yPosition + "px";
	}
    
    
);
/* END TASK 3 */
