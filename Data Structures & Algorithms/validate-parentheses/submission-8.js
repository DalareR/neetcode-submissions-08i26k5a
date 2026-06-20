class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const validBracket = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    const store = [];
    
    for(const bracket of s) {
        if(bracket === "{" || bracket === "[" || bracket === "(") store.push(bracket)
        else {
            if(validBracket[store.pop()] !== bracket) return false
            else continue
        }
    }
    
    return store.length === 0
}
}
