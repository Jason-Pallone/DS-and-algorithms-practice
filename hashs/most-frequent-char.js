/* 
Return most frequent charecter of a string
If there are ties, return the character that appears earlier in the string.
*/

const mostFrequentChar = (s) => {
    let count = {};
    let mostFrequent = null;

    for(let char of s) {
      if(!(count[char])){
        count[char] = 0
      };
      
      count[char] += 1;
    };

    for(let char of s) {
      if(mostFrequent === null || count[char] > count[mostFrequent]) {
        mostFrequent = char;
      };
    };

    console.log(mostFrequent);
    
    return mostFrequent;
};

module.exports = {
    mostFrequentChar,
};

mostFrequentChar('bookeeper');
mostFrequentChar('neon');
mostFrequentChar('mississippi');