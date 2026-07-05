class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length ===0) return 0;

        let insertIndex = 1;
        for(let i=1; i<nums.length; i++){
            //if current element is different from previous element, it is uniquw
            if(nums[i]!== nums[i-1]){
                nums[insertIndex] = nums[i];
                insertIndex++;
            }
        }
        return insertIndex;
    }
}
