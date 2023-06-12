'use strict';

// Require our linked list implementation
const {LinkedList, Stack, Queue, zipLists} = require('./index');

describe('Code Challenge 10: Stacks', () => {
  test('Should be able to push and peek the top of a stack if a new stack can be created', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.peek()).toEqual(1);
  });

  test('Should return true if stack has nodes, and false if the top of a stack is empty because of the pop method', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Should be able to pop off the top of a stack that has multiple nodes', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(11);
    stack.push(111);
    expect(stack.peek()).toEqual(111);
    stack.pop();
    expect(stack.peek()).toEqual(11);
    stack.pop();
    expect(stack.peek()).toEqual(1);
    stack.pop();
    expect(stack.peek()).toEqual('Exception: Empty Stack');
  });

});

describe('Code Challenge 10: Queues', () => {
  test('Should be able to enqueue to the end of a newly created Queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
  });

  test('Should return true if queue has nodes, and false if the front of a queue is empty because of the dequeue method', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  test('Should be able to dequeue off the end of a queue that has multiple nodes', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(11);
    queue.enqueue(111);
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    expect(queue.peek()).toEqual(11);
    queue.dequeue();
    expect(queue.peek()).toEqual(111);
    queue.dequeue();
    expect(queue.peek()).toEqual('Exception: Empty Queue');
  });

});
