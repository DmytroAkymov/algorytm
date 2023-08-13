// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// const fibonachi = (n) => {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fibonachi(n - 1) + fibonachi(n - 2);
// };

// console.log(fibonachi(4));

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(3));

function fibonachi(n) {
    if ((n === 1) | (n === 2)) {
        return 1;
    }
    return fibonachi(n - 2) + fibonachi(n - 1);
}

console.log(fibonachi(8));
