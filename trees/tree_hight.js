const { TreeNode, a } = require("./tree_node");

function treeHight(root) {
  if (root === null) return -1;

  let left = treeHight(root.left) + 1;
  let right = treeHight(root.right) + 1;

  //   console.log(left);

  //   return 1 + Math.max(treeHight(root.left), treeHight(root.right));

  return Math.max(left, right);
}

console.log(treeHight(a));
