'use strict';
// const nums = [1,2,1,3,2,1,5,5,4,7,3,8,3,9,5,8,3,0,5,7];
//
// let a = nums.sort().filter((el, i, arr) => arr.indexOf(el) === i);
// console.log(a);
//
// function isPalindrome(str) {
//   let revStr = str.split('').reverse().join('');
//   return str === revStr;
// }
// let val = isPalindrome('racecark');
//
// console.log(val);

// Rev Integer
// function revInt(int) {
//   let revInt = int
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   return parseInt(revInt) * Math.sign(int);
// }

// Capitalize Letter
// function capStr(str) {
  // let strArr = str.toLowerCase().split(' ');

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0,1).toUpperCase() +
  //   strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  //////////////////////

//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(' ');
// }

// Return Max Character

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 1;
  let maxChar;

  str.split('').forEach(char => {
    if (charMap[char]) {
      charMap[char] ++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum ++;
      maxChar = char;
    }
  }
  return maxChar;
}


// control
let val = maxCharacter('javascript');
console.log(val);

// syntax practice
const equip = {item1: 'sandbag', item2: 'kettlebell', item3: 'jumprope'};
const modalities = ['sandbag', 'calisthenics', 'barbell', 'kettlebell', 'HIIT', 'cardio', 'walking'];
const stuff = [1, 2, 3, ...modalities];

let {item1:x, item2:y, item3:z} = equip;

let [a, b, c, ...d] = modalities;


console.log(stuff);




//
