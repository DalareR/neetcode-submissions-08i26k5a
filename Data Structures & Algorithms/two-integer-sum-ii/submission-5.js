class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    const numbersMap = new Map();
    
    for(let i = 0; i < numbers.length; i++) {
        const missingNum = target - numbers[i];
        
        if(!numbersMap.has(missingNum)) {
            numbersMap.set(numbers[i], i);
        } else {
            return [numbersMap.get(missingNum) + 1, i + 1];
        }
    }
}
}
