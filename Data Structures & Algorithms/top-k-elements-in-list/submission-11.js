class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = new Map();

        for(const num of nums) {
            
            if(result.has(num)) {
                result.set(num, result.get(num) + 1);
            } else {
                result.set(num, 1)
            }
        }

        return [...result.keys()].sort((a,b) => result.get(b) - result.get(a)).slice(0,k);
    }
}
