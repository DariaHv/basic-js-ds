const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor()
    {
        // root of a binary search tree
        this.rootNode = null;
    }

  root() {
    
    return this.rootNode;
  }

  add( data) {
    let newNode = new Node(data);
    
    if(this.rootNode === null)
        this.rootNode = newNode;
    else
 
        // find the correct position in the
        // tree and add the node
        this.insertNode(this.rootNode, newNode);

  }

  insertNode(node, newNode)
{
    
    if(newNode.data < node.data)
    {
       
        if(node.left === null)
            node.left = newNode;
        else
 
            this.insertNode(node.left, newNode);
    }
 
 
    else
    {
     
        if(node.right === null)
            node.right = newNode;
        else
 
            this.insertNode(node.right,newNode);
    }
}

  has(data) {
    return !(this.search(this.rootNode,data)===null)
  }
  search(node, data)
{
   
    if(node === null)
        return null;
    else if(data < node.data)
        return this.search(node.left, data);
 
    else if(data > node.data)
        return this.search(node.right, data);
    else
        return node;
}

  find(data ) {
   return this.search(this.rootNode,data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
}

  removeNode(node, key)
{
    if(node === null)
        return null;
 
 
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }
 
 
    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
 
    else
    {
      
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
 
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}

  min() {
    return this.findMinNode(this.rootNode).data;
  }

  findMinNode(node)
{
    
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}

  max() {
    return this.findMaxNode(this.rootNode).data;
  }

findMaxNode(node)
{
    
    if(node.right === null)
        return node;
    else
        return this.findMaxNode(node.right);
}
}

module.exports = {
  BinarySearchTree
};