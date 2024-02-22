// Assignment Code
var generateBtn = document.querySelector("#generate"); // Grabs the input button by html id.
var characterLimit = []; 

function generatePassword() { // Function that runs when generate button is pressed
  var length = prompt("How long should our Password be? (8-128 Limit)"); 
  if (length >= 8 && length <= 129) { // Asks for character length, then checks if it fits within limit.
    characterLimit.length = length;
    return(characterLimit.length);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();// Function is undefined, missing variable
  var passwordText = document.querySelector("#password"); //Grabs <textarea>

  passwordText.value = password; // Final password is a function.
  console.log("Password Generated"); // Debug message to see that the button has sent a signal

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
