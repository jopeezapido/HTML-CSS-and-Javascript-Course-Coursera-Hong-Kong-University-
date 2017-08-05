//var message;
var counter = "";
//var prompty;

function ans(){
	var prompty = prompt("Im thinking of a number between 1-100. What is the number?");	

	if (prompty > 69){
		alert('You number is too high! Try lowering the number.');
		counter += 1
	} else if (prompty < 69){
		alert('Your number is too low. Try raising the number a little bit.');
		counter += 1
	} else if (prompty >= 100 && prompty <= 0) {
		alert("Your number is out of range!. Stay within range kiddo.")
	} else if (prompty === NaN && prompty === null) {
		alert('Enter a valid number!');
	} else {
		alert ('You got it! You answered it correctly for ' + counter + ' tries'.)
	}
}

//ans();