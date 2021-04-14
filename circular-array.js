/** CircularArray: array where start can rotate */

class CircularArray {
  constructor() {
    this.arr = [];
    this.start = 0;
  }

  /** addItem(item): Adds item to arr */

  addItem(item) {
    // base case for adding to empty list or to list with start at 0
    if (!this.arr.length || !this.start) {
      this.arr.push(item);
    }
    // otherwise, add new item to right before start
    else {
      this.arr.splice(this.start, 0, item); // Learned how to insert anywhere in array at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      this.start = this.start + 1;
    }
  }

  /** printArray(): prints all items in arr starting with start */

  printArray() {
    // base case for empty arr
    if (!this.arr.length) {
      return;
    }
    console.log(this.arr[this.start]);
    for (let i = (this.start + 1) % this.arr.length; i !== this.start; i = (i + 1) % this.arr.length) {
      console.log(this.arr[i]);
    }
  }

  /** getByIndex(idx): gets item by index */
  
  getByIndex(idx) {
    if (idx >= this.arr.length) {
      return null;
    }
    return this.arr[(this.start + idx) % this.arr.length];
  }

  /** rotate(rotation): rotate start of array */

  rotate(rotation) {
    if (rotation >= 0) {
      this.start = (this.start + rotation) % this.arr.length;
    }
    else {
      this.start += rotation;
      // add by multiple of this.arr.length required to make this.start pos
      this.start +=
        Math.ceil((this.start * -1) / this.arr.length) * this.arr.length;
    }
  }
}

module.exports = CircularArray;