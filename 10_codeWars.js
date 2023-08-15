let st = [19, 5, 42, 2, 77];

// function sumTwoSmallestNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] > numbers[j]) {
//                 let tmp = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = tmp;
//             }
//         }
//     }
//     return numbers[0] + numbers[1];
// }

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    });
    return numbers[0] * numbers[1];
}

console.log(sumTwoSmallestNumbers(st));
