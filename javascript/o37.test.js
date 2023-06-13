'use strict';
const {Graph} = require('../challenge-35/index');
const {businessTrip} = require('./index');

describe('Code Challenge 37: Graphs BusinessTrip', () => {
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

  graph.addEdge(node1, node2, 150);

  graph.addEdge(node2, node1);
  graph.addEdge(node2, node3);
  graph.addEdge(node2, node4, 50);

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

  test('Should be able to get the cost of a trip (edge sum for node data array being passed in)', () => {

    expect(businessTrip(graph, [1, 2, 4])).toEqual(200);
  });
  test('Should return null if that trip doesnt exist', () => {

    expect(businessTrip(graph, [1, 3])).toEqual(null);
  });
});
