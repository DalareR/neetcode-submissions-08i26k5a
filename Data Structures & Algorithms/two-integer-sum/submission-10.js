class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i ++) {
            const missingNum = target - nums[i];

            if(map.has(missingNum)) {
                return [map.get(missingNum), i];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}
