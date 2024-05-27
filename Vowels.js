//Write a program that counts the number of vowels in a sentence
function countVowels(input) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
