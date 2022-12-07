//const { NotImplementedError } = require("../extensions/index.js");*/

 const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 
/*class Node {
  constructor(data) {
      this.data = data; // значение
      this.left = null;   // ссылка на потомка слева
      this.right = null; // ссылка на потомка справа
  }
}*/

module.exports = class BinarySearchTree {
  constructor() {
    this.root_node = null; // корень bst
  }
  
  root() {
      return this.root_node;
  }

  add(data) {
      let newNode = new Node(data);
      if (this.root_node === null) 
      {
          this.root_node = newNode;
      } 
      else 
      {
          this.insertNode(this.root_node, newNode); // helper method below
      }
  }
  
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data) 
  {
    if (this.search(this.root_node, data) === null)
      return false;
    else
      return true;
  }
  
  search(node, data) {
    if (node === null) 
    {
        return null;
    }
    else 
    if (data < node.data) 
    {
        return this.search(node.left, data);
    } 
    else 
    if (data > node.data) 
    {
        return this.search(node.right, data);
    } 
    else 
    {
        return node;
    }
  }

  find(data) 
  {
      let newNode = this.search(this.root_node, data);
      
      return newNode;
  }

  remove(data)
  {
    this.root_node = this.removeNode(this.root_node, data); // helper method below
  }

  removeNode(node, data) 
  {
    if (node === null) 
    {
        return null;
    // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } 
    else 
    if (data < node.data) 
    {
      node.left = this.removeNode(node.left, data);
      return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } 
    else 
    if (data > node.data) 
    {
      node.right = this.removeNode(node.right, data);
      return node;
    // если данные такие как данные корня, удаляем узел
    } else 
    {
        // удаляем узел без потомков (листовой узел (leaf) или крайний)
        if (node.left === null && node.right === null) 
        {
            node = null;
            return node;
        }
        // удаляем узел с одним потомком
        if (node.left === null) 
        {
            node = node.right;
            return node;
        } 
        else 
        if(node.right === null) 
        {
            node = node.left;
            return node;
        }
        // удаляем узел с двумя потомками
        // minNode правого поддерева хранится в новом узле
        
        let newNode = this.findminnode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}
  
  findminnode(node) {
    if (node === null) 
    {
      return null;
    }
    else
    {
      if (node.left === null)
        return node;
      else
        return this.findminnode(node.left);
    }
    
  }

  min() 
  {
    if (this.findminnode(this.root_node) === null)
      return null;
    else
    {
      let newNode = this.findminnode(this.root_node);
      return newNode.data;
    }
  }
  
  findmaxnode(node) 
  {
    if (node === null) 
    {
      return null;
    }
    else
    {
      if (node.right === null)
         return node;
      else
         return this.findmaxnode(node.right);
    }
  }

  max() 
  {
    if (this.findmaxnode(this.root_node) === null)
      return null;
    else
    {
      let newNode = this.findmaxnode(this.root_node);
      return newNode.data;
    }
  }
};
