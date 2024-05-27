//Write a program to generate the Fibonacci sequence up to 100

function fibonacci(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(fibonacci(i));
}
