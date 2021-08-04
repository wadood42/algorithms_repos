// Given the root of a binary tree, return its maximum depth
// A binary tree maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node

const { TreeNode, a } = require("./tree_node");

function maxDepth(root) {
  if (root === null) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

console.log(maxDepth(a));
