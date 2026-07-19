class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numsLen = nums.length;
        const prefix = new Array();
        const postfix = new Array();
        const result = new Array();
        
        prefix[0] = 1;
        for(let i = 1; i < numsLen; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        
        postfix[numsLen - 1] = 1;
        for(let i = numsLen - 2; i >= 0; i--) {
            postfix[i] = nums[i + 1] * postfix[i + 1];
        }
        
        for(let i = 0; i < numsLen; i++) {
            result[i] = prefix[i] * postfix[i];
        }
        
        return result;
    }
}