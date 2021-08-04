// Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

const { a } = require("./tree_node");

function levelOrder(root) {
  let result = [];
  if (root === null) return result;

  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }

  return result;
}

let res = levelOrder(a);

console.log("res", res);
