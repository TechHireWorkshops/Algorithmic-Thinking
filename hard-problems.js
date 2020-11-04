//Count number of teams

// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

// Example 1:
// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

// Example 2:
// Input: rating = [2,1,3]
// Output: 0
// Explanation: We can't form any team given the conditions.

// Example 3:
// Input: rating = [1,2,3,4]
// Output: 4

const numTeams = rating => {
  let output = 0;
  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        const result = rating
          .slice(j + 1)
          .filter(element => element > rating[j]);
        output += result.length;
      }
      if (rating[j] < rating[i]) {
        const result = rating
          .slice(j + 1)
          .filter(element => element < rating[j]);
        output += result.length;
      }
    }
  }
  return output;
};

console.log(numTeams([2, 3, 6, 4, 1, 5]));

//======================================================================

// Group the people given the group size they belong to

// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

// Return a list of groups such that each person i is in a group of size groupSizes[i].

// Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

// Example 1:
// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
// Explanation:
// The first group is [5]. The size is 1, and groupSizes[5] = 1.
// The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
// The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
// Other possible solutions are[[2, 1, 6], [5], [0, 4, 3]] and[[5], [0, 6, 2], [4, 3, 1]].

// Example 2:
// Input: groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]

const groupSizes = groupSizes => {
  const arr = [];
  const groups = {};

  groupSizes.forEach((size, index) => {
    if (!groups[size]) {
      groups[size] = [index];
    } else {
      groups[size].push(index);
    }
  });
  console.log(Object.entries(groups));
  Object.entries(groups).forEach(set => {
    let size = parseInt(set[0]);
    if (set[1].length === size) {
      arr.push(set[1]);
    } else {
      for (let i = 0; i <= size; i += size) {
        arr.push(set[1].slice(i, i + size));
      }
    }
  });
  return arr;
};

console.log(groupSizes([1, 2, 3, 3, 3, 3, 3, 2, 3]));