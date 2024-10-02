function selectionSort(arr: Array<number>) {
  let newarr: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    let min: number = Math.min(...arr);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    newarr.push(min);
    arr.splice(arr.indexOf(min), 1, Infinity);
  }
  return newarr;
}

function bubbleSort(arr: Array<number>) {
  let temp: number = 0;
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
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
