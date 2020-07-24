// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var possibleCharChoices = '';
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numberChar = "1234567890"
var specialChar = "!@#$%^&*()?{}|"

let promptCount = parseInt(prompt("How many characters should your password be?"))
let includeLower = confirm("Do you want your password to include lowercase letters?")
let includeUpper = confirm("Do you want your password to include uppercase letters?")
let includeSpecial = confirm("Do you want your password to include special characters?")
let includeNumbers = confirm("Do you want your password to include numbers?")

// Write password to the #password input
function writePassword() {
generator(possibleCharChoices)

}

// Allow character selection type
if (includeLower === true) {
  // generator(lowerChar + upperChar)
  possibleCharChoices += lowerChar
  console.log(possibleCharChoices)
}

if (includeUpper === true) {
  // generator(lowerChar + upperChar)
  possibleCharChoices += upperChar
  console.log(possibleCharChoices)
}

if (includeSpecial === true) {
  // generator(lowerChar + specialChar)
  possibleCharChoices += specialChar
  console.log(possibleCharChoices)
}

if (includeNumbers === true) {
  // generator(lowerChar + numberChar)
  possibleCharChoices += numberChar
  console.log(possibleCharChoices)
}


function generator(characterArray) {
  let password = ""
  for (let i = 0; i < promptCount; i++) {
    let randomIndex = Math.floor(Math.random()*characterArray.length)
    password = characterArray[randomIndex]
    passwordText.value += password;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

