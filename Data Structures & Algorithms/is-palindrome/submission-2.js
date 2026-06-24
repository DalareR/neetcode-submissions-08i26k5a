class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sFiltered = s.toLowerCase().split("").filter(l => /[a-z0-9]/.test(l)).join("");
        const sFilteredReverse = sFiltered.split("").reverse().join("");

        return sFiltered === sFilteredReverse;
    }
}