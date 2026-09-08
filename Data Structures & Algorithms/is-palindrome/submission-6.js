class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      const lowerCase = s.toLowerCase();
      const onlyLetters = lowerCase.replace(/[^a-zA-Z0-9]/g, "");
      const reversed = onlyLetters.split("").reverse().join("");
      
      return onlyLetters === reversed;
    }
};