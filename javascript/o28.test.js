'use strict';

const {mergeSort} = require('./index');

describe('Code Challenge 28: Merge Sort for Objects', () => {
  test('Should sort any array', () => {
    let arr = [
      {
        title: 'The Gladiator',
        year: 2001
      },
      {
        title: 'Seven',
        year: 1995
      },
      {
        title: 'Memento',
        year: 2000
      },
      {
        title: 'Inseption',
        year: 2008
      },
      {
        title: 'A Beautiful Mind',
        year: 2002
      },
      {
        title: 'An Something?',
        year: 2003
      }
    ];


    mergeSort(arr, 'year');
    let years = arr.map(obj => obj.year);
    expect(years).toEqual([1995, 2000, 2001, 2002, 2003, 2008]);

    mergeSort(arr, 'title');
    console.log(arr);
    let titles = arr.map(obj => obj.title);
    expect(titles).toEqual(['A Beautiful Mind', 'The Gladiator', 'Inseption', 'Memento', 'Seven', 'An Something?']);
  });
});
