class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const res = [];
        if(nums.length<4) return res;

        nums.sort((a,b) => a - b);
        const n = nums.length;
        
        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for(let j = i+1; j<n; j++){
                if(j > i+1 && nums[j] === nums[j-1]) continue;

                //left and right two pointer approach;
                let left = j + 1;
                let right = n - 1;

                while(left<right){
                    const sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if(sum > target){
                        right--;
                    }
                    else if(sum < target) left++;

                    else {
                        res.push([nums[i], nums[j], nums[left], nums[right]]);
                        //skipping duplicate for the third number
                        while(left < right && nums[left]===nums[left+1]) left ++;
                        //skipping duplicate for the third number
                        while(left<right && nums[right]===nums[right-1]) right--;

                        //both move pointers inward
                        left++;
                        right--;
                    }
                }
            }
        }
        return res;
    }
}