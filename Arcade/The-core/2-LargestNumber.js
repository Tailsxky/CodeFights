/*

Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.

*/

// Solution

function largestNumber(n) {
    return Math.pow(10,n) - 1;
}