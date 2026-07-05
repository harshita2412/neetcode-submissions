class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let res = [...new Set(nums)];
        for(let i =0; i<res.length; i++){
            nums[i] = res[i];
        }
        return res.length
    }
}
