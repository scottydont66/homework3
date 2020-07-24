// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?{}|1234567890"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numberChar = "1234567890"
var specialChar = "!@#$%^&*()?{}|"
let upperSplit = upperChar.split("")
let lowerSplit = lowerChar.split("")
let specialSplit = specialChar.split("")
let numberSplit = numberChar.split("")
let allSplit = allChar.split("")
let promptCount = prompt("How many characters should your password be?")

// Write password to the #password input
function writePassword() {
generator(allChar)

}

function generator(characterArray) {
  // let userInput = 25
  let password = ""
  for (let i = 0; i < promptCount; i++) {
    let randomIndex = Math.floor(Math.random()*characterArray.length)
    password = characterArray[randomIndex]
    passwordText.value += password;

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




