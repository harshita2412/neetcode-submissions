class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();
        let maxCount = 0
        for(const n of nums){
            map.set(n, (map.get(n)|| 0) +1);
            maxCount = Math.max(maxCount, map.get(n));
        }
        for( let [key, count] of map.entries()){
            if(count === maxCount) return key;
        }
    }
}
