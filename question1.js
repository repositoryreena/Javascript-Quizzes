function sum(arr,num){
    let ivalue=0
    let jvalue=0
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length;j++){
            if (arr[i]+arr[j]===num){
                ivalue=i
                jvalue=j
                break
            }
        }
    }
    return [ivalue,jvalue]
}

console.log(sum([1,2,3,4,5],6))