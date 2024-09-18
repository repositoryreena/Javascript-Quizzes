function sort(arr){

    let newarr=[]

for (let i=0;i<arr.length;i++){

    
    let min=Math.min(...arr)
    for (let i=1;i<arr.length;i++){
        if (arr[i]<min) min=arr[i]
    }
    newarr.push(min)
    arr.splice(arr.indexOf(min), 1, Infinity)
    

}

return newarr
}

console.log(sort([12, 6, 23, 1, 89, 1]))