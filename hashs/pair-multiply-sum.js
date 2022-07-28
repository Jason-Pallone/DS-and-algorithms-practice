/*
The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.
*/

const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};

  for(let i = 0; i < numbers.length; i += 1){
    let num = numbers[i];
    let compliment = targetProduct / num;
    
    if(compliment in previousNums) {
        return [i, previousNums[compliment]]
    }

    previousNums[num] = i;
  }; 
};
  
  
  module.exports = {
    pairProduct,
  };
  