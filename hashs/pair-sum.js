/*
The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

const pairSum = (numbers, targetSum) => {
  const previousNums = {};
  
  for(let i=0; i < numbers.length; i += 1) {
    let num = numbers[i];
    let compliment = targetSum - num;
    
    if(compliment in previousNums) {
      return [i, previousNums[compliment]]
    };
      
      previousNums[num] = i;
  };
};

module.exports = {
  pairSum,
};

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([9, 9], 18); // -> [0, 1]