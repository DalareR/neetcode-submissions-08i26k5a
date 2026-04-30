class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => str.length + "#" + str).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf("#", i);      // find '#' from position i
            const wordLength = Number(str.slice(i, j));  // length is between i and j
            const startIndex = j + 1;
            const endIndex = wordLength + startIndex;
            const word = str.slice(startIndex, endIndex); // start after '#', end at ???
            
            result.push(word);
            
            i = endIndex;                            // move i to the start of next encoded word
        }

        return result;
    }
}
