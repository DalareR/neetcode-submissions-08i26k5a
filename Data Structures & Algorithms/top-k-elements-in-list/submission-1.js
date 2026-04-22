class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const groupCount = new Map();
    
    for(const num of nums) {
        if(groupCount.has(num)) {
            groupCount.set(num, groupCount.get(num) + 1);
        } else {
            groupCount.set(num, 1);
        }
    }
    
    return [...groupCount.keys()].sort((a,b) => groupCount.get(a) - groupCount.get(b)).reverse().slice(0,k)
    }
}
