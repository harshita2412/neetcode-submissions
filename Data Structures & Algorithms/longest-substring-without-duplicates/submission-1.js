class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max =0;
        let left =0;

        let map = new Map();

        for(let r=0; r< s.length; r++){
            if(map.has(s[r])){
                left = Math.max(map.get(s[r])+1, left);
            }
            map.set(s[r], r);
            max = Math.max(max, r-left +1)
        }
        return max;
    }
}
