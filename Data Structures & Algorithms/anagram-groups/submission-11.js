class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs) {
            const strSorted = str.split("").sort().join("");

            if(map.has(strSorted)) {
                map.get(strSorted).push(str);
            } else {
                map.set(strSorted, [str]);
            }
        }

        return [...map.values()]
    }
};