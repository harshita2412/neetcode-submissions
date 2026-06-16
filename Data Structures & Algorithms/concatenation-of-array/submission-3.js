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
            if(i<n) ans[i] = nums[i];
            if(i>=n && j<n ){
                ans[i] = nums[j];
                j++;
            }
        }
        return ans;
    }
}
