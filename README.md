# 03 JavaScript: Password Generator Homework

We were tasked with creating an application that would use Javascript to generate a random password.

## My Process

```
I began with the creation of several variables.  There is a seperate variable for each of the different character type choices the user will have when genrating a password.

ex. let includeLower
    let includeUpper
    let includeSpecial 
    let includeNumbers
    
    The application depends first on a series of user-input prompts and confirms.  The choices users make here determine how the passowrd is generated. Behind the scenes, the prompts/confirms rely on the character type variables described before, and use a series of 'if' statements tied to booleans.
    
ex. if (includeLower === true) {
  // generator(lowerChar + upperChar)
  possibleCharChoices += lowerChar
  console.log(possibleCharChoices)
  }
  
The Generate Button has an event listener that calls the 'writePassword' function.  This, in turn, calls the 'generator' function:

function generator(characterArray) {
  let password = ""
  for (let i = 0; i < promptCount; i++) {
    let randomIndex = Math.floor(Math.random()*characterArray.length)
    password = characterArray[randomIndex]
    passwordText.value += password;

  }
}

```
