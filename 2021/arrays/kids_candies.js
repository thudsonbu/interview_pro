// Given the array candies and the integer extraCandies, where candies[i]
// represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among
// the kids such that he or she can have the greatest number of candies among
// them. Notice that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  let out = [];

  candies.forEach( c => {
    if (c > max) { max = c };
  });

  candies.forEach( c => {
    if ((c + extraCandies) >= max) {
      out.push(true);
    } else {
      out.push(false);
    }
  });
  
  return out;  
};