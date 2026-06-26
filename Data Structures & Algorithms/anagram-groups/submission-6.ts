class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let res = new Map<string, string[]>();

        for(let s of strs){
            const count = new Array<number>(26).fill(0);
            for( let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++;
            }
            const key = count.join(',');
            if(!res.has(key)) {
                res.set(key, [])
            }
            res.get(key)!.push(s)
        }
        return Array.from(res.values())
    }
}
