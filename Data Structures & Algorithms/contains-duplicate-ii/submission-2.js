class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        //sliding window approach
        //need to check for duplicates within a sliding window of size k
        const window = new Set();
        let left = 0;

        for(let right =0; right<nums.length; right++){
            if(left + right > k){
                window.delete(nums[left])
                left++;
            }
            if(window.has(nums[right])) return true;
            window.add(nums[right]);
        }
        return false
    }
}
