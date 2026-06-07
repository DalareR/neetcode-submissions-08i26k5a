class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grouped = new Map();

        for(const str of strs) {
            const sortedStr = str.split("").sort().join("");

            if(grouped.has(sortedStr)) {
                grouped.get(sortedStr).push(str)
            } else {
                grouped.set(sortedStr, [str])
            }
        }

        return [...grouped.values()]
    }
}
