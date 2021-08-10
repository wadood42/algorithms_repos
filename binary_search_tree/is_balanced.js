const { tree1 } = require("./binary_search_tree");

function getHight(root) {
  if (!root) return -1;

  let leftHight = getHight(root.left) + 1;
  let rightHight = getHight(root.right) + 1;

  return Math.max(leftHight, rightHight);
}
const isBalanced = (root) => {
  if (root === null) return true;

  let left = getHight(root.left) + 1;
  let right = getHight(root.right) + 1;

  let hightDiff = Math.abs(left - right);

  return hightDiff <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

const treeH = isBalanced(tree1.root);
console.log(treeH);
