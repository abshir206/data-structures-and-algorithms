'use strict';

// Require our linked list implementation
const {BinarySearchTree, treeFizzBuzz, breadthFirst} = require('./index');

describe('Code Challenge 14: BinarySearchTree', () => {
  test('Should add nodes to the correct places in a BST', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(6);
    tree.add(13);

    let newTree = treeFizzBuzz(tree);

    expect(breadthFirst(newTree)).toEqual(['Buzz','Buzz','FizzBuzz','Fizz','13']);
  });

});
