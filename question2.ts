function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function checkTitleCase(string: string){
    let newstr: string=""
    let string2: Array<string>=string.split(" ")
    for (let i=0;i<string2.length;i++){
        newstr+=capitalizeFirstLetter(string2[i])
        newstr+=" "
    }
    return newstr.trim()
}

console.log(checkTitleCase("hello world"))