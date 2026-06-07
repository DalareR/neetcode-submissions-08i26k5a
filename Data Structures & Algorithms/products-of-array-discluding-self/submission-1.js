class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];

        for(let i = 0; i < nums.length; i++) {
            const prefix = nums.slice(0, i);
            const postfix = nums.slice(i + 1, nums.length);
            const combined = [...prefix, ...postfix];
            const multiplied = combined.reduce((multiplied, num) => multiplied * num, 1);

            output.push(multiplied);
        }

        return output;
    }
}
