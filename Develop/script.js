//Possible characters for password
//var charLength = 8;
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var specCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "(", ")", "{", "}", "/",];
var numArr = ["0","1","2","3","4","5","6","7","8","9",];
//var passArr = [lowerCaseArr + upperCaseArr + specCharArr + numArr];

// id=generate>>#generate 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var goodPrompts = getPrompts();  // boolean
  var passwordText = document.querySelector("#password");

  if (goodPrompts){
  var genPassword = generatePassword();
    passwordText.value = genPassword;
  }else{
    passwordText.value = "";
  }
}

//I need to prompt the user which characters they might want in their password

function getPrompts() {
  passArr = [];
 charLength = parseInt(prompt("How many characters do you want in your password? 8-128 allowed"));
 if (isNaN(charLength) || charLength < 8 || charLength > 128){ // this defines what the length parameters are not, this needs to answer false
    alert("Please enter a number between 8 and 128 for your character length."); // what length (8-128)
    return false;
    
// series of prompts needed
 }
    if (confirm("Would you like lowercase letters in your password?")){  //confirm gives me a text box pop up 
          passArr = passArr.concat(lowerCaseArr); // would you like lowerCase
    }

    if (confirm("Would you like uppercase letters in your password?")){
          passArr = passArr.concat(upperCaseArr); // would you like upperCase
    }

    if (confirm("Would you like special characters in your password?")){
          passArr = passArr.concat(specCharArr); // would you like specChar
    }

    if (confirm("Would you like numbers in your password?")){
          passArr = passArr.concat(numArr); // would you like numChar
    }
      return true; //if all criteria met = true
 }

 //generate password
function generatePassword() {
 var password = "";
 for(var i = 0; i <charLength; i++){ //for loop using i
  var ranValue = Math.floor(Math.random() * passArr.length);  //this is where I'm going to use the math.random and floor thingies
  password = password + passArr[ranValue];
 }
 return password;  //display password to page
}

//THINGS I WILL USE TO MAKE THIS WORK:
//arrays- num 0-9?  letters a-z, A-Z, spec char
//math.random and floor
//var index = Math.floor(Math.random() * options.length);<---------  Don't forget to use this
//  window.alert();
//confirm

