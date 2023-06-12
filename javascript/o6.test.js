'use strict';

// Require our linked list implementation
const {LinkedList, ListNode} = require('../index');

xdescribe('Linked List', () => {
  test('test 1. Should successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBeFalsy;
  });

  test('tests 2 and 3. Should properly insert into the linked list and point to the first node in the linked list', () => {
    let node1 = new ListNode(1);
    let list = new LinkedList(node1);
    expect(list.head).toEqual(node1);
  });

  test('test 4. Should properly insert multiple nodes into the linked list', () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    let list = new LinkedList(node1);

    expect(list.head).toEqual(node1);
    expect(node1.next).toEqual(node2);
    expect(node2.next).toEqual(node3);
  });

  test('tests 5 and 6. Will return true when finding a value within the linked list that exists, and false if it doesn\'t', () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    let list = new LinkedList(node1);

    expect(list.includes(2)).toEqual(true);
    expect(list.includes(4)).toEqual(false);
  });

  test('test 7. Can properly return a collection of all the values that exist in the linked list', () => {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    node1.next = node2;
    node2.next = node3;
    let list = new LinkedList(node1);

    expect(list.vals()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });



});

xdescribe('Code Challenge 06', () => {
  test('test 1 and 2. Should successfully add a Node (or multiple nodes) to the end of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    expect(list.vals()).toEqual('{ 1 } -> { 11 } -> { 111 } -> NULL');
  });

  test('test 3 & 5. Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    list.insertBefore(11,5);

    expect(list.vals()).toEqual('{ 1 } -> { 5 } -> { 11 } -> { 111 } -> NULL');
  });

  test('test 4. Can successfully insert a node before a node located in the beginning of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    list.insertBefore(1,5);

    expect(list.vals()).toEqual('{ 5 } -> { 1 } -> { 11 } -> { 111 } -> NULL');
  });

  test('test 6. Can successfully insert a node after a node located ANYWHERE in (including the end) the linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    list.insertAfter(1,5);
    list.insertAfter(111,6);

    expect(list.vals()).toEqual('{ 1 } -> { 5 } -> { 11 } -> { 111 } -> { 6 } -> NULL');
  });
});
