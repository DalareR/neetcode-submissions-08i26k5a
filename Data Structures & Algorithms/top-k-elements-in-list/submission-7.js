class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const record = new Map();

        for(const num of nums) {
            if(record.has(num)) {
                record.set(num, record.get(num) + 1);
            } else {
                record.set(num, 0);
            }
        }

        return [...record.keys()].sort((a,b) => record.get(b) - record.get(a)).slice(0,k);
        }
}
