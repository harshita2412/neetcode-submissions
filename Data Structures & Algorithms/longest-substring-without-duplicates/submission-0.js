class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen =0;
        let left = 0;
        let set = new Set();

        for (let right =0; right<=s.length -1; right++){
            if(!set.has(s[right])){
                set.add(s[right]);
            }
            else{
                while (set.has(s[right])){
                    set.delete(s[left]);
                    left++
                }
                set.add(s[right])
            }
            maxLen = Math.max(maxLen, right -left+1)
        }
        return maxLen;
    }
}
