class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = [];
        
        for(const str of strs) {
            const strLen = str.length;
            
            result.push(`${strLen}#${str}`);
        }
        
        return result.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let initialIndex = 0;
        const result = [];
        
        while(initialIndex < str.length) {
            const hashIndex = str.indexOf('#', initialIndex);
            const wordLen = str.slice(initialIndex,hashIndex);
            const startIndex = hashIndex + 1;
            const endIndex = startIndex + Number(wordLen);
            const word = str.slice(startIndex, endIndex);

            result.push(word);
            
            initialIndex = endIndex;
        }
        
        return result;
    }
}
