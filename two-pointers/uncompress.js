const uncompress = (s) => {
    const numbers = '0123456789';
    let j = 0;
    let i = 0;
    let results = [];
    
    while(j < s.length) {
      if(numbers.includes(s[j])) {
        j += 1;
      } else {
        let num = Number(s.slice(i, j));
        for(let count = 0; count < num; count +=1) {
          results.push(s[j]);
        }
        j+=1;
        i = j;
      }
    }
    
    return results.join('');
};
  