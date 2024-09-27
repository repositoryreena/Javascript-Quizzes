//function
function sum(arr,num){
    let ivalue=0
    let jvalue=0
    arr.forEach(item=>{
        arr.forEach(item2=>{
            if (item+item2===num){
                ivalue=item
                jvalue=item2
                
            }
        }
        )
    })
    
   
    return [ivalue,jvalue]
}

console.log(sum([1,2,3,4,5],6))