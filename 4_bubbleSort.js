let arr = [123, 34, 56, 5, 78, 2, 8, 0];

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j + 1] < array[j]) {
//                 let tmp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = tmp;
//             }
//         }
//     }

//     return array;
// }

function bubbleSort(arry) {
    for (let i = 0; i < arry.length; i++) {
        for (let j = 0; j < arry.length; j++) {
            if (arry[j + 1] < arry[j]) {
                const tmp = arry[j];
                arry[j] = arry[j + 1];
                arry[j + 1] = tmp;
            }
        }
    }
    return arry;
}

console.log(bubbleSort(arr));
