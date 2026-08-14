class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixSum = [];
        const result = [];

        let initialPrefix = 1;
        for(let i = 0; i < nums.length; i ++) {
            prefixSum[i] = initialPrefix;
            initialPrefix *= nums[i];
        };

        let initialPostFix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
           result[i] = initialPostFix * prefixSum[i];
           initialPostFix *= nums[i];
        }

        return result;
    }
}
