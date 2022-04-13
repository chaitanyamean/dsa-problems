function maxAbDifference(A) {
  // console.log(A);
  let n = A.length;
  let max_1 = Number.MIN_SAFE_INTEGER;
  let max_2 = Number.MIN_SAFE_INTEGER;
  let min_1 = Number.MAX_SAFE_INTEGER;
  let min_2 = Number.MAX_SAFE_INTEGER;
  console.log(min_2, max_1);
  for (let i = 0; i < n; i++) {
    max_1 = Math.max(max_1, A[i] + i);
    max_2 = Math.max(max_2, A[i] - i);

    min_1 = Math.min(min_1, A[i] + i);
    min_2 = Math.min(min_2, A[i] - i);
  }
  console.log(max_1, min_1);
  let max_ans = Math.max(max_1 - min_1, max_2 - min_2);
  console.log(max_ans);
}

// A[i] - A[j] + i - j
// -A[i] + A[j] + i - j = -(A[i] - i) + (A[j] -j)

// maxAbDifference([1,3,-1])
// maxAbDifference([30, 74, 15, 49, 88, 77, 46, 48, 36, 62])
// maxAbDifference([-1000000000, -1000000000, -1000000000, -1000000000, -1000000000 ])

function addOneToNumber(A) {
  // Reverse the array
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      // avoid left side zeros
      A = A.slice(i);
      break;
    }
  }
  A.reverse();
  console.log(A);
  let carry = 0;
  for (let i = 0; i < A.length; i++) {
    if (i == 0) {
      let x = A[i] + 1;
      if (x > 9) {
        A[i] = x % 10;
        carry = x / 10;
      } else {
        A[i] = x;
      }
    } else {
      // if(A[i] == 0) A.pop()
      let x = A[i] + carry;
      carry = 0;
      if (x > 9) {
        A[i] = x % 10;
        carry = x / 10;
      } else {
        A[i] = x;
      }
    }
  }
  if (carry > 0) {
    A.push(1);
  }
  return A.reverse();
}

// console.log(addOneToNumber([1,2,3]))
// console.log(addOneToNumber([9,9,9]))
// console.log(addOneToNumber([2,2,9]))
// console.log(addOneToNumber([0,0,2,2,9]))
// console.log(addOneToNumber([3, 0, 6, 4, 0]))

function firstMissingInteger(A) {
  let n = A.length;
  for (let i = 0; i < n; i++) {
    console.log("IIOIOI", i);
    if (A[i] > 0 && A[i] <= n) {
      if (A[A[i] - 1] != A[i]) {
        console.log("A[A[i]-1]", A[A[i] - 1], A[i], i);
        // swap
        let temp = A[A[i] - 1];
        A[A[i] - 1] = A[i];
        A[i] = temp;
        console.log("IIIIIII", i);
        i--;
        console.log("AAA", A, i);
      }
    }
  }
  console.log(A);
}

// firstMissingInteger([3,4,-1,1])

// Q3. Merge Intervals
function mergeIntervals(intervals, new_intervals) {
  const merged = [];
  let total = [...intervals, new_intervals];
  total.sort((a, b) => a[0] - b[0]);
  // total.sort((a, b) => {
  //   if (a[0] == b[0]) return -a[1] + b[1];
  //   return a[0] - b[0];
  // });
  console.log("Total", total)
  let buffer = total[0];
  // console.log(buffer);
  for (let i = 1; i < total.length; i++) {
    if (total[i][0] <= buffer[1]) {
      buffer = [buffer[0], Math.max(buffer[1], total[i][1])];
      console.log("BB", buffer)
    } else {
      merged.push(buffer);
      buffer = total[i];
    }
  }
  merged.push(buffer);
  return merged;
}

console.log(
  mergeIntervals(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);


// Q4. Merge Overlapping Intervals

function mergeOverLappingIntervals(A) {
  // 
  let merged = []
  let buffered = A[0]
  for(let i = 1; i<A.length; i++) {
    if(A[i][0] <= buffered[1]) {
      buffered = [buffered[0], Math.max(buffered[1], A[i][1])]
    } else {
      merged.push(buffered)
      buffered = A[i]
    }
  }

  merged.push(buffered)
  return merged

    // 

}

let ABC = [[1,3],[2,6],[8,10],[15,18]]
let A111 = [ [1, 10], [2, 9], [3, 8], [4, 7], [5, 6], [6, 6] ]

console.log(mergeOverLappingIntervals(A111))