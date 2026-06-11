class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map(); 
        
        for(let i = 0; nums.length; i++) {
            const missingNum = target - nums[i];

            if(numMap.has(missingNum)) return [numMap.get(missingNum), i];
            numMap.set(nums[i], i);
        }
    }
}
