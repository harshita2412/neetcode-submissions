class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        let map = {}

        for(let i = 0; i<names.length; i++){
            map[heights[i]] = names[i];
        }

        let arr =[]
        heights.sort((a,b) => a- b);
        for(let i= heights.length -1; i>=0; i--){
            arr.push(map[heights[i]])

        }
        return arr;
    }
}
