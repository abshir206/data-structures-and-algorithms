'use strict';

class LinkedList {
  constructor(head) {
    this.head = head;
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
    let current = this.head;
    if(!this.head){
      this.head = node;
    }
    else{
      while(current.next){
        current = current.next;
      }
      current.next = node;
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

}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = {LinkedList, ListNode};
