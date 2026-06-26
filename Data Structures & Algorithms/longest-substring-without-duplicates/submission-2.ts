class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charSet = new Set<string>();
        let left = 0, res = 0;

        for(let right=0; right<s.length; right++){
            while(charSet.has(s[right])){
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            res = Math.max(res, right-left +1);
        }
        return res;

    }
}
