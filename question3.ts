function checkPalindrome(string: string){
    let reversedstring: string = string.split("").reverse().join("")
    return string===reversedstring
}

console.log(checkPalindrome("dad"))
console.log(checkPalindrome("Git"))