function solution(str) {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  //   return charCount;
  let repeatCount = 0;
  for (let char in charCount) {
    if (charCount[char] >= 2) {
      repeatCount++;
    }
  }
  return repeatCount;
}
console.log(solution("Hello"));
console.log(solution("123342111445214512"));
console.log(solution("EEee"));
