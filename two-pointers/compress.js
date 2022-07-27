const compress = (s) => {
    let results = [];
    let i = 0;
    let j = 0;
    
    while(j < s.length) {
  
      if(s[i] === s[j]) {
        j += 1;
      } else {
         //let num = s.slice(i, j).length
         let num = j - i;
         if (num <= 1) {
           results.push(s[i]);
         } else {
           results.push(num, s[i]);
         }
         i = j;
         j += 1;
      }
      
      if(j === s.length - 1) {
        let num = s.slice(i, j).length + 1;
        results.push(num, s[i]);
      }
    }
    
    return results.join('');
};
  
  