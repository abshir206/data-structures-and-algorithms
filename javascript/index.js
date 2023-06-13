'use strict';

function breadthFirst(node, graph) {
  let nodes = [];

  function traverse(node1) {
    let nodesIncludesCurrentNode = false;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] === node1) {
        nodesIncludesCurrentNode = true;
      }
    }

    if (!nodesIncludesCurrentNode) { // meaning we've never traversed this exact node
      nodes = [...nodes, node1];
      let edges = graph.getNeighbors(node1);
      console.log('Edges of Node', node1.data, ':', edges);
      for (let i = 0; i < edges.length; i++) {
        traverse(edges[i].node);
      }
    }
  }
  traverse(node);

  return nodes;
}

module.exports = { breadthFirst };
