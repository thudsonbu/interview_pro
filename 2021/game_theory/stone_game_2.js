
// Alice and Bob continue their games with piles of stones.  There are a number
// of piles arranged in a row, and each pile has a positive integer number of
//  stones piles[i].  The objective of the game is to end with the most stones.

// Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

// On each player's turn, that player can take all the stones in the first X
// remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

// The game continues until all the stones have been taken.

// Assuming Alice and Bob play optimally, return the maximum number of stones
// Alice can get.

/**
 * @param {number[]} piles
 * @return {number}
 */
function stoneGameII( piles ) {
  
};

console.log( stoneGameII( [ 1, 2, 3 ] ) );
