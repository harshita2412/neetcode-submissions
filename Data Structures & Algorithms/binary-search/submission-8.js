class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length-1;
        let i=0;
        while(i<=n){
            let mid = Math.floor((n+i)/2);
            if( nums[mid]===target) return mid;
            if( nums[mid]<target){
                i= mid+1;
            }
            else {
                n = mid -1;
            }
        }
        return -1
    }
}
