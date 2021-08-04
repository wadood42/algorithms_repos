// Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree
// and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

const { TreeNode } = require("./tree_node");

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

function buildTree(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;

  let rootVal = preorder[0];

  let root = new TreeNode(rootVal);
  let midIdx = inorder.indexOf(rootVal);

  let leftInOrder = inorder.slice(0, midIdx);
  let rightInOrder = inorder.slice(midIdx + 1);

  let leftPreorder = preorder.filter((val) => leftInOrder.includes(val));
  let rightPreorder = preorder.filter((val) => rightInOrder.includes(val));

  let leftTree = buildTree(leftPreorder, leftInOrder);
  let rightTree = buildTree(rightPreorder, rightInOrder);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

// better finish this tomorrwo
let binaryTree = buildTree(preorder, inorder);

console.log(binaryTree);
