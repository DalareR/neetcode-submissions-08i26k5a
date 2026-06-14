class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        const openClose = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        };

        for(const bracket of s) {
                if(bracket === "{" || bracket === "[" || bracket === "(") {
                    arr.push(bracket);
                } else {
                    if(arr.length === 0) return false;
                    if(bracket !== openClose[arr.pop()]) return false;
                }
        }

        return arr.length === 0
}
}
