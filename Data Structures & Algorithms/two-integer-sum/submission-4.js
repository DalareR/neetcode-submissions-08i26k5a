class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complementary = new Map();

        for(let i = 0; i < nums.length; i++) {
            const look = target - nums[i];

            if(!complementary.has(look)) {
                complementary.set(nums[i], i);
            } else {
                return [complementary.get(look), i];
            }
        }
    }
}
