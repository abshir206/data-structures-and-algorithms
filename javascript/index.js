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


}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = {LinkedList, ListNode};
