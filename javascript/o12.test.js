'use strict';

// Require our linked list implementation
const {AnimalShelter} = require('./index');

describe('Code Challenge 12: Stack/Queue Animal Shelter', () => {
  test('Should be able to enqueue an animal to the end of a newly created AnimalShelter and dequeue should return the value that was just enqueued', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog', 'betsy');
    expect(queue.dequeue('dog')).toEqual('dog: betsy');
  });

  test('Should be able to dequeue off the end of AnimalShelter that has multiple animals if nodes were enqueued and dequeued in order', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog', 'betsy');
    queue.enqueue('dog', 'Kirk');
    queue.enqueue('dog', 'big guy');
    expect(queue.dequeue('dog')).toEqual('dog: betsy');
    expect(queue.dequeue('dog')).toEqual('dog: Kirk');
    expect(queue.dequeue('dog')).toEqual('dog: big guy');
    expect(queue.dequeue('dog')).toEqual('Exception: Empty Queue');

    queue.enqueue('cat', 'betsy');
    queue.enqueue('cat', 'Kirk');
    queue.enqueue('cat', 'big guy');
    expect(queue.dequeue('cat')).toEqual('cat: betsy');
    expect(queue.dequeue('cat')).toEqual('cat: Kirk');
    expect(queue.dequeue('cat')).toEqual('cat: big guy');
    expect(queue.dequeue('cat')).toEqual('Exception: Empty Queue');
  });

  test('Should be able to dequeue off the end of a queue that has multiple nodes if nodes were enqueued and dequeued out of order', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog', 'betsy');
    queue.enqueue('dog', 'Kirk');
    queue.enqueue('dog', 'big guy');
    expect(queue.dequeue('dog')).toEqual('dog: betsy');
    queue.enqueue('dog', 'betsy');
    expect(queue.dequeue('dog')).toEqual('dog: Kirk');
    expect(queue.dequeue('dog')).toEqual('dog: big guy');
    expect(queue.dequeue('dog')).toEqual('dog: betsy');
    expect(queue.dequeue('dog')).toEqual('Exception: Empty Queue');
  });

});
