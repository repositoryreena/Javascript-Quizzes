function titleCase(string){
    let newstr=""
    string=string.split(" ")
    for (let i=0;i<string.length;i++){
        newstr+=string[i][0].toUpperCase()
        newstr+=string[i].substring(1)
        newstr+=" "
    }
    return newstr
}

console.log(titleCase("hello world"))