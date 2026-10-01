class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];

            if(map.has(currentNum)) map.set(currentNum, map.get(currentNum) + 1)
            else map.set(currentNum, 1);
        }

        return [...map.keys()].sort((a,b) => map.get(b) - map.get(a)).splice(0,k)
    }
}
