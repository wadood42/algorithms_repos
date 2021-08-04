class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// in-order: left, self, right
function inOrderPrint(root) {
  //   console.log("root", root);
  if (root === null) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

// pre-order: self, left, right
function preOrderPrint(root) {
  if (root === null) return;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

// post-order: left, right, self
function postOrderPrint(root) {
  if (root === null) return;

  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}

module.exports = { TreeNode, a };
