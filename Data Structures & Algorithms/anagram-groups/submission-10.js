class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map();

        for(const str of strs) {
            const strSorted = str.split("").sort().join("");
     
            if(!strMap.has(strSorted)) {
                strMap.set(strSorted, [str])
            } else {
                strMap.get(strSorted).push(str);
            };
        }

        return [...strMap.values()]
    }
}
