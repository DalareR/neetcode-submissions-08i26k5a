class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const list = new Map();

        for(let i = 0; i < strs.length; i++) {
            const sortedStr = strs[i].split("").sort().join("");

            if(!list.has(sortedStr)) {
                list.set(sortedStr, [strs[i]])
            } else {
                list.get(sortedStr).push(strs[i]);
            }
        }

        return [...list.values()];
    }
}
