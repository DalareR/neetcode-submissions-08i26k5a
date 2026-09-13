class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right) {
            while(left < right && !isValidLetter(s[left])) {
                left++;
            }

            while(right > left && !isValidLetter(s[right])) {
                right--;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++
            right--
        }

        function isValidLetter(l) {
            return /[a-zA-Z0-9]/.test(l)
        }

        return true;
    }

    
}
