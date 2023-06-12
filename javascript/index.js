'use strict';

function hashJoin (map1, map2) {
  let results = [];
  let keys = getKeys(map1, map2);
  for(let i=0; i<keys.length; i++){
    let keyVals = [keys[i], null, null];
    if(map1[keys[i]]){
      keyVals[1] = map1[keys[i]];
    }
    if(map2[keys[i]]){
      keyVals[2] = map2[keys[i]];
    }
    results[i] = keyVals;
  }
  return results;
}

function getKeys (map1, map2) {
  let keys = Object.keys(map1);
  let keys2 = Object.keys(map2);
  for(let i=0; i<keys2.length; i++){
    if(!map1[keys2[i]]){
      keys.push(keys2[i]);
    }
  }
  return keys;
}

module.exports = {hashJoin};
