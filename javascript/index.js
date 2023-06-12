'use strict';

class LinkedList {
  constructor(head) {
    this.head = head;
    this.end = head;
    this.size = head ? 1 : 0;
  }

  includes (val) {
    let current = this.head;
    while(current.next){
      if(current.data===val){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  length () {
    let length = 0;
    let current = this.head;
    while(current){
      length++;
    }
    this.size = length;
    return length;
  }

  vals () {
    let current = this.head;
    let str = '';
    while(current){
      str = str + `{ ${current.data} } -> `;
      current = current.next;
    }
    //console.log(str);
    str = str + 'NULL';

    return str;
  }

  append (node) {
    if(this.size===0){
      this.head = node;
      this.end = node;
      this.size = 1;
    }
    else{
      node.prev = this.end;
      this.end.next = node;
      this.end = node;
      this.size = this.size + 1;
    }
  }

  appendFront (val) {
    let node = new ListNode(val);
    if(this.size===0){
      this.head = node;
      this.end = node;
      this.size = 1;
    }
    else{
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.size = this.size + 1;
    }
  }

  insertBefore (val, insertVal){
    let insertNode = new ListNode(insertVal);
    let current = this.head;
    if(current.data === val){
      this.head = insertNode;
      insertNode.next = current;
    }
    else{
      while(current.next.data !== val){
        current = current.next;
        console.log(current);
      }
      if(this.length){
        let after = current.next;
        current.next = insertNode;
        insertNode.next = after;
      }
      else{this.append(val);}
    }
  }

  insertAfter(val, insertVal) {
    let insertNode = new ListNode(insertVal);
    let current = this.head;
    console.log(val);
    console.log(insertVal);
    while(current.data !== val){
      current = current.next;
    }
    if(this.size){
      let after = current.next;
      current.next = insertNode;
      insertNode.next = after;
      insertNode.prev = current;
      console.log(after);
      if(after){after.prev = insertNode;}
      this.size++;
    }
    else{this.append(val);}
  }

  kthFromEnd(n){
    //return the value of the node that is n(input) from the end of the linked list
    let end = this.end;
    if(n===0){
      return end.data;
    }
    else if(n===this.size){
      return this.head.data;
    }
    else if(n>this.size || n<0){
      return 'Exeption: input is not valid';
    }
    else{
      for(let i=0; i<n; i++){
        end = end.prev;
      }
      return end.data;
    }
  }

}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class PseudoQueue{
  constructor(){
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val){
    this.s1.push(val);
  }

  dequeue(){
    if (this.s1.size === 0 && this.s2.size === 0) {
      return 'Q is empty';
    }
    if (this.s2.size === 0) {
      while (this.s1.size !== 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

}

class Stack {
  constructor (){
    this.items = new LinkedList();
    this.size = 0;
  }

  push (val){
    this.items.appendFront(val);
    this.size = this.items.size;
  }

  pop (){
    if(this.items.head){
      let val = this.items.head.data;
      this.items.head = this.items.head.next;
      if(this.items.head){this.items.head.prev = null;}
      this.items.size--;
      this.size = this.items.size;
      return val;
    }else{return 'Exception: Empty Stack';}
  }

  peek (){
    if(this.items.head){
      return this.items.head.data;
    }else{return 'Exception: Empty Stack';}
  }

  isEmpty (){
    return this.items.size ? false : true;
  }
}

class Queue {
  constructor (){
    this.items = new LinkedList();
  }

  enqueue (node){
    return this.items.append(node);
  }

  dequeue (){
    if(this.items.head){
      //let val = this.items.head.data;
      let name = this.items.head.name;
      let species = this.items.head.species;
      this.items.head = this.items.head.next;
      if(this.items.head){this.items.head.prev = null;}
      this.items.size--;
      return `${species}: ${name}`;
    }else{return 'Exception: Empty Queue';}
  }

  peek (){
    if(this.items.head){
      return this.items.head.data;
    }else{return 'Exception: Empty Queue';}
  }

  isEmpty (){
    return this.items.size ? false : true;
  }
}

class Animal {
  constructor(name, species){
    this.name = name;
    this.species = species;
    this.next = null;
    this.prev = null;
  }
}

class AnimalShelter {
  constructor(){
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(species, name){
    if(species==='dog'){
      let animal = new Animal(name, species);
      this.dogs.enqueue(animal);
    }
    else if(species==='cat'){
      let animal = new Animal(name, species);
      this.cats.enqueue(animal);
    }
    else{return 'bad input';}
  }

  dequeue(species){
    if(species==='dog'){
      return this.dogs.dequeue();
    }
    else if(species==='cat'){
      return this.cats.dequeue();
    }
    else{return 'need species: cat or dog to dequeue';}
  }
}

function zipLists (list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;
  let size1 = list1.size;
  let size2 = list2.size;

  if(size1 && size2){
    while(size2){
      list1.insertAfter(current1.data, current2.data);
      current1 = current1.next.next;
      current2 = current2.next;
      size2--;
    }
    return list1;
  }
  else if(size1){return list1;}
  else if(size2){return list2;}
  else{return 'lists are empty';}
}

module.exports = {AnimalShelter, PseudoQueue, LinkedList, ListNode, Stack, Queue, zipLists};
