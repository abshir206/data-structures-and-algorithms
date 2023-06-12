const Graph = require('./graph');
const graph = new Graph();

let ten = graph.addVertex(10);
let eight = graph.addVertex(8);

describe('Testing graphs', () => {
  test('Adding into graph', () => {
    expect(graph.size()).toEqual(2);
  })

  test('Add edge', () => {
    graph.addEdge(ten, eight, 5);
    console.log(graph.getNeighbors(ten)[0].vertex.value);

    expect(graph.getNeighbors(ten)[0].vertex.value).toEqual(8)
  })
})
