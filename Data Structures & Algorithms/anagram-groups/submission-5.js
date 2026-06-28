class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const annagramMap = new Map();

    for(const str of strs) {
        const strSplitSort = str.split("").sort().join("");

        if(annagramMap.has(strSplitSort)) {
            annagramMap.get(strSplitSort).push(str);
        } else {
            annagramMap.set(strSplitSort, [str])
        }
    }

    return [...annagramMap.values()]
    }
}
