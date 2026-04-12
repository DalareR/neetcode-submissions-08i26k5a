class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};

        for(let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];

            if(difference in seen) return [seen[difference], i];

            seen[nums[i]] = i
        }
    }
}
