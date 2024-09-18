function palindrome(string){
    let palindrome=false
    let reversedstring = string.split("").reverse().join("")
    if (string===reversedstring){
        palindrome = true
    }
    return palindrome
}

console.log(palindrome("dad"))
console.log(palindrome("Git"))