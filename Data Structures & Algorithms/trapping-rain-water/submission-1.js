class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length ===0) return 0;

        // two pointers starting from both ends
        let left =0;
        let right = height.length -1;


        // track the max height seen so far from each side
        let leftMax = height[left];
        let rightMax = height[right];
        
        // this will accumulate the total trapped water
        let res=0;

        while(left < right){
            if(leftMax < rightMax){
                left++;
                leftMax = Math.max(leftMax, height[left]);

                // water trapped at this bar = max height on left - current bar height
                // (if current bar is taller than leftMax, this adds 0 — no water)
                res += leftMax - height[left]
            }
            else{
                right--;
                rightMax = Math.max(rightMax, height[right]);

                // water trapped at this bar = max height on right - current bar height
                res += rightMax - height[right]
            }
        }
        return res
    }
}
