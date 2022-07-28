const anagrams = (s1, s2) => {
    let count = {};
    
    if (s1.length != s2.length) {
      return false;
    } else {
      for(let char of s1) {
        if(!(char in count)) {
          count[char] = 0;
        }
        count[char] += 1;
      }
      
      for(let char of s2) {
       // if(count[char]) {
        if(char in count) {
          count[char] -= 1;
        } else {
          return false;
        }
      }
      
      for(const char in count) {
        if(count[char] != 0) {
          return false;
        } else {
          return true;
        }
      }
    }
   console.log(count);
  };
  
anagrams('restful', 'fluster');
anagrams('restfuf', 'fluster');
anagrams('cat', 'dog');
anagrams('house', 'dog');
