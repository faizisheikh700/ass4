//! ----------------------------------------Ch # 17 - 20--------------------------
//? Q 1

// var multiArray = [];
// multiArray.push([1, 2, 3]);
// multiArray.push(['a', 'b', 'c']);

// document.write(multiArray)

//? Q 2

// var matrix = [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '9']
//   ];

//   for (var i = 0; i<matrix.length; i++){
//       document.write(matrix[i], "<br>")  

//   }

//? Q 3

// for (var i = 1; i <= 10; i++) {
//     document.write(i, '<br>');
// }



//? Q 4

// var userInput = +prompt('Enter value');
// var user = +prompt('AS You Desire');

// document.write("Multiplication Table Of " + userInput + "Length " + user+ '<br>');

// for (var i=1; i<=user; i++) {
// document.write(userInput+" x "+i+" = "+userInput*i, "<br>");
// };


//? Q 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i],'<br>');
// }

//? Q 6

//! Counting
// var count = "<h3>Counting: </h3>";
// document.write(count)
// for (var i = 1; i <= 15; i++) {
//     document.write(i+",");
// }

//! Reverse Counting
// var revCount = "<h3>Reverse Counting: </h3>";
//     document.write( revCount);
// for (var i = 10; i >= 1; i--){
//     document.write(i +",");
// }

//! Even Numbers
// var even = "<h3>Even: </h3>";
// document.write(even)
//     for (var i = 0; i <= 20; i += 2) {
//         document.write(i+",");
// }

//! Odd Numbers
// var odd = "<h3>Odd: </h3>";
// document.write(odd)
// for (var i = 1; i <= 19; i += 2) {
// document.write(i+",");
// }

//! Series
// var series = "<h3>Series: </h3>";
// document.write(series)
// for (var i = 2; i <= 20; i+=2){
//     document.write(i+"k,");
// }

//? Q 7


// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var elementToFind = items; 
// var usInd = items.indexOf(elementToFind);
// function searchItem() {
//     var userInput = prompt("Welcome to DHAMAKA BAKERY. what do you want to order sir/ma'am:");
//     var found = false;
//     document.write(userInput+ "<br>")
//     userInput = userInput.toLowerCase();

//     for (var i = 0; i < items.length; i++) {
//         if (items[i].toLowerCase() === userInput) {
//             found = true;
//             break;
//         }
//     }

//     if (found) {
//   document.write("Cookie is available at the index " + usInd  + " " +"in our bakery" );
//     } else {
//         document.write("We are sorry. Pastry is not available in our bakery");
//     }
// }
// searchItem();


//? Q 8


// var A = [24, 53, 78, 91, 12];
// document.write('Array Items: '+ A+ "<br>")
// var max_value = A[0]; 
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > max_value) {
//         max_value = A[i];
//     }
// }
// document.write("The largest number in the array is:", max_value);


//? Q 9


// var A = [24, 53, 78, 91, 12];
// document.write('Array Items: '+ A+ "<br>")
// var min_value = A[0]; 
// for (var i = 1; i < A.length; i++) {
    //     if (A[i] < min_value) {
        //         min_value = A[i];
//     }
// }
// document.write("The Smallest number in the array is:", min_value);

//? Q 10


// for (let i = 1; i <= 100; i++) {
//        if (i % 5 === 0) {
//         document.write(i, '<br>'); 
//     }
// }

// for (var i = 5; i <= 100; i += 5) {
//         document.write(i+"<br>");
// }


//! --------------------Ch # 21 - 25-------------------------------------

//? Q 1

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

//? Q 2

// var favPhoneMod = prompt("What is your favorite mobile phone model?");
// document.write('My favorit mobile is:'+ favPhoneMod +'<br>')
// var inputLength = favPhoneMod.length;
// document.write("The length of your input is: " + inputLength);

//? Q 3


// var word = "Pakistani";

// var indexOfN = word.indexOf("n");

// document.write("The index of 'n' in the word 'Pakistani' is: " + indexOfN);

//? Q 4


// var world = "Hello World";

// var indexOfW = world.lastIndexOf("l");

// document.write("The last index of 'l' is: " + indexOfW);


//? Q 5

// var word = "Pakistani";
// document.write("String; "+ word+ "<br>")
// var charAtInd = word.charAt(3);

// document.write("Character at 3rd index : " + charAtInd);


//? Q 6

// var firstName = prompt("Enter your first name:");

// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Welcome!");


//? Q 7

// var City = "Hyderabad";

// var replaceWord = City.replace("Hyder", "Islam");

// document.write("City: " + City + "<br>");
// document.write("After Replacement: " + replaceWord);


//? Q 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMsg = message.replace(/and/g, "&");
// document.write("<h2>Message :</h2> " + message + "<br>");
// document.write("<h2>After Replacement :</h2> " + replaceMsg);

//? Q 9

// var strNumber = "472";

// var actualNumber = +(strNumber);

// document.write("Value : " + strNumber + "<br>");
// document.write("Type : " + typeof strNumber + "<br>");

// document.write("Value : " + actualNumber + "<br>");
// document.write("Type : " + typeof actualNumber);

//? Q 10

// var userInput = prompt("Enter some text:");
// document.write('User input: '+ userInput+ '<br>')
// var uppercaseInput = userInput.toUpperCase();

// document.write("Upper case: " + uppercaseInput);

//? Q 11

// var userInp = prompt("Enter some text:");
// document.write("User input: " + userInp+ '<br>');

// var words = userInp.split(" ");

// for (let i = 0; i < words.length; i++) {
//     var word = words[i];
//     words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }
// var titleCaseInput = words.join(" ");
// document.write("Title case: " + titleCaseInput);

//? Q 12

// var num = 35.36;

// var numAsString = num.toString();

// var numWithoutDot = numAsString.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("String: " + numWithoutDot);


//? Q 13

// var username = prompt("Enter your username:");

// function contSpeSymbols(username) {
//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return true;
//         }
//     }
//     return false;
// }
// if (contSpeSymbols(username)) {
//     alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//     alert("Username is valid: " + username);
// }

//? Q 14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search for:");

// function searchItem(array, query) {
//     query = query.toLowerCase(); 
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() === query) {
//             return true;
//         }
//     }
//     return false;
// }
// var itemFound = searchItem(items, userInput);

// if (itemFound) {
//     alert("Yes, '" + userInput + "' is available in the list.");
// } else {
//     alert("'" + userInput + "' is not found in the list.");
// }


//? Q 15
// var password = prompt("Enter a password:");
// function isPasswordValid(password) {
//     if (password.length < 6) {
//         return false;
//     }
//     var hasAlphabet = false;
//     var hasNumber = false;
//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
//             hasAlphabet = true; 
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true; 
//         }
//     }
//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         return false;
//     }

//     return hasAlphabet && hasNumber;
// }
// var isValid = isPasswordValid(password);
// if (isValid) {
//     alert("Password is valid.");
// } else {
//     alert("Please enter a valid password that meets the requirements.");
// }

//? Q 16

// var university = "U n i v e r s i t y o f K a r a c h i";

// var universityArray = university.split(" ");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write("Element " + i + ": " + universityArray[i] + "<br>");
// }


//? Q 17

// var userInput = prompt("Enter a string:");
// document.write("User Input: "+ userInput+ "<br>")
// if (userInput !== null && userInput !== "") {
//     var lastCharacter = userInput.charAt(userInput.length - 1);

//     document.write("Last character is input: " + lastCharacter);
// } else {
//     alert("You did not enter any input.");
// }


//? Q 18
// var inputString = "The quick brown fox jumps over the lazy dog";
// inputString = inputString.toLowerCase();
// var wordToSearch = "the";
// var count = 0;
// var words = inputString.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }
// alert("Word 'the' appears " + count + " times in the string.");
