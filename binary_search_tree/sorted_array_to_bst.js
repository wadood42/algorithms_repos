// 108. Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending
// order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the
// depth of the two subtrees of every node never differs by more than one.

const { TreeNode } = require("../trees/tree_node");

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let root = Math.floor(nums.length / 2);

  let rootNode = new TreeNode(nums[root]);
  let left = nums.slice(0, root);
  let right = nums.slice(root + 1);

  let leftSubTree = sortedArrayToBST(left);
  let rightSubTree = sortedArrayToBST(right);

  rootNode.left = leftSubTree;
  rootNode.right = rightSubTree;

  return rootNode;
}

let nums = [1, 2, 3, 4, 5, 6];

const BST = sortedArrayToBST(nums);

function inorder(root) {
  if (root === null) return;

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

inorder(BST);
