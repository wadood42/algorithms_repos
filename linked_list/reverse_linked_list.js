exports.reverseLinkedList = (LinkedList) => {
  let node = LinkedList.head;

  let first = node;
  let next = null;
  let prev = null;

  while (node.next) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  LinkedList.head = node;
  LinkedList.head.next = prev;
  LinkedList.tail = first;
  return LinkedList;
};
