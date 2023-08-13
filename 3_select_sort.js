let arr = [11345, 2, 5, 6, 334, 45, 56, -4, -234, 0, 324, 2134, 99, -23454];

count = 0;

function selectionSortTow(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // Находим минимальный элемент в оставшейся части массива
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        count += 1;
        // Обмен значениями между текущим элементом и минимальным элементом
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSortTow(arr));
console.log(count);
