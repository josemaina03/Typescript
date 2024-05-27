/* Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string*/

function capitalizeWords(input: string): string {
    return input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("hi")); 
console.log(capitalizeWords("i love programming")); 
 

