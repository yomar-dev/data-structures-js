class Queue {
  
  constructor() {
    this.items = [];
    this.front = 0;
    this.end = 0;
  }

  enqueue(data) {
    this.items[this.end] = data;
    this.end++;
  }

  dequeue() {
    if (this.front === this.end) { return null; }

    const data = this.items[this.front];
    this.front++;
    return data;
  }

  getSize() {
    return this.end - this.front;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  peek() {
    return this.items[this.front];
  }

  print() {
    for (let i = this.front; i < this.end; i++) {
      console.log(this.items[i]);      
    }
  }
}

const queue = new Queue();
queue.enqueue('This');
queue.enqueue('is');
queue.enqueue('an');
queue.enqueue('example');
// queue.dequeue();
// queue.dequeue();
console.log('Is empty: ', queue.isEmpty());
console.log('First Value: ', queue.peek());
queue.print();