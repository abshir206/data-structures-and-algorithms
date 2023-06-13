'use strict';
const {Graph} = require('../challenge-35/index');

describe('Code Challenge 38: Graphs depth first', () => {
  let graph = new Graph();
  graph.addNode('A');
  graph.addNode('B');
  graph.addNode('C');
  graph.addNode('D');
  graph.addNode('E');
  graph.addNode('F');
  graph.addNode('G');
  graph.addNode('H');

  let nodes = graph.getNodes();
  let nodeA = nodes[0];
  let nodeB = nodes[1];
  let nodeC = nodes[2];
  let nodeD = nodes[3];
  let nodeE = nodes[4];
  let nodeF = nodes[5];
  let nodeG = nodes[6];
  let nodeH = nodes[7];

  graph.addEdge(nodeA, nodeB);
  graph.addEdge(nodeA, nodeD);

  graph.addEdge(nodeB, nodeA);
  graph.addEdge(nodeB, nodeC);
  graph.addEdge(nodeB, nodeD);

  graph.addEdge(nodeC, nodeB);
  graph.addEdge(nodeC, nodeG);

  graph.addEdge(nodeD, nodeA);
  graph.addEdge(nodeD, nodeB);
  graph.addEdge(nodeD, nodeE);
  graph.addEdge(nodeD, nodeH);
  graph.addEdge(nodeD, nodeF);

  graph.addEdge(nodeE, nodeD);

  graph.addEdge(nodeF, nodeD);
  graph.addEdge(nodeF, nodeH);

  graph.addEdge(nodeG, nodeC);

  graph.addEdge(nodeH, nodeD);
  graph.addEdge(nodeH, nodeF);

  test('Should be able to return a list of the nodes depth first', () => {

    expect(graph.graphDepthFirst(nodeA)).toEqual(['A','B','C','G','D','E','H','F']);
  });
});
