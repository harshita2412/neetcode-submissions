class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!== t.length) return false;

        let freqOfS = new Map();
        let freqOfT = new Map();

        for(let i=0; i<s.length; i++){
            freqOfS.set(s[i], (freqOfS.get(s[i]) || 0)+1);
            freqOfT.set(t[i], (freqOfT.get(t[i]) || 0)+1);
        }

        for (const [key, count] of freqOfS){
            if(freqOfT.get(key)!==count) return false;
        }
        return true;
        
    }
}
