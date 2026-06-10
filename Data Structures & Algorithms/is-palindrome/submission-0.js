class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sLowerCase = s.toLowerCase().split("").filter(letter => /[a-z0-9]/.test(letter)).join("");
        const sReversed = sLowerCase.split("").reverse().join("");

        return sLowerCase === sReversed;
    }
}