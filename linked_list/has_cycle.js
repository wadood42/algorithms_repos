exports.hasCycle = (linkedList) => {
  if (linkedList.head === null || linkedList.head.next === null) return false;

  let fast = linkedList.head;
  let slow = linkedList.head;
  let pause = true;

  while (fast.next) {
    fast = fast.next;
    if (fast.next === slow) return true;
    slow = pause ? slow : slow.next;
    pause = !pause;
  }

  return false;
};
