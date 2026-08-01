class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        //binary search
        let l=0;
        let r = x;
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(mid*mid<x) l = mid+1;
            else if(mid*mid >x) r = mid-1;
            else return mid
        }
        return r;
    }
}
