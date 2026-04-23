class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numCountObj = new Map();

        for(const num of nums) {
            if(numCountObj.has(num)) {
                numCountObj.set(num, numCountObj.get(num) + 1);
            } else {
                numCountObj.set(num, 1);
            }
        }

        return [...numCountObj.keys()].sort((a,b) => numCountObj.get(b) - numCountObj.get(a)).slice(0, k);
    }
}
