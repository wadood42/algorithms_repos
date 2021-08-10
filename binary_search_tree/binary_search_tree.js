class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }

  inorder(root = this.root) {
    if (!root) return;

    this.inorder(root.left);
    console.log(root.val);
    this.inorder(root.right);
  }

  searchRecursive(val, root = this.root) {
    if (!root) return false;
    if (val < root.val) {
      return this.search(val, root.left);
    } else if (val > root.val) {
      return this.search(val, root.right);
    } else {
      return true;
    }
  }

  searchIterative(val) {
    let cur = this.root;

    while (cur) {
      if (val < cur.val) {
        cur = cur.left;
      } else if (val > cur.val) {
        cur = cur.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let tree1 = new BST();

tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

console.log(tree1.searchIterative(7));

module.exports = { tree1 };
