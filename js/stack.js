class Stack {

  constructor() {
    this.items = [];
    this.top = 0;
  }

  push(element) {
    this.top++;
    this.items[this.top] = element;
  }

  pop() {
    let deteledElement;
    if (this.top) {
      deteledElement = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deteledElement;
    }
  }

  getSize() {
    return this.top;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  peek() {
    return this.isEmpty ? null : this.items[this.top];
  }

  print() {
    for (let i = this.top; i > 0; i--) {
      console.log(this.items[i]);
    }
  }
}

const stack = new Stack();
console.log('Is Empty: ', stack.isEmpty());
stack.push('This');
stack.push('is');
stack.push('an');
stack.push('example');
// console.log(stack.pop());
console.log(stack.getSize());
console.log('Is Empty: ', stack.isEmpty());
stack.print();