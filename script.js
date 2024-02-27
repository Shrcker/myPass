// Assignment Code
var generateBtn = document.querySelector("#generate"); // Grabs the input button by html id.

const numbers = '1234567890';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

var pool = ''; // Empty string acting as a template for the random password.

const finalPass = [];

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function passGenLoop (limit) {
  for (var i = 0; i < limit; i++) {
    finalPass.push(get_random(pool.split('')));
  }
}

function generatePassword() { // Function that runs when generate button is pressed

  var characterLimit = window.prompt("How long should our Password be? (8-128 Limit)"); 
  if (characterLimit >= 8 && characterLimit <= 128) { // Asks for character length, then checks if it fits within limit.
    var answerInt = window.confirm('Do you want this password to include numbers?');
    if (answerInt) {
      pool += numbers;
    }
    var answerLetters = window.confirm('Do you want this password to include lower case letters?');
    if (answerLetters) {
      pool += letters;
    }
    var answerCase = window.confirm('Do you want this password to include upper case letters?');
    if (answerCase) {
      pool += upperCase;
    }
    var answerSpecial = window.confirm('Do you want this password to include special characters?');
    if (answerSpecial) {
      pool += special;
    } if (!answerSpecial && !answerCase && !answerLetters && !answerInt) {
      window.alert("Please select a data type");
      return;
    }
    passGenLoop(characterLimit);
    return finalPass.join('');
  } 
}

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); // Prevents JavaScript from running default click event
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //Grabs <textarea>

  passwordText.value = password; // Final password is a function.
  console.log("Password Generated"); // Debug message to see that the button has sent a signal

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
