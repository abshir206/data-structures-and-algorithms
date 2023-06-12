'use strict';

// Require our linked list implementation
const {BinarySearchTree, tree_intersection} = require('./treeIntersection/tree-intersection');

describe('Code Challenge 14: BinarySearchTree', () => {
  test('Should add nodes to the correct places in a BST', () => {
    let tree = new BinarySearchTree;
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(6);
    tree.add(13);

    let tree1 = new BinarySearchTree;
    tree1.add(11);
    tree1.add(6);
    tree1.add(16);
    tree1.add(7);
    tree1.add(14);

    let tree2 = tree;

    let tree3 = new BinarySearchTree;
    tree3.add(6);
    tree3.add(6);
    tree3.add(6);
    tree3.add(6);
    tree3.add(6);

    expect(tree_intersection(tree, tree1)).toEqual([6]);
    expect(tree_intersection(tree, tree2)).toEqual([10, 5, 15, 6, 13]);
    expect(tree_intersection(tree, tree3)).toEqual([6]);
  });

});
