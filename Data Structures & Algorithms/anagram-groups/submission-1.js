class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    const hashStr = new Map();
    
    for(const str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if(hashStr.has(sortedStr)) {
            hashStr.get(sortedStr).push(str)
        } else {
            hashStr.set(sortedStr, [str]);
        }
    }
    
    return [...hashStr.values()]
    }
}
