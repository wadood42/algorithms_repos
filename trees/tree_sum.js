const { TreeNode, a } = require("./tree_node");

let three = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

function treeSum(root) {
  if (root === null) return 0;
  let queue = [root];
  let sum = 0;

  while (queue.length) {
    let node = queue.shift();
    sum += node.val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return sum;
}

function treeSumRecursive(root) {
  if (root === null) return 0;

  return treeSumRecursive(root.left) + root.val + treeSumRecursive(root.right);
}

console.log(treeSumRecursive(three));
