'use strict';

const { Node, Tree } = require('../tree.js');

describe('Test Tree data structure', () => {
  xtest('Can instatiate empty tree', () => {
    let emptyList = new Tree();
    expect(emptyList.head).toBeNull;
  });

  xtest('Can properly insert into Tree at specified position', () => {
    // test
  });

});
