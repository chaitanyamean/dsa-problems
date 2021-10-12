console.log("21 sep class Assignments and problems");

// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
// NOTE:
// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

function isArrayEquilibrium(A) {
  console.log(A);

  let ls = 0;
  let total_sum = 0;
  let n = A.length;
  let rs = 0;
  // let cnt = 0;
  for (let i = 0; i < n; i++) {
    total_sum += A[i];
  }
  console.log(total_sum);
  for (let i = 0; i <= n - 1; i++) {
    rs = total_sum - A[i] - ls;
    console.log("LS and RS", ls, rs);
    if (ls == rs) return i;
    ls += A[i];
  }
  return -1;
}

// console.log(isArrayEquilibrium([-7, 1, 5, 2, -4, 3, 0]))

function minAbsoluteDifference(A) {
  let min_val = Number.MAX_VALUE;
  A.sort((a, b) => a - b);
  console.log(A);

  for (let i = 0; i < A.length - 1; i++) {
    let val = Math.abs(A[i] - A[i + 1]);
    if (min_val > val) {
      min_val = val;
    }
    min_val = Math.min(val, min_val);
    console.log(val);
  }

  console.log(min_val);
}

// minAbsoluteDifference([5,17,100,11])

// Maximum Difference
function maxAbsoluteDifference(A, B) {
  console.log(A);
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    total += A[i];
  }
  A.sort((a, b) => a - b);
  let n = A.length;
  let bArr = A.slice(n - B, n);
  let s1 = 0;
  bArr.forEach((element) => {
    s1 += element;
  });

  let s2 = total - s1;
  let ans = Math.max(2 * s1 - total, total - 2 * s1);
  console.log(ans);

  let bArr1 = A.slice(0, B);
  let s3 = 0;
  bArr1.forEach((element) => {
    s3 += element;
  });

  let s4 = total - s3;
  let ans2 = Math.max(2 * s3 - total, total - 2 * s3);
  console.log(ans2);
  return Math.max(ans, ans2);
}

// maxAbsoluteDifference([5,17,100,11], 3)
// maxAbsoluteDifference([1,2,3,4,5], 2)

// Examples of set

function findDistinctEleInWindowSubArray(A, B) {
  console.log(A, B);

  let n = A.length;
  let map = new Map();
  let arr = []

  for (let i = 0; i < B; i++) {
    if (map.has(A[i])) {
      let val = map.get(A[i]);
      map.set(A[i], val + 1);
    } else {
        map.set(A[i], 1)
    }
  }
  console.log(map.size, map)
  arr.push(map.size)
  for (let i = B; i < n; i++) {
    //   console.log(A[i]);
    //  Here we need to add A[i] and delete A[i-k] i = k here
    /**
     * i = k [i-k]
     * i+1 = k [i+1 - k]
     * 
     */
    if (map.has(A[i])) {
        let val = map.get(A[i]);
        map.set(A[i], val + 1);
      } else {
          map.set(A[i], 1)
      }
      let val = map.get(A[i-B]);
      map.set(A[i-B], val - 1);

      if(map.get(A[i-B]) == 0) {
            map.delete(A[i-B])
      }
      console.log(map.size, map)
      arr.push(map.size);
  }

  console.log(arr);

}

let A = [1, 2, 1, 3, 4, 3];
let B = 3;
// findDistinctEleInWindowSubArray(A, B);


/**
 * 
 * Count ways to make sum of odd and even indexed elements equal by removing an array element
 * 
 * pfe - prefix array even
 * pfo = prefix array odd
 * eb - even before, ob - odd before
 * ea = even after, oa = odd after
 * caclucate prefix for odd and even
 */

function countWays(A) {
  let pfe = [A[0]]
  let pfo = [0]
  let N = A.length;
  for(let i = 1; i< N; i++) {
    if(i % 2 ==0) {
      pfe[i] = pfe[i-1] + A[i];
      pfo[i] = pfo[i-1]
    } else {
      pfe[i] = pfe[i-1];
      pfo[i] = pfo[i-1] + A[i]
    }
  }
  console.log(pfe, pfo)
  let eb
  let ob
  let ea
  let oa
  let count = 0;
  for(let i =0; i<N; i++) {
    // console.log(i);
    if(i==0) {
      eb = pfe[0]
      ob = pfo[0]
      ea = pfe[N-1] - pfe[0]
      oa = pfo[N-1] - pfo[0]
    } else {
      eb = pfe[i-1]
      ob = pfo[i-1]
      ea = pfe[N-1] - pfe[i]
      oa = pfo[N-1] - pfo[i]
    }
    // console.log(eb, oa, ob, ea);
    if(eb + oa === ob + ea) {
      count++
    }
  }

  console.log(count);
}


// countWays([1, 2, 3, 7, 1, 2, 3])
// countWays([3,4,2,7,9,-1,6,9,10])


//Column Sum 

function columnSum(A){
  // console.log(A);
  let arr = new Array(A[0].length).fill(0)
  console.log(arr)
  
  for(let i = 0; i<A.length; i++) {
    console.log(A[i])
    for(let j = 0; j<A[i].length; j++) {
      arr[j] = arr[j] + A[i][j] 
    }
  }
  console.log(arr)
}


columnSum([[1,2,3,4],
  [5,6,7,8],
  [9,2,3,4]])


  