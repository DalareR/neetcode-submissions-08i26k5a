class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const match = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        }

        for(const string of s) {
            if(string === "(" || string === "{" || string === "[") stack.push(string);
            else if(string !== match[stack.pop()]) return false;
        }

        return stack.length === 0;
    }
}
