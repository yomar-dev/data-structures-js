class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const newNode = new Node(element, null);
    
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) { return null; }

    const newNode = new Node(element);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next; 
      }

      newNode.next = current;
      previous.next = newNode;
    }
  }

  removeElement(element) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.element === element) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }

    return null;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) { return null; }

    let current = this.head;
    let previous = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (!this.size) { return null; }

    let current = this.head;
    let result = '';
    while(current) {
      result += current.element += ' -> ';
      current = current.next;
    }
    result += 'X';
    return result;
  }
}

const list = new LinkedList();
list.add('Yomar');
list.insertAt(27, 1);
list.add('Miranda');
// console.log(list.removeElement(27));
console.log(list.removeFrom(1));
console.log('Is Empty: ', list.isEmpty());
console.log('Size: ', list.getSize());
console.log(list);
console.log(list.print());