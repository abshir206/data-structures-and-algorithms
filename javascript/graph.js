'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  getVertex() {
    return [...this.adjacencyList.keys()];
  }

  size() {
    return this.adjacencyList.size;
  }

  addEdge(start, end, weight = 0) {
    if(!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      throw new Error("Invalid Vertices");
    }
    const edge = new Edge(end, weight);
    const adjacencies = this.adjacencyList.get(start);
    adjacencies.push(edge);
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
}

module.exports = Graph;
