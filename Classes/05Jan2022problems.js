// Q2. Rotated Sorted Array Search
function sortedRotatedArray(A, B) {
  // console.log(A,B)
  let l = 0;
  let r = A.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    console.log("mid", mid);
    if (A[mid] == B) return mid;

    if (A[0] <= A[mid]) {
      // left side of non rotated Array
      if (A[0] <= B && A[mid] > B) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (A[0] > A[mid]) {
      // right side of rotated array
      if (B > A[mid] && B <= A[A.length - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}

// let A = [ 101, 103, 106, 109, 158, 164, 182, 187, 202, 205, 2, 3, 32, 57, 69, 74, 81, 99, 100 ]
// let B = 202
// console.log(sortedRotatedArray(A,B))

// Q1. Square Root of Integer

function findSqRoot(A) {
  let l = 1;
  let r = A;
  let mid;
  let ans = -1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);

    if (mid * mid == A) return mid;

    if (mid <= A / mid) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

// console.log(findSqRoot(111))

function specialInteger(A, B) {
//   let isBig = subArraySlidingWindow(A, 2, B);
//   console.log("ISBIG", isBig);

let l = 1
let r = A.length
let ans = -1
while(l<=r) {
    let mid = Math.floor((l+r)/2)
    console.log('MID', mid);
    if(subArraySlidingWindow(A,mid,B)) {
        console.log('ans')
        ans = mid
        l = mid + 1
    } else {
        r = mid - 1
    }
}

return ans

}

let A = [1,2,3,4,5]
let B = 10
console.log(specialInteger(A, B));

function subArraySlidingWindow(A, K, B) {
  let windowSum = 0;

  for (let i = 0; i < K; i++) {
    windowSum += A[i];
  }
  if (windowSum > B) return false;

  for (let i = K; i < A.length; i++) {
    windowSum += A[i] - A[i - K];
    if (windowSum > B) {
      return false;
    }
  }
  return true;
}
