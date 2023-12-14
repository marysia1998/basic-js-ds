const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    let node = new Node(data)
    if(this.base == null) {
        this.base = node
    } else{
        this.insertNode(node,this.base)
    }
  }

  insertNode(newNode, node) {
    if(node.data > newNode.data) {
        if(node.left== null) {
            node.left = newNode
        } else {
            this.insertNode(newNode, node.left)
        }
    } else {
        if(node.right == null) {
            node.right = newNode
        } else {
            this.insertNode(newNode, node.right)
        }
    }
}

  has(data) {
    if(this.base == null) {
      return false;
  } else {
     return this.hasNode(data, this.base)
  }
  }

  hasNode(data, node) {
    if(node==null) {
        return false;
    }
    if(node.data == data) {
        return true;
    }
    if(node.data < data) {
        return this.hasNode(data, node.right)
    } else {
        return this.hasNode(data, node.left)
    }
  }

  find(data) {
    if(this.base == null) {
      return null;
  } else {
     return this.findNode(data, this.base)
  }
  }

  findNode(data, node) {
    if(node==null) {
      return null;
  }
  if(node.data == data) {
      return node;
  }
  if(node.data < data) {
      return this.findNode(data, node.right)
  } else {
      return this.findNode(data, node.left)
  }
  }

  remove(data) {
    this.base = this.removeNode(data, this.base);
  }

  removeNode(data, node) {
    if(node == null) {
      return null;
    }

    if(node.data > data) {
        node.left = this.removeNode(data, node.left);
        return node;

    } else if(node.data < data){
      node.right = this.removeNode(data, node.right)
      return node;
    } else if(node.data == data) {
       if(node.left == null && node.right == null) {
        node = null
        return node;
      }
      else if(node.left == null) {
        node = node.right
        return node;
      } else if(node.right == null) {
        node = node.left
        return node;

      } else {
        let newData = this.maxNode(node.left)
      node.data = newData
      node.left = this.removeNode( newData, node.left)
      return node;
      }
    }
  }

  min() {
    if(this.base == null) {
      return null;
    }
    if(this.base.left == null) {
      return this.base.data
    } else
    {
      return this.minNode(this.base.left)
    }
  }

  minNode(node) {
    if(node.left == null) {
      return node.data
    } else{
      return this.minNode(node.left);
    }
  }

  max() {
    if(this.base == null) {
      return null;
    }
    if(this.base.right == null) {
      return this.base.data
    } else
    {
      return this.maxNode(this.base.right)
    }
  }

  maxNode(node) {
    if(node.right == null) {
      return node.data
    } else{
      return this.maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};