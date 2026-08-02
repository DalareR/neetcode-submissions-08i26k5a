class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapper = new Map();
        const result = [];

        for(let i = 0; i < nums.length; i++) {
            const focus = target - nums[i];

            if(!mapper.has(focus)) {
                mapper.set(nums[i], i);
            } else {
                return [mapper.get(focus), i]
            }
        }

        return result;
    }
}
