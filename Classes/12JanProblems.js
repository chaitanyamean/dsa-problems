// Q1. Longest Consecutive Sequence

function longConsectiveSeq(A) {
  // A.sort((a,b) => a-b);
  // console.log(A)

  //Fan out Method
  //O(N)
  const set = new Set(A); //Init a set with all the A
  let maxLength = 0; //Result
  for (const num of A) {
    if (!set.has(num)) continue; //If the number has been removed before, continue
    set.delete(num); //Remove the current number from the set

    //Fan out to the left to find any adjacent numbers
    let start = num;
    while (set.has(start - 1)) {
      set.delete(start - 1); //Remove them from the set
      start--; //Decrement the left pointer
    }
    //Fan out to the right to find any adjacent numbers
    let end = num;
    while (set.has(end + 1)) {
      set.delete(end + 1); //Remove them from the set
      end++; //Increment the left pointer
    }
    maxLength = Math.max(maxLength, end - start + 1); //Try to update the new max length
  }
  return maxLength;
}

let A = [100, 4, 200, 1, 3, 2];

// console.log(longConsectiveSeq(A))

// sub array with 0 sum
function subArrayWithZero(A) {
  console.log(A);
  const set = new Set();
  let sum = 0;

  for (let i = 0; i <= A.length; i++) {
    sum += A[i];
    if (sum == 0 || set.has(sum)) {
      return 1;
    }
    set.add(sum);
  }
  return 0;
}

// console.log(subArrayWithZero([1,-1]))

// Q2. Colorful Number

function colorfulNumber(A) {
  let arr = [];

  while (A) {
    arr.push(A % 10);
    A = Math.floor(A / 10);
  }

  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = i; j < arr.length; j++) {
      product *= arr[j];
      if (set.has(product)) {
        return 0;
      }
      set.add(product);
    }
  }
  return 1;
}

// console.log(colorfulNumber(26))

// Q1. Sort Array in given Order

function sortArrayInGivenOrder(A, B) {
  //     Loop through A1[], store the count of every number in a HashMap (key: number, value: count of number)
  // Loop through A2[], check if it is present in HashMap, if so, put in output array that many times and remove the number from HashMap.
  // Sort the rest of the numbers present in HashMap and put in the output array.
 // https://stackoverflow.com/questions/16507866/iterate-through-a-map-in-javascript/54550693
  let mp = new Map();
    A1.sort((a,b) => a-b)
  for (let i = 0; i < A.length; i++) {
    if (mp.has(A[i])) {
      let num = mp.get(A[i]) + 1;
      mp.set(A[i], num);
    } else {
      mp.set(A[i], 1);
    }
  }

  console.log(mp);

  let arr = []
  for (let j = 0; j < B.length; j++) {
      if(mp.has(B[j])) {
        let num = mp.get(B[j])
        while(num>0) {
            arr.push(B[j])
            num--
        }
        mp.set(B[j],0)
      }
  }

  for (const [key, value] of mp.entries()) {
    let num = value
    if(value > 0) {
        while(num>0) {
            arr.push(key)
            num--
        }
    }
  }

  console.log(arr, mp)
  return arr;


}

let A1 = [15, 5, 10, 6, 14],
  B1 = [8, 16, 6, 2, 13, 1, 12, 3, 14];

sortArrayInGivenOrder(A1, B1);
