class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;

        // QUESTION 1: Is the LEFT half perfectly sorted?
        if (nums[left] <= nums[mid]) {
            
            // QUESTION 2: Is the target inside this sorted left half?
            if (target >= nums[left] && target < nums[mid]) {
                right = mid -1;
                // Yes! The target is strictly in the left half.
                // How do you throw away the right half?
                // ??? = ???
            } else {
                left = mid+1;
            }
            
        } 
        // QUESTION 1: If the left isn't sorted, the RIGHT half MUST be perfectly sorted.
        else {
            
            // QUESTION 2: Is the target inside this sorted right half?
            if (target > nums[mid] && target <= nums[right]) {
                left = mid;
                // Yes! The target is strictly in the right half.
                // How do you throw away the left half?
                // ??? = ???
            } else {
                right = mid-1;
                // No! The target MUST be in the messy left half.
                // How do you throw away the right half?
                // ??? = ???
            }
        }
    }
    return -1;
}
}
