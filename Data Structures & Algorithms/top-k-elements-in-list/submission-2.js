class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();

        for(const n of nums){
            freq.set(n, (freq.get(n) || 0) +1)
        }

        const bucket = Array.from({length: nums.length +1}, ()=> [])

        for(const [n, count] of freq){
            bucket[count].push(n);
        }

        const result =[];
        for(let i=bucket.length -1; i>=1; i--){
            for(const n of bucket[i]){
                result.push(n);
                if(result.length === k) return result;
            }

        }
    }
}
