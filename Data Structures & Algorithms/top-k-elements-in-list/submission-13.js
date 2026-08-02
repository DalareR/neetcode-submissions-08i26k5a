class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();

        for(const num of nums) {
            if(!countMap.has(num)) {
                countMap.set(num, 1);
            } else {
                countMap.set(num, countMap.get(num) + 1);
            }
        }

        return [...countMap.keys()].sort((a,b) => countMap.get(b) - countMap.get(a)).slice(0,k);
    }
}
