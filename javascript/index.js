'use strict';

function mergeSort (arr){
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
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr){
  let i=0;
  let j=0;
  let k=0;
  while(i<left.length && j<right.length){
    if(left[i] <= right[j]){
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

module.exports = {mergeSort};
