'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    const temp = this.front.value;
    this.front = this.front.next;
    return temp;
  }

  peekQueue() {
    if (this.isEmpty()) {
      return;
    } else {
      return this.front.value;
    }
  }
}

module.exports = Queue;