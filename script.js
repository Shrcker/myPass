const generateButton = document.getElementById("generate"); // Grabs the input button by html id.

const numbers = "1234567890";
const letters = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const generatePassword = () => {
  let pool = ""; // Empty string acting as a template for the random password.
  let finalPass = [];
  // Function that runs when generate button is pressed
  const passGenLoop = (limit, array) => {
    for (let i = 0; i < limit; i++) {
      array.push(getRandom(pool.split(""))); // Generation function takes the final pool string and turns it into a reference array for the final password.
    }
  };
  const getRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const characterLimit = window.prompt("How long should our Password be? (8-128 Limit)");
  if (characterLimit >= 8 && characterLimit <= 128) {
    // Asks for character length, then checks if it fits within limit.
    const answerInt = window.confirm("Do you want this password to include numbers?"); // Will parse through ever possible data type, plugging them into the pool string before generating the password.
    if (answerInt) {
      pool += numbers;
    }
    const answerLetters = window.confirm("Do you want this password to include lower case letters?");
    if (answerLetters) {
      pool += letters;
    }
    const answerCase = window.confirm("Do you want this password to include upper case letters?");
    if (answerCase) {
      pool += upperCase;
    }
    const answerSpecial = window.confirm("Do you want this password to include special characters?");
    if (answerSpecial) {
      pool += special;
    }
    if (!answerSpecial && !answerCase && !answerLetters && !answerInt) {
      // Aborts the function if user doesn't click "OK" to any data type.
      window.alert("Please select a data type");
      return;
    }
    passGenLoop(characterLimit, finalPass); // Generates full password with all selected data types added.
    return finalPass.join("");
  }
  window.alert("Please enter the password's length");
  return;
};

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); // Prevents JavaScript from running default click event
  const passwordText = document.querySelector("#password"); //Grabs <textarea>
  const password = generatePassword();

  passwordText.innerText = password; // Final password is a function.
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);
