class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string ='';
        for(const s of strs){
            string += s.length + '#' + s;
        }
        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let list =[];
        let i=0;

        while(i<str.length){
            let j=i;
            while(str[j]!='#'){
                j++;
            }
            let length = parseInt(str.substring(i,j));
            i=j+1;
            j=i + length;
            list.push(str.substring(i,j))
            i=j;
        }
        return list;
    }
}
