class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(const ops of operations){
            if(ops==='+'){
                let top = stack.pop();
                let newTop = top + stack[stack.length -1];
                stack.push(top);
                stack.push(newTop)
            }
            else if(ops==='C') stack.pop();
            else if(ops==='D') {
                stack.push(stack[stack.length-1] * 2);
            }
            else stack.push(parseInt(ops))
        }
        return stack.reduce((acc,curr)=> acc+ curr, 0)
    }
}
