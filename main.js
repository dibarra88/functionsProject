// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
    // Your answer here
    if (num1 >= num2) {
        return num1;
    }
    if (num2 >= num1) {
        return num2;
    }
}
console.log(max(2,3));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
    // Your answer here
    if ((num1 > num2) && (num1 > num3)) {
        return num1;
    }
    else if ((num2 > num1) && (num2 > num3)) {
        return num2;
    }
    else {
        return num3
    }
}
console.log(maxOfThree(10,3,14));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
    // Your answer here
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if (char.length == 1) {
        for (var i = 0; i < vowels.length; i += 1) {
            if (char.toLowerCase() === vowels[i])
                return true;
        }
    }
    return false;
}
console.log(isVowel('e'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 5));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(avg(2, 4, 6));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(param1) {
    return param1.length;
}
console.log(getLength('testing'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2) {
    if (num2 > num1)
        return true;
    else
        return false;
}
console.log(greaterThan(5, 1));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Diana"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(maleNoun, wackyState, verb1, noun1, properName, verb2, noun2, verb3, noun3, partOfTheBody) {
    let phrase = "A " + maleNoun + " in " + wackyState + " was arrested this morning after he " 
    + verb1 + " in front of a " + noun1 + ". " + properName + ", had a history of " + verb2 +
     " but no one-not even his " + noun2 + "-ever imagined he'd " + verb3 + " with a " + noun3 + 
     " stuck in his " + partOfTheBody + ".";

     return phrase;
}
console.log(madlib('male','Kenturky', 'danced', 'school', 'Liam', 'laughing', 'dog', 'eating', 'pencil','liver'));