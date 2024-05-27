//Write a program that takes an integer as input and returns an integer with reversed digit ordering

function reverseInteger(n: number): number {
    let sign = n < 0 ? -1 : 1;
    n = Math.abs(n);
    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return sign * reversed;
}

console.log(reverseInteger(500)); 
console.log(reverseInteger(-56)); 
console.log(reverseInteger(-90)); 
console.log(reverseInteger(91)); 