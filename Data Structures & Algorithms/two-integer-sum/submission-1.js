class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const seen = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const missingNum = target - nums[i];
        
        if(seen.has(missingNum)) {
            return [seen.get(missingNum), i];
        } else {
            seen.set(nums[i], i)
        }
    }
}
}
