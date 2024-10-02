//function
function sum(arr, num) {
    var ivalue = 0;
    var jvalue = 0;
    arr.forEach(function (item) {
        arr.forEach(function (item2) {
            if (item + item2 === num) {
                ivalue = item;
                jvalue = item2;
            }
        });
    });
    return [ivalue, jvalue];
}
console.log(sum([1, 2, 3, 4, 5], 6));
