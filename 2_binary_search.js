const arry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
arry.filter();
// let count = 0;

// function birarySrearch(arry, item) {
//     let start = 0;
//     let end = arry.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while (found === false && start <= end) {
//         count += 1;
//         middle = Math.floor((start + end) / 2);
//         if (arry[middle] === item) {
//             found = true;
//             position = middle;
//             return position;
//         }
//         if (item < arry[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return position;
// }

// console.log(birarySrearch(arr, 8));
// console.log(count);

// function recursiveBinarySearch(array, item, start, end) {
//     let middle = Math.floor((start + end) / 2);
//     if (item === array[middle]) {
//         return middle;
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, 0, middle - 1);
//     } else {
//         return recursiveBinarySearch(array, item, middle + 1, end);
//     }
// }
let count = 0;
function binarySearch(arr, itm) {
    let start = 0;
    let end = arr.length;
    let position = -1;
    for (let i = 0; i < arr.length; i++) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (itm === arr[middle]) {
            position = itm;
            return position;
        }
        if (itm < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(arry, 3));
console.log(count);
