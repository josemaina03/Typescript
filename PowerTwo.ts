//Write a program that takes an integer as input and returns true if the input is a power of two

function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8)); 
console.log(isPowerOfTwo(6)); 
