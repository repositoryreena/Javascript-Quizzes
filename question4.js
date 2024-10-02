function selectionSort(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        var min = Math.min.apply(Math, arr);
        for (var i_1 = 1; i_1 < arr.length; i_1++) {
            if (arr[i_1] < min)
                min = arr[i_1];
        }
        newarr.push(min);
        arr.splice(arr.indexOf(min), 1, Infinity);
    }
    return newarr;
}
function bubbleSort(arr) {
    var temp = 0;
    for (var j = 0; j < 6; j++) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(selectionSort([12, 6, 23, 1, 89, 1]));
console.log(bubbleSort([12, 6, 23, 1, 89, 1]));
