class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const output = [];
        
        for(const str of strs) {
            const strLen = str.length;
            output.push(`${strLen}#${str}`);
            
            // console.log(strLen)
        }
        
        return output.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let initialIndex = 0;
        
        while(initialIndex < str.length) {
            const indexOfHash = str.indexOf("#", initialIndex)
            const strLen = str.slice(initialIndex,indexOfHash);
            const startIndex = initialIndex + (strLen.length + 1);
            const endIndex = Number(strLen) + initialIndex + (strLen.length + 1);
            
            output.push(str.slice(startIndex, endIndex));
            
            initialIndex = endIndex
        }
        
        return output
    }
}