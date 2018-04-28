/*

Given the string, check if it is a palindrome.

Example

    For inputString = "aabaa", the output should be
    checkPalindrome(inputString) = true;
    For inputString = "abac", the output should be
    checkPalindrome(inputString) = false;
    For inputString = "a", the output should be
    checkPalindrome(inputString) = true.

*/

// Solution

function checkPalindrome(inputString) {
    if (inputString.length%2===0){
        if(inputString.slice(0,inputString.length/2) === inputString.slice(inputString.length/2,inputString.length).split("").reverse().join("")){
            return true;
        }
            else{
                return false;
            }
    }
    else {
        if (inputString.length===1){
            return true;
        }
        else if(inputString.slice(0,(inputString.length+1)/2-1)===inputString.slice((inputString.length+1)/2,inputString.length).split("").reverse().join("")){
            return true;
        }
        else{
            return false;
        }
    }
}