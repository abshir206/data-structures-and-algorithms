'use strict';

function mergeSort (arr, comp){
  let n = arr.length;
  if(n>1){
    let mid = Math.floor(n/2);
    let left = [];
    for(let i=0; i<mid; i++){
      left[i] = arr[i];
    }
    let right = [];
    let j = 0;
    for(let i=mid; i<arr.length; i++){
      right[j] = arr[i];
      j++;
    }
    mergeSort(left, comp);
    mergeSort(right, comp);
    if(comp==='title'){
      mergeString(left, right, arr);
    }
    if(comp==='year'){
      mergeNum(left, right, arr);
    }
  }
}

function mergeString(left, right, arr){
  console.log('In mergeStrings');
  console.log('left: ', left);
  console.log('right: ', right);

  let i=0;
  let j=0;
  let k=0;
  while(i<left.length && j<right.length){
    if(compareStrings(left[i].title, right[j].title) < 0){
      arr[k] = left[i];
      i = i+1;
    }
    else{
      arr[k] = right[j];
      j = j+1;
    }
    k = k+1;
  }
  if(i===left.length){
    while(arr[k]){
      arr[k] = right[j];
      k = k+1;
      j = j+1;
    }
  }
  else{
    while(arr[k]){
      arr[k] = left[i];
      k = k+1;
      i = i+1;
    }
  }
}

function mergeNum(left, right, arr){
  let i=0;
  let j=0;
  let k=0;
  while(i<left.length && j<right.length){
    if(compareNums(left[i].year, right[j].year) > 0){
      arr[k] = left[i];
      i = i+1;
    }
    else{
      arr[k] = right[j];
      j = j+1;
    }
    k = k+1;
  }
  if(i===left.length){
    while(arr[k]){
      arr[k] = right[j];
      k = k+1;
      j = j+1;
    }
  }
  else{
    while(arr[k]){
      arr[k] = left[i];
      k = k+1;
      i = i+1;
    }
  }
}

function compareNums (a, b) {
  return b - a;
}

function compareStrings(a, b){
  // check if either of the strings has 'a', 'an', or 'the'
  let regex = /A |The |An /gm;
  let a1 = a.replace(regex, '');
  let b1 = b.replace(regex, '');

  if(a1>b1){
    return 1; //string b goes behind string a
  }
  else if(a1<b1){
    return -1; //string a goes behind string b
  }
  return 0;
}

module.exports = {mergeSort};
