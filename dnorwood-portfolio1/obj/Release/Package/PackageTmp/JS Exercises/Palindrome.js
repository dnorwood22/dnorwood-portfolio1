function palindrome(str) {
    str = str.toLowerCase();
    if (str.split("").reverse().join("") === str) {
        document.getElementById("answer").innerHTML = str + " is a Palindrome.";
    } else {
        document.getElementById("answer").innerHTML = str + " is NOT a Palindrome.";
    }
}