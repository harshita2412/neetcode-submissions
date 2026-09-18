class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const a = {};
        const b= {};
        for(let i=0; i<s.length;i++){
            a[s[i]] = (a[s[i]] || 0) +1;
            b[t[i]] = (b[t[i]] || 0) +1;
        }

        for(const keys in a){
            if(a[keys]!== b[keys]){
                return false;
            }
        }
        return true;
    }
}
