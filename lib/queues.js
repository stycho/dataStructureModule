class Queue {
  constructor() {
    this._data = new LinkedList;
  }

  get next() {
    return this._data.front.data
  }

  enqueue(data) {
    this._data.append(data);
  }

  dequeue() {
    let data = this._data.front.data;
    this._data.popFront();
    return data;
  }

  empty() {

  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._count = 0;
  }

  get length() {
    return this._count;
  }

  // Returns an array of all data
  get allData() {
    let currentNode = this._head;
    let data = [];
    while (currentNode != null) {
      data.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return data;
  }

  get front() {
    return this._head;
  }

  get back() {
    return this._tail;
  }

  append(data) {

    const newNode = new Node(data);

    if (this._count === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this._count++;
  }

  popBack() {
    if (this._count === 0) throw 'List is empty'; 
    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
    }
    let currentNode = this._head;

    while(currentNode.next != this._tail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this._tail = currentNode;
    this._count--;
  }

  prepend(data) {

    const newNode = new Node(data);

    if (this._count === 0) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.next = this._head;
      this._head = newNode;
    }
    this._count++;
  }

  popFront() {
    if (this._count === 0) throw 'List is empty'; 
    this._head = this._head.next;
    this._count--;
  }

  find(data) {
    let currentNode = this._head;

    while(currentNode != null && currentNode.data != data) {
      currentNode = currentNode.next;
    }

    return currentNode ? currentNode.key : null;
  }

  delete(data) {

  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

let myQueue = new Queue;
myQueue.enqueue('first');
myQueue.enqueue('second');
myQueue.enqueue('third');
console.log(myQueue.next);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.next);