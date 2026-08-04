class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid]===target) return true;
            
            //The Duplicate Illusion
            if(nums[left] === nums[mid] && nums[right] === nums[mid]){
            // We know nums[mid] is NOT the target.
            // Therefore, nums[left] and nums[right] are NOT the target either
                left++;
                right--;
                continue; 
            }
            //if left is sorted from mid
            if(nums[left] <= nums[mid]){
                //target inside the left
                if(target>=nums[left] && target<nums[mid]){
                    right = mid-1;
                }
                else{
                    left = mid+1
                }
            }
            // if right is sorted
            else {
                //target inside the left sorted
                if(target<=nums[right] && target>nums[mid]){
                    left = mid+1;
                }
                else{
                    right = mid-1
                }
            }
        }
        return false
    }
}
