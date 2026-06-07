class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for(let i=0; i<strs[0].length; i++){
            for( let string of strs){
                if(i === string.length || string[i]!== strs[0][i])
                {
                    return string.slice(0, i);
                }
            }
        }
        return strs[0];

    }
}
