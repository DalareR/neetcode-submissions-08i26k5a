class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const record = new Map();

        for(const str of strs) {
            const sortedStr = str.split("").sort().join("");

            if(record.has(sortedStr)) {
                record.get(sortedStr).push(str);
            } else {
                record.set(sortedStr, [str]);
            }
        }

        return [...record.values()];
    }
}
