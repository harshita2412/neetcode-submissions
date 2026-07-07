class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length> s2.length) return false;

        let sortedS1 = s1.split('').sort().join('');
        const window = s1.length;

        for(let i=0; i<= s2.length - window; i++){
            let subStr = s2.slice(i, i+window).split('').sort().join('');
            if(subStr === sortedS1){
                return true;
            }
        }
        return false;
    }
}
