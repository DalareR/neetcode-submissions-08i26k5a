class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = new Map();
        
        for(let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const missing = target - currentNum;

            if(result.has(missing)) {
                return [result.get(missing), i];
            } else {
                result.set(currentNum, i);
            }
        }
    }
}
