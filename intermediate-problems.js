// Sales by match

// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are 7 socks with colors [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Your function must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

const pairs = (n, arr) => {
  //Find number of pairs in array
  //sort array
  //Take one sock, look for match, set aside
  //take sock
  //go through the rest to see if any match
  //if we find match, set them aside
  //return matches
  let matches = 0;
  arr = arr.sort((a, b) => a - b);

  //option 1:
  // while (arr.length > 0) {
  //   let firstSock = arr.shift();
  //   if (firstSock === arr[0]) {
  //     matches++;
  //     arr.shift();
  //   } else {
  //   }
  // }

  //option 2:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      matches++;
      i++;
    }
  }
  return matches;
};

console.log(pairs(12, [2, 2, 2]));

//======================================================================
// Save the Prisoner

// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

// For example, there are 4 prisoners and 6 pieces of candy. The prisoners arrange themselves in seats numbered 1 to 4. Let's suppose two is drawn from the hat. Prisoners receive candy at positions 2,3,4,1,2,3. The prisoner to be warned sits in chair number 3.

// saveThePrisoner has the following parameter(s):

// n: an integer, the number of prisoners
// m: an integer, the number of sweets
// s: an integer, the chair number to begin passing out sweets from

const saveThePrisoner = (n, m, s) => {
  //take number of prisoners, find how many will get the 'extra' pieces
  //the number of extra candy, added to the starting position will give us the bad candy position
  let extras = m % n;
  let seat = s + extras - 1;
  if (seat > n) {
    seat = seat % n;
  }
  return seat;
};

console.log(saveThePrisoner(5, 2, 4));

//==================================================================

// Drawing Book
// A teacher asks the class to open their books to a page number.A student can either start turning pages from the front of the book or from the back of the book.They always turn pages one at a time.When they open the book, page 1 is always on the right side.

// When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

//   n = 5, p = 3
// If the student wants to get to page 3, they open the book to page 1, flip 1 page and they are on the correct page. If they open the book to the last page, page 5, they turn 1 page and are at the correct page.Return 1.

const drawingBook = (n, p) => {
  //start from one, add page turns till we find it
  //start from n, subtract page turns till we find it
  let turns = 0;
  let middle = n / 2;
  // if (p < middle) {
  //   for (let i = 1; i < middle; i += 2) {
  //     if (i === p || i - 1 === p) {
  //       return turns;
  //     }
  //     turns++;
  //   }
  // } else {
  //   for (let i = n; i > middle; i -=2) {
  //     if (i === p || i - 1 === p) {
  //       return turns;
  //     }
  //     turns++;
  //   }
  // }
  if (p < middle) {
    return Math.ceil((p - 1) / 2);
  } else {
    return Math.floor((n - p) / 2);
  }
};

console.log(drawingBook(13, 7));
