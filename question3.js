function checkPalindrome(string){
    
    let reversedstring = string.split("").reverse().join("")
    return string===reversedstring
}

console.log(checkPalindrome("dad"))
console.log(checkPalindrome("Git"))