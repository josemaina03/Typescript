//Write a program that counts the number of vowels in a sentence

function countVowels(input: string): number {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World"));

