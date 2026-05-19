class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let bracketMap = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for(const n of s){
            if(bracketMap[n]){
                if(stack.length ==0 || stack.pop()!== bracketMap[n]){
                    return false
                }
            }
            else{
                stack.push(n)
            }
        }
        return stack.length === 0;
    }
}
