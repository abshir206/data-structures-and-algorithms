function firstDuplicate(str){
  let regex = /,|\.|\?|\!|\:|\;/gm;
  let newStr = str.toLowerCase().replace(regex, '');
  let map = {};

  let words = newStr.split(' ');
  for(let i=0; i<words.length; i++){
    if(map[words[i]]){
      return words[i];
    }
    map[words[i]] = 1;
  }
  return 'No Matches';
}

module.exports = {firstDuplicate};
