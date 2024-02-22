// Assignment Code
var generateBtn = document.querySelector("#generate"); // Grabs the input button by html id.

var dictionary = { // Generated numbers use dictionary object and arrays
  int: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
}

function generatePassword() { // Function that runs when generate button is pressed
  var characterLimit = prompt("How long should our Password be? (8-128 Limit)"); 
  if (characterLimit >= 8 && characterLimit <= 128) { // Asks for character length, then checks if it fits within limit.
    for (var i = 0; i < characterLimit; i++) {
      console.log(dictionary.int[i]); // Throws error, but does iterate correctly in console.
    }
  } alert("ERROR"); // Debug error alert
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //Grabs <textarea>

  passwordText.value = password; // Final password is a function.
  console.log("Password Generated"); // Debug message to see that the button has sent a signal

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
