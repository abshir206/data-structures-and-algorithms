'use strict';

// Require our linked list implementation
const {hashJoin} = require('./index');

describe('Code Challenge 33: Hashmap Left Join', () => {
  test('Should return all keys plus values associated with them but joined', () => {
    let map1 = {
      1: 'no',
      2: 'No',
      3: 'nO',
    };

    let map2 = {
      1: 'yes',
      2: 'Yes',
      3: 'yEs',
      4: 'yeS'
    };

    console.log(hashJoin(map1, map2));

    //theres more than 3 test assertions in the following expect() because I could've checked each array individually. This even shows the edge case
    expect(hashJoin(map1, map2)).toEqual([
      [ '1', 'no', 'yes' ],
      [ '2', 'No', 'Yes' ],
      [ '3', 'nO', 'yEs' ],
      [ '4', null, 'yeS' ]
    ]);
  });

});
