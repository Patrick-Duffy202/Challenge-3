// Assignment code here
function generatePassword() {

  let passwordLength = 0,
    characterTypeSelected = false,
    charsetCombined = "",
    
    charsetLowerCase = "abcdefghijklmnopqrstuvwxyz",
    charsetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    charsetNumeric = "0123456789",
    charsetSymbols = "~!@#$%^&*",

    includeLowerCase = false,
    includeUpperCase = false,
    includeNumeric = false,
    includeSymbols = false;

  while (true) {
    passwordLength = prompt("Please enter password length (8 to 128 characters).", "8");
 
    if (passwordLength > 7 && passwordLength < 129) {
      break;
    } else {
      passwordLength = prompt("Invalid entry!  Please enter password length (8 to 128 characters)", "8");
      break;
    }
  }

  while (!characterTypeSelected) {
    if (confirm("Click OK to include Lower Case") == true) {
      includeLowerCase = true;
      characterTypeSelected = true;
    }
    if (confirm("Click OK to include Upper Case") == true) {
      includeUpperCase = true;
      characterTypeSelected = true;
    }
    if (confirm("Click OK to include Numeric") == true) {
      includeNumeric = true;
      characterTypeSelected = true;
    }
    if (confirm("Click OK to include Symbols") == true) {
      includeSymbols = true;
      characterTypeSelected = true;
    }
    
    if (!characterTypeSelected) {
      window.alert("You must select at least one character type:  Lower Case, Upper Case, Numeric or symbols");
    }
  }
 
  includeLowerCase ? charsetCombined += charsetLowerCase : charsetCombined;
  includeUpperCase ? charsetCombined += charsetUpperCase : charsetCombined;
  includeNumeric ? charsetCombined += charsetNumeric : charsetCombined;
  includeSymbols ? charsetCombined += charsetSymbols : charsetCombined;

  password = "";

  for (var i = 0, n = charsetCombined.length; i < passwordLength; ++i) {
    password += charsetCombined.charAt(Math.floor(Math.random() * n));
  }
      
  return password;
}
  



 
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


