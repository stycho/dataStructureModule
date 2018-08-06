const myString = '{}()';

class Stack {
  constructor() {
    this.top = 0;
    this.stack = [];
  }

  empty() {
    return this.top === 0 ? true : false;
  }

  push(val) {
    this.top++;
    this.stack[this.top] = val;
  }

  pop() {
    if (this.top === 0) {
      console.log('Stack is empty. Stack underflow.')
    } else {
      this.top--;
      return this.top[this.top + 1];
    }
  }

  topVal() {
    return this.stack[this.top];
  }
}

console.log(isBalanced(myString));

function isBalanced(str) {
  let myStack = new Stack();

  for (let char of str) {
    if (['(', '{', '['].includes(char)) {
      myStack.push(char);
    } else {
      if (myStack.empty()) {
        return false;
      }
      let top = myStack.pop();
      if (top == '(' && char !== ')' || top == '{' && char !== '}' || top == '[' && char !== ']') return false;
    }
  }
  return myStack.empty();
}