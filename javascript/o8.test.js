'use strict';

// Require our linked list implementation
const {LinkedList, ListNode, zipLists} = require('../index');

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

xdescribe('Code Challenge 07', () => {
  test('test 1. Should return exeption if k is greater than the length of the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    expect(list.kthFromEnd(4)).toEqual('Exeption: input is not valid');
  });

  test('test 2. Should return head value if k is the same length as the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    expect(list.kthFromEnd(3)).toEqual(1);
  });

  test('test 3. Should return exeption if k is a negative integer', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    expect(list.kthFromEnd(-1)).toEqual('Exeption: input is not valid');
  });

  test('test 4. Should return the value at head if list length is 1', () => {
    let list = new LinkedList();
    list.append(1);

    expect(list.kthFromEnd(0)).toEqual(1);
  });

  test('test 5. Happy Path - Should return value at node k from the end of the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(11);
    list.append(111);

    expect(list.kthFromEnd(1)).toEqual(11);
  });
});

describe('Code Challenge 08', () => {
  test('test 1. zip 2 linked lists of equal length', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(11);
    list1.append(111);

    let list2 = new LinkedList();
    list2.append(2);
    list2.append(22);
    list2.append(222);

    expect(zipLists(list1, list2).size).toEqual(6);
  });

  test('test 2. zip 2 linked lists where list1 is LONGER than list2', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(11);
    list1.append(111);
    list1.append(1111);

    let list2 = new LinkedList();
    list2.append(2);
    list2.append(22);
    list2.append(222);

    let list = zipLists(list1, list2);
    console.log(list.vals());
    expect(list.size).toEqual(7);
  });

  test('test 2. zip 2 linked lists where list1 is SHORTER than list2', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(11);
    list1.append(111);

    let list2 = new LinkedList();
    list2.append(2);
    list2.append(22);
    list2.append(222);
    list1.append(2222);

    let list = zipLists(list1, list2);
    console.log(list.vals());
    expect(list.size).toEqual(7);
  });
});
