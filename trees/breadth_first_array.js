const { a } = require("./tree_node");

function breadthFirstArray(root) {
  const queue = [root];
  let res = [];

  while (queue.length) {
    let node = queue.shift();

    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res;
}

const arr = breadthFirstArray(a);

console.log(arr);
