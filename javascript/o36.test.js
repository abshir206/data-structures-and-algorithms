'use strict';

const {Graph} = require('../challenge-35/index');
const {breadthFirst} = require('./index');

describe('Code Challenge 36: Graphs Breadth First', () => {
  let graph = new Graph();
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addNode(4);
  graph.addNode(5);
  graph.addNode(6);

  let nodes = graph.getNodes();
  let node1 = nodes[0];
  let node2 = nodes[1];
  let node3 = nodes[2];
  let node4 = nodes[3];
  let node5 = nodes[4];
  let node6 = nodes[5];

  graph.addEdge(node1, node2);

  graph.addEdge(node2, node1);
  graph.addEdge(node2, node3);
  graph.addEdge(node2, node4);

  graph.addEdge(node3, node2);
  graph.addEdge(node3, node4);
  graph.addEdge(node3, node5);
  graph.addEdge(node3, node6);

  graph.addEdge(node4, node2);
  graph.addEdge(node4, node3);
  graph.addEdge(node4, node6);

  graph.addEdge(node5, node3);
  graph.addEdge(node5, node6);

  graph.addEdge(node6, node3);
  graph.addEdge(node6, node4);
  graph.addEdge(node6, node5);

  test('Should be able to perform a proper breadth first traversal', () => {
    let arr = breadthFirst(node1, graph);
    let vals = arr.map(node => node.data);
    console.log(vals);
    expect(vals).toEqual([1,2,3,4,6,5]);
  });
});
