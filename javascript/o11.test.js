'use strict';

// Require our linked list implementation
const {PseudoQueue} = require('./index');

describe('Code Challenge 11: Stack-Queue Pseudo', () => {
  test('Should be able to enqueue to the end of a newly created Queue and dequeue should return the value that was just enqueued', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  test('Should be able to dequeue off the end of a queue that has multiple nodes if nodes were enqueued and dequeued in order', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(11);
    queue.enqueue(111);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(11);
    expect(queue.dequeue()).toEqual(111);
    expect(queue.dequeue()).toEqual('Q is empty');
  });

  test('Should be able to dequeue off the end of a queue that has multiple nodes if nodes were enqueued and dequeued out of order', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(11);
    queue.enqueue(111);
    expect(queue.dequeue()).toEqual(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(11);
    expect(queue.dequeue()).toEqual(111);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual('Q is empty');
  });

});
