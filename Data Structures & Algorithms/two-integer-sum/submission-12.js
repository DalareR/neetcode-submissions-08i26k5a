class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            const missing = target - nums[i];

            if(map.has(missing)) return [map.get(missing), i]
            else map.set(nums[i], i);
        }
    }
}
