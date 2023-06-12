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

  append (val) {
    let node = new ListNode(val);
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
    while(current.data !== val){
      current = current.next;
    }
    if(this.length){
      let after = current.next;
      current.next = insertNode;
      insertNode.next = after;
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

module.exports = {LinkedList, ListNode};
