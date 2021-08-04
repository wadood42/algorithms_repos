const { reverseLinkedList, hello } = require("./reverse_linked_list");
const { hasCycle } = require("./has_cycle");
const { getIntersectedNode } = require("./linkedListIntersection");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // addToHead - add a new node to the head of the Linked List and returns the updated Linked List.
  addToHead(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // removeHead - removes the node at the head of the Linked List and returns the removed node
  removeHead() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    if (this.length === 0) {
      this.tail = null;
    }
    this.length--;
    return currentHead;
  }

  // addToTail - adds a new node to the tail of the Linked List and retuns the updated Linked list
  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removeTail - removes the node at the tail of the Linked List and returns the removed node
  removeFromTail() {
    if (!this.head) return undefined;
    let node = this.head;
    let newTailNode = node;

    while (node.next) {
      newTailNode = node;
      node = node.next;
    }

    this.tail = newTailNode;
    newTailNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return node;
  }
  // contains - searchs the Linked List for a node with the value specified and returns boolean

  contains(vlaue) {
    if (!this.head) return undefined;

    let node = this.head;
    while (node) {
      if (node.val === vlaue) return true;
      node = node.next;
    }
    return false;
  }
  // get - retrieves the node at the 'index' or position, specified and returns node at index

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let node = this.head;

    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  // set - updates the value of a node at the 'index' or position, and returns boolean
  set(newValue, index) {
    if (index < 0 || index >= this.length) return null;
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = newValue;
      return true;
    }
    return false;
  }

  // insertAt - inserts a new node at the "index" or position, specified and returns boolean

  insertAt(val, index) {
    if (index === 0) return !!this.addToHead(val);
    if (index === this.length) return !!this.addToTail(val);
    if (index < 0 || index > this.length) return false;

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(val);
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  // removeFrom - removes the node at the 'index' or position, specified and returns the removed node

  removeFrom(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.removeHead();
    if (index === this.length - 1) return this.removeFromTail();

    let prevNode = this.get(index - 1);
    let nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;

    this.length--;
    nodeToRemove.next = null;
    return nodeToRemove;
  }

  printList() {
    let node = this.head;
    console.log("list length:", this.length);
    while (node) {
      console.log("Node Value: ", node.val);
      node = node.next;
    }
  }
}

const myLinkedList = new LinkedList();
const urLinkedList = new LinkedList();

myLinkedList.addToTail("A");
myLinkedList.addToTail("B");
myLinkedList.addToTail("C");
myLinkedList.addToTail("D");
myLinkedList.addToTail("E");
myLinkedList.addToTail("F");

urLinkedList.addToTail("U");
urLinkedList.addToTail("V");
urLinkedList.addToTail("W");
urLinkedList.addToTail("X");
urLinkedList.addToTail("Y");
urLinkedList.addToTail("Z");

let nodeD = myLinkedList.get(3);
let nodeW = urLinkedList.get(2);

nodeD.next = nodeW;

console.log(getIntersectedNode(myLinkedList.head, urLinkedList.head));
