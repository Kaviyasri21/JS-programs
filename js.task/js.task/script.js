function isPalindrome(str) {
    
    const processedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
   
    const reversedStr = processedStr.split('').reverse().join('');
    
 
    return processedStr === reversedStr;
  }
  

  console.log(isPalindrome("madam"));
  console.log(isPalindrome("malayalam")); 