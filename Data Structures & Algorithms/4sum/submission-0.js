class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let result = []
        if(nums.length<4) return result;

        nums.sort((a,b) => a - b);
        const n = nums.length;
        //first pointer loop
        for(let i=0; i< n-3; i++){
            if(i>0 && nums[i]===nums[i-1]) continue;

            //second pointer loop
            for(let j= i+1; j<n-2; j++){
                if(j>i+1 && nums[j]===nums[j-1]) continue;

                //left and right two pointer approach;
                let left = j+1, right = n-1;
                while(left< right){
                    let sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if(sum===target){
                        result.push([nums[i], nums[j], nums[left], nums[right]]);
                        //skipping duplicate for the third number
                        while(left< right && nums[left]===nums[left+1]) left ++;
                        //skipping duplicate for the third number
                        while(left<right && nums[right]===nums[right-1]) right--;

                        //both move pointers inward
                        left++;
                        right--;
                    } else if(sum<target){
                        left++;
                    } else{
                        right--;
                    }
                }
            }
        }
        return result;
    }
}
