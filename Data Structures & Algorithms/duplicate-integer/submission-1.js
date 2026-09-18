class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let l = nums.length;
        let i=0;
        nums.sort();
        while(i<l){
            if(nums[i]===nums[i+1]){
                return true;
            }
            i++;
        }
        return false;
    }
}
