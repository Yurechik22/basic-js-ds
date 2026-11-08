const { Node } = require('../extensions/list-tree.js');
 
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
 
  root() {
    return this.rootNode;
  }
 
  add(data) {
    const newNode = new Node(data);
 
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
 
    let current = this.rootNode;
    while (true) {
      if (data === current.data) return; // такое значение уже есть
 
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
 
  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }
 
  has(data) {
    return this.find(data) !== null;
  }
 
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }
 
  removeNode(node, data) {
    if (!node) return null;
 
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
 
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
 
    // нашли узел, который надо удалить
    if (!node.left && !node.right) return null; // лист
    if (!node.left) return node.right;          // только правый ребёнок
    if (!node.right) return node.left;          // только левый ребёнок
 
    // два ребёнка: берём минимум из правого поддерева
    let minRight = node.right;
    while (minRight.left) {
      minRight = minRight.left;
    }
    node.data = minRight.data;
    node.right = this.removeNode(node.right, minRight.data);
    return node;
  }
 
  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }
 
  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}
 
module.exports = {
  BinarySearchTree
};