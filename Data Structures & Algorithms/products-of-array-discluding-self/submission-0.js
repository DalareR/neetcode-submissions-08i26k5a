class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];

        for(let i = 0; i < nums.length; i++) {
            const index = nums.indexOf(nums[i]);
            const firstHalf = nums.slice(0,index);
            const secondHalf = nums.slice(index + 1, nums.length);
            const combined = [...firstHalf, ...secondHalf];
            const multiplied = combined.reduce((sum, num) => sum * num, 1);

            output.push(multiplied);
        }

        return output
}
}
