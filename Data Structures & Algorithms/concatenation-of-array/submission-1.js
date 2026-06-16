class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(2*n);
        let j=0;
        for(let i=0; i<ans.length; i++){
            if(i<nums.length) ans[i] = nums[i];
            if(i>=nums.length && j<=nums.length){
                ans[i] = nums[j];
                j++;
            }
        }
        return ans;
    }
}
