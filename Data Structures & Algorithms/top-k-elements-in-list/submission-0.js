class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const freq = Array.from({length: nums.length +1 },() =>[]);

        for(const n of nums){
            map[n] = (map[n] || 0) +1;
        }

        for(const n in map){
            freq[map[n]].push(parseInt(n));
        }
        let result =[]
        for(let i = freq.length -1; i>0; i--){
            for(const n of freq[i]){
                result.push(n);
                if(result.length === k) return result;
            }
        }
    }
}
