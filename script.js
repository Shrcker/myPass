// Assignment Code
var generateBtn = document.querySelector("#generate"); // Grabs the input button by html id.

var dictionary = { // Generated numbers use dictionary object and arrays
  int: "1 2 3 4 5 6 7 8 9 0".split(' ')
}


function get_random (list) {
  return list[Math.floor((Math.random()*(list.length + 1)))]; // Generates a random number between 0 and 10.
}

function generatePassword() { // Function that runs when generate button is pressed
  var characterLimit = prompt("How long should our Password be? (8-128 Limit)"); 
  // var rand = Math.floor(((Math.random() + 1) * dictionary.int.length) / 5);
  if (characterLimit >= 8 && characterLimit <= 128) { // Asks for character length, then checks if it fits within limit.
    var finalPass = [];
    for (var i = 0; i < characterLimit; i++) {
      finalPass.push(get_random(dictionary.int)); // Runs random number function to randomly pull from the array.
    } return finalPass.join(''); // Numbers in generated array now display without commas or spaces.
  } alert("ERROR"); // Debug error alert
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
