function countCharacterOccurrences(str) {
    const charCount = {};
  
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }
  
  console.log(countCharacterOccurrences("hello")); 

  
  console.log(countCharacterOccurrences("character"));