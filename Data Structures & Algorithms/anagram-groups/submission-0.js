class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagram = new Map();

        for(const str of strs) {
            const strSorted = str.split('').sort().join('');

            if(!anagram.has(strSorted)) {
                anagram.set(strSorted, [str]);
            }else {
              anagram.get(strSorted).push(str);  
            };
        }

        return Array.from(anagram.values())
    }
}
