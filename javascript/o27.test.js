'use strict';

const {mergeSort} = require('./index');

describe('Code Challenge 27: Merge Sort', () => {
  test('Should sort any array', () => {
    let arr = [8,4,23,42,16,15];
    mergeSort(arr);
    let reverseSorted = [20,18,12,8,5,-2];
    mergeSort(reverseSorted);
    let fewUniques = [5,12,7,5,5,7];
    mergeSort(fewUniques);
    let nearlySorted = [2,3,5,7,13,11];
    mergeSort(nearlySorted);

    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
    expect(reverseSorted).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(fewUniques).toEqual([5, 5, 5, 7, 7, 12]);
    expect(nearlySorted).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
