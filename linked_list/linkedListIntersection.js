// Given the heads of two singly linked-lists headA and headB,
//  return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

const getLength = (head) => {
  if (head.next === null) {
    return 1;
  } else {
    return getLength(head.next) + 1;
  }
};
exports.getIntersectedNode = (headA, headB) => {
  let listALength = getLength(headA);
  let listBLength = getLength(headB);

  let diff = Math.abs(listALength - listBLength);

  let long = listALength >= listBLength ? headA : headB;
  let short = listALength >= listBLength ? headB : headA;

  while (long & short) {
    if (diff > 0) {
      long = long.next;
      diff--;
      continue;
    }
    if (long === short) return long;
    long = long.next;
    short = short.next;
  }
};
