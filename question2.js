function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function titleCase(string){
    let newstr=""
    string=string.split(" ")
    for (let i=0;i<string.length;i++){
        newstr+=capitalizeFirstLetter(string[i])
        newstr+=" "
    }
    return newstr.trim()
}

console.log(titleCase("hello world"))