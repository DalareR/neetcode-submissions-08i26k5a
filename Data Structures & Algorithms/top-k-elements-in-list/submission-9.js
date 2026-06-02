class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const list = new Map();

        for(const num of nums) {
            if(!list.has(num)) {
                list.set(num, 0)
            } else {
                list.set(num, list.get(num) + 1)
            }
        }  

        return [...list.keys()].sort((a,b) => list.get(b) - list.get(a)).splice(0,k)
    }
}
