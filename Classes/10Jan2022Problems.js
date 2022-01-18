// Three sum problems
// https://www.geeksforgeeks.org/find-a-triplet-in-an-array-whose-sum-is-closest-to-a-given-number/
function threeSum(A, B) {
  console.log(A, B);

  A.sort((a, b) => a - b);
  console.log(A);
  let closestSum = 1000000000;
  for (let i = 0; i < A.length - 2; i++) {
    let p1 = i + 1;
    let p2 = A.length - 1;
    // if (Math.abs(1*x - sum) < Math.abs(1*x - closestSum))

    while (p1 < p2) {
      let sum = A[i] + A[p1] + A[p2];
      if (Math.abs(1 * B - sum) < Math.abs(1 * B - closestSum)) {
        console.log(closestSum, sum);
        closestSum = sum;
      }
      if (sum > B) {
        p2--;
      } else {
        p1++;
      }
    }
  }
  return closestSum;
}

// let A = [-1, 2, 1, -4]
// let B = 1

// console.log('Ans', threeSum(A,B));

// Q3. Sort by Color

function sortByColor(A) {
  console.log(A);
  let i;
  let cnt0 = 0;
    let cnt1 = 0;
    let cnt2 = 0;

  for (let i = 0; i < A.length; i++) {
    switch (A[i]) {
      case 0:
        cnt0++;
        break;
      case 1:
        cnt1++;
        break;
      case 2:
        cnt2++;
        break;
    }
}
    i=0;
    while(cnt0 > 0) {
        A[i++] = 0;
        cnt0--;
    }
    while(cnt1 > 0) {
        A[i++] = 1;
        cnt1--;
    }
    while(cnt2 > 0) {
        A[i++] = 2;
        cnt2--;
    }

  return A;
}

// let A = [0, 1, 2, 0, 1, 2];
// let A=[0]

let A = [ 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 0, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 2, 2, 2, 0, 0, 1, 0, 2, 1, 1, 2, 1, 2, 2, 1, 0, 2, 2, 1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 2, 0, 2, 0, 1, 1, 0, 2, 2, 1, 2, 0, 2, 1, 1, 1, 2, 0, 1, 0, 2, 2, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 1, 1, 0, 2, 1, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 2, 1, 2, 2, 2, 1, 2, 2, 0, 1, 0, 1, 2, 1, 1, 0, 1, 2, 0, 1, 0, 2, 2, 1, 2, 1, 0, 2, 2, 1, 1, 0, 2, 1, 2 ]

// console.log(sortByColor(A));

// how many subarrays (n*(n+1)/2), subsequences, sucessions


// in questions if subarray and sum then prefix we can try
// prefix - subarray sum from i,j ===> pf[j] - pf[i-1]
// https://www.geeksforgeeks.org/find-subarray-with-given-sum/?ref=gcse
function subArrayWithGivenSum(A,B) {
  let n = A.length

  // need to find curr_sum, start
  let curr_sum = A[0], start = 0
  for(let i=1; i<=n;i++) {

    // need to check if sum exceeds the curr_sum
    while(curr_sum > B && start < i-1) {
        // console.log(i, start, curr_sum);
        curr_sum = curr_sum - A[start]
        start++;
        // console.log(i, start, curr_sum);
    }

    if(curr_sum == B) {
      let samArr = []
      console.log(start-1,i-1)
      for(let j=start;j<i;j++){
        samArr.push(A[j])
      }
      return samArr;
    }

    if(i<n) {
      curr_sum = curr_sum + A[i];
    }
  }

  return -1
}


// let arr = [1, 2, 3, 4, 5]
// let sum = 5
let A1 = [ 5, 10, 20, 100, 105 ]
let B2 = 110
console.log('Ans', subArrayWithGivenSum(A1,B2))




