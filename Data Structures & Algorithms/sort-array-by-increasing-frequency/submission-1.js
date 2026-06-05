class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        let freq = new Map();
        for(const n of nums){
            freq.set(n, (freq.get(n) || 0) +1);
        }

        nums.sort((a,b) => {
            if(freq.get(a)!==freq.get(b)){
                return freq.get(a) - freq.get(b);
            }
            return b-a;
            
        });
        return nums;
    }
}
