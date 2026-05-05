class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                let diff = target - numbers[i];
                if(diff === numbers[j]) return[i+1, j+1];
            }
        }
        return[];
    }
}
