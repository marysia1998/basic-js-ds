const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
const { removeKFromList } = require('../src/remove-from-list.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = null;
    this.head = null;
    this.tail = null
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if(this.queue == null) {
        this.queue = node
        this.tail = this.queue;

    }
    else {
        this.tail.next = node
        this.tail = this.tail.next
    }
  }

  dequeue() {
    let head = this.queue.value;
    this.queue = removeKFromList(this.queue, head);
    return head;
  }
}

module.exports = {
  Queue
};
