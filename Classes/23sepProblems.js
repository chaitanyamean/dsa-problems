//

function minSubSortedArray(A) {
  let B = [...A];
  B.sort((a, b) => a - b);
  console.log(A, B);
  let left = 0;
  let right = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == B[i]) {
      left++;
    } else {
      break;
    }
  }

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] == B[i]) {
      console.log(A[i], B[i]);
      right++;
    } else {
      break;
    }
  }

  right = A.length - right;

  let ans = right - left;

  // console.log(left, right, ans);
}

// minSubSortedArray([-146316343, 179840175, 760528516])

// Contigous Array

function contigousArray(A) {
  let larNum = 0;
  let sum = 0;

  let map = new Map();

  for (let i = 0; i < A.length; i++) {
    if (A[i] == 1) {
      sum += 1;
    } else {
      sum = sum - 1;
    }

    if (sum == 0) {
        if(larNum < i+1) {
            larNum = i+1
        }
    } else if (map.has(sum)) {
      let val = map.get(sum);
      let num = i - val;
      if (num > larNum) {
        larNum = num;
      }
    } else {
      map.set(sum, i);
    }
  }
  console.log(map, larNum);
}

// contigousArray([1, 1, 0, 0, 1, 1, 0, 1, 1]);


///  SUM the difference

function sumTheDiff(A) {
  console.log(A);

  let min = 0;
  let max = 0;
  let n = A.length;
  A.sort((a,b) => a-b)
  let val2 = 1
  let mod = 1000000007
  for(let i =0;i<A.length; i++) {
    let add = val2 * A[i]
    max += add
    val2 = val2 * 2
    val2 %= mod
    max %= mod
    
  }
    let minVal = 1
  for(let i=n-1; i>=0;i--) {
      let add = A[i] * minVal
      min += add
      min %= mod
      minVal = minVal * 2
      minVal %= mod
  }
  
  return max - min;
}


// console.log(sumTheDiff([1,3,2,5,7]))


// Minimum Difference Puzzle

function minDiffPuzzle(A,B) {
  A.sort((a,b) => a-b)
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE
  let res = 1000000000
  let n = A.length
  // n-B = 6-2
  // 5 7 10 10 12 22
  for(let i =0; i<=n-B; i++) {
    console.log(A[i], A[i+B-1]);
    min = A[i]
    max = A[i+B-1]
    res = Math.min(res, max-min)
  }
  console.log(res);
  return res;
// console.log(min, max);
//     let curr_sum = res
//   for(let i = B; i<A.length; i++) {
//         console.log(B, A[i], A[i-B+1]) //B i
//         min = Math.min(min,A[i-B+1])
//         max = Math.max(max, A[i-B+1])
//         res = max-min
//   }
//   console.log(min, max);

  // console.log(A, data, min, max);
}

let A=[10, 12, 10, 7, 5, 22]
let B=4

minDiffPuzzle(A,B)



// 1. Understanding the problem statement
// 2. Intution what mistakes did I Do
// 3. corner cases/ Errors/Debug/ index problems/ index became -ve/ forgot [] base condition
