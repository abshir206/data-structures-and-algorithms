'use strict';

// Require our linked list implementation
const {BinarySearchTree} = require('./index');

describe('Code Challenge 16: Find max vaue', () => {
  test('Should return the highest value in a tree', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(6);
    tree.add(13);

    expect(tree.maxValue()).toEqual(15);
  });

});
