class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count =0;
        let candidate;

        for(let n of nums){
            if(count === 0){
                candidate = n;
            }
            if(n === candidate) count += 1;
            else count -= 1
        }
        return candidate
    }
}
