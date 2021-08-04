const { TreeNode, a } = require("./tree_node");

function depthFirst(root) {
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function depthFirstRecursive(root) {
  if (!root) return;

  console.log(root.val);

  depthFirstRecursive(root.left);
  depthFirstRecursive(root.right);
}

depthFirstRecursive(a);
