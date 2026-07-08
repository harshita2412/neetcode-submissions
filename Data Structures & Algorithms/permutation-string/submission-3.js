class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //sliding window approach
        //freq count of letters
        if(s1.length>s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for(let i=0; i<s1.length; i++){
            s1Count[s1.charCodeAt(i)- 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i)- 'a'.charCodeAt(0)]++;
        }

        //helper function to check if two freq array match
        const match = (arr1, arr2)=> {
            for(let i=0; i<26; i++){
                if(arr1[i]!== arr2[i]) return false
            }
            return true;
        }

        //helper function to get character code index
        const getIdx = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)

        //sliding window acrross s2
        for(let i=s1.length; i<s2.length; i++){
            if(match(s1Count, s2Count)) return true;

            //add next char to the window
            s2Count[getIdx(s2[i])]++;
            //remove the oldest character in the window
            s2Count[getIdx(s2[i - s1.length])]--;

        }
        return match(s1Count, s2Count)

    }
}
