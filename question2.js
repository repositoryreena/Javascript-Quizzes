function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function checkTitleCase(string) {
    var newstr = "";
    var string2 = string.split(" ");
    for (var i = 0; i < string2.length; i++) {
        newstr += capitalizeFirstLetter(string2[i]);
        newstr += " ";
    }
    return newstr.trim();
}
console.log(checkTitleCase("hello world"));
