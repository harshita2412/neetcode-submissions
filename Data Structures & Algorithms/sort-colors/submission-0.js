class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let c0 = 0, c1 =0, c2=0;
        for(const n of nums){
            if(n===0) c0++;
            else if(n===1) c1++;
            else c2++;
        }
        let i=0;
        while(c0 >0){ 
            nums[i++] = 0;
            c0--;
        }
        while(c1 >0){ 
            nums[i++] = 1;
            c1--;
        }
        while(c2 >0){ 
            nums[i++] = 2;
            c2--;
        }
        return nums;
    }
}
