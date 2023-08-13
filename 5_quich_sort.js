let arr = [
    123, 34, 56, 5, 45, 67, -456, 567, 5647, 647, 7887, -345, -12, 34, 435, 0,
];

function quichSort(array) {
    // Базовый случай: если длина массива меньше или равна 1, возвращаем массив (уже отсортированный).
    if (array.length <= 1) {
        return array;
    }

    // Выбираем индекс опорного элемента (пивота), в данном случае, середину массива.
    let pivotIndex = Math.floor(array.length / 2);
    // Получаем значение опорного элемента.
    let pivot = array[pivotIndex];

    // Создаем два новых массива: для элементов, меньших опорного, и для элементов, больших опорного.
    let less = [];
    let greater = [];

    // Проходим по всем элементам массива, кроме пивота.
    for (let i = 0; i < array.length; i++) {
        // Если текущий индекс i равен индексу пивота, пропускаем итерацию.
        if (i === pivotIndex) continue;
        // Если элемент меньше опорного, добавляем его в массив "less".
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            // Иначе (элемент больше или равен опорному), добавляем его в массив "greater".
            greater.push(array[i]);
        }
    }

    // Рекурсивно вызываем функцию quickSort для массива "less" и "greater",
    // чтобы отсортировать их и объединяем с опорным элементом в правильном порядке.
    // В итоге, получаем отсортированный массив.
    return [...quichSort(less), pivot, ...quichSort(greater)];
}

function quichSortTow(arry) {
    // Базовый случай: если массив содержит 0 или 1 элемент, он уже отсортирован.
    if (arry.length < 2) {
        return arry;
    } else {
        // Выбираем случайный элемент из массива в качестве опорного элемента (pivot).
        const pivot = arry[Math.floor(Math.random() * arry.length)];

        // Создаем два новых массива: 'less' (меньше опорного) содержит элементы, которые меньше опорного,
        // 'greater' (больше опорного) содержит элементы, которые больше опорного.
        const less = arry.filter((value) => value < pivot);
        const greater = arry.filter((value) => value > pivot);

        // Рекурсивно вызываем функцию quickSort на массивах 'less' и 'greater',
        // а затем объединяем их вместе с опорным элементом, чтобы получить отсортированный массив.
        return [...quichSortTow(less), pivot, ...quichSortTow(greater)];
    }
}

function quichSortThree(arry) {
    if (arry.length <= 1) {
        return arry;
    }

    let pivot = arry[Math.floor(Math.random() * arry.length)];

    let less = arry.filter((value) => value < pivot);
    let greater = arry.filter((value) => value > pivot);

    return [...quichSortThree(less), pivot, ...quichSortThree(greater)];
}

console.log(quichSortThree(arr));
