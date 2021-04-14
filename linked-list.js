/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currNode = this.head;
    const lastNode = this.tail;

    // base case for only 1 item
    if (currNode === lastNode) {
      this.head = this.tail = null;
      this.length--;
      return lastNode.val;
    }

    // search for node that points to last node
    while (currNode.next !== lastNode) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode;
    this.length--;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const firstNode = this.head;
    // base case for only 1 item
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
    this.length--;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    // base case 1: insert in empty list
    if (!this.head && idx === 0) {
      this.head = this.tail = newNode;
    }
    // base case 2: inserting at head
    else if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      newNode.next = currNode.next;
      currNode.next = newNode;
      // if newNode at end, set tail to newNode
      if (!newNode.next) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let deletedNode;
    // base case 1: removing only item
    if (this.head === this.tail && idx === 0) {
      deletedNode = this.head;
      this.head = this.tail = null;
    }
    // base case 2: deleting at head
    else if (idx === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    else {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      deletedNode = currNode.next;
      currNode.next = currNode.next.next;
      // check if became new tail
      if (!currNode.next) {
        this.tail = currNode;
      }
    }
    this.length--;
    return deletedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    // base case for empty list, which is apparently supposed to be 0
    if (!this.length) {
      return 0;
    }

    let sum = 0;
    let currNode = this.head;
    while (currNode) {
      sum += currNode.val;
      currNode = currNode.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
