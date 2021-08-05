const { a } = require("./tree_node");

function depthFirstSearch(root, target) {
  if (root === null) return;
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    if (node.val === target) return node;

    if (node.right) stack.push(node.right);

    if (node.left) stack.push(node.left);
  }

  return null;
}

console.log(depthFirstSearch(a, "b"));
