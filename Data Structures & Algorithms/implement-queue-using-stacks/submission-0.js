class MyQueue {
    //Using Two Stacks (Amortized Complexity)
    constructor() {
        this.stack1 = [] //handles incoming elements(push)
        this.stack2 = [] //holds elements in reversed order for popping
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack1.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        //if stack2 is empty, transfer all elements from stack1 to stack2
        //then pop() from stack2
        if(this.stack2.length===0){
            while(this.stack1.length >0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        //if stack2 is empty, transfer all elements from stack1 to stack2
        //return the top of stack2
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length -1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        //return true if both stack1 and stack2 are empty
        return this.stack1.length === 0 && this.stack2.length === 0;

    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
