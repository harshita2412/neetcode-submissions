class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        //brute force appr
        let minLen = Infinity;
        for(let i=0; i<nums.length; i++){
            let currentSum =0
            for(let j=i; j<nums.length; j++){
                currentSum += nums[j];
                if(currentSum>=target){
                    minLen = Math.min(minLen, j-i+1);
                    break; // any further numbers will only make length longer
                }
            }
        }
        return minLen === Infinity ? 0: minLen
    }
}
