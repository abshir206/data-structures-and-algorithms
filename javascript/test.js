'use strict';

const {HashTable} = require('./HashTable');

describe('Code Challenge 30', () => {
  test('Should ...', () => {

    let table = new HashTable(10);

    // let position = table.hash('name');
    // console.log(position);


    table.set('name', 'Jacob');
    table.set('name', 'JB');
    table.set('animal', 'Kirk');
    console.log(table.get('name').head.value.name);
    console.log(table.keys());

    expect(table.get('name').head.value.name).toEqual('Jacob');
    expect(table.get('name').head.next.value.name).toEqual('JB');
    expect(table.get('test')).toBeFalsy();
    expect(table.keys()).toEqual(' 3 4');
  });
});
