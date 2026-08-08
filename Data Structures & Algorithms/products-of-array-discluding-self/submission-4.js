class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const postfix = [];
        const result = [];

        let initialPrefix = 1;
        for(let i = 0; i < nums.length; i++) {
            prefix.push(initialPrefix);
            initialPrefix *= nums[i];
        }
        
        let initialPostfix = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            result[i] = initialPostfix * prefix[i];
            initialPostfix *= nums[i];
        }
        
        return result
    }
}
