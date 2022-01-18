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
    // console.log('MID', mid);
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
// console.log(specialInteger(A, B));

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


// Q3. Search in Bitonic Array!

function findBiotonic(A, l, r) {
  // Find biotonic index

  let biotonicIdx = 0

  let mid = Math.floor((l+r)/2)

  if(A[mid] > A[mid-1] && A[mid] > A[mid+1]) return mid;

  if(A[mid] > A[mid-1] && A[mid] < A[mid+1]) {
    biotonicIdx = findBiotonic(A,mid,r)
  }


  if(A[mid] < A[mid-1] && A[mid] > A[mid+1]) {
    biotonicIdx = findBiotonic(A,l,mid)
  }

  return biotonicIdx
}


function asendingSearch(A, l, r, key) {
  console.log(A,l,r,key)
  while(l<=r) {
    // let mid = Math.floor((l+r)/2)
    let mid = Math.floor(l + (r - l) / 2);

    if(A[mid] == key) return mid

    if(A[mid] > key) {
      r = mid -1
    } else {
      l = mid + 1
    }
  }
  return -1
}

function decendingSearch(A, l, r, key) {
  while(l<=r) {
    // let mid = Math.floor((l+r)/2)
    let mid = Math.floor(l + (r - l) / 2);

    if(A[mid] == key) return mid

    if(A[mid] > key) {
      l = mid + 1
    } else {
      r = mid -1
    }
  }
  return -1
}


function searchBiotonic(A, key, index) {
  let n = A.length -1;

  if(A[index] < key ) return -1;
  else if(A[index] == key) return index;

  else{
    let temp = asendingSearch(A,0,index-1,key)
    if(temp != -1) {
      console.log(temp)
      return temp
    }

    return decendingSearch(A, index+1, n-1, key)
  }
}




let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
let index = findBiotonic(arr1, 0, arr1.length-1)
let key = 12;
console.log("Element Found at index ", searchBiotonic(arr1, key, index))
// console.log(index, arr1[index])