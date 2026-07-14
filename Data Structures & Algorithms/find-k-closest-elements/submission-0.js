class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let right = arr.length -1;
        let left = 0;
        // Keep shrinking the window until exactly k elements are left
        while(right - left >=k){
            let leftDiff = Math.abs(arr[left] - x);
            let rightDiff = Math.abs(arr[right] - x);

            if(leftDiff > rightDiff) left++;
            else right--;
        }
        return arr.slice(left, right+1)
    }
}
