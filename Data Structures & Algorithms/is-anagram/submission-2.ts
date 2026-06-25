class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(t.length!== s.length) return false;
        const map = new Map<string, number>();

        for(const c of s ){
            map.set(c, (map.get(c) ?? 0) +1);
        }

        for(const c of t){
            const count = map.get(c);

            if(count === undefined || count === 0){
                return false;
            }
            map.set(c, count -1);
        }
        return true;

    }
}
