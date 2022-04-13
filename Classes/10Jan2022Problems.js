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
// console.log('Ans', subArrayWithGivenSum(A1,B2))




// Q4. 3 Sum Zero
function threeSumZero(A) {
  let resultArr = [];
    const sortedArr = A.sort((a, b) => a - b);
    console.log(sortedArr);
    for (i = 0; i < sortedArr.length - 2; i++) {
      if (sortedArr[i] > 0) {
        break;
      }
      if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = sortedArr.length - 1;
      while (left < right) {
        const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          // console.log([sortedArr[i], sortedArr[left], sortedArr[right]])
          resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
          while(left < right && sortedArr[left] === sortedArr[left + 1]) {
            console.log(sortedArr[left] ,sortedArr[left + 1])
            left++;
          }
          while(left < right && sortedArr[right] === sortedArr[right - 1]) {
            right--;
          }
          console.log(left, A[left])
          left++;
          right--;  
        }
      }
    }
    return resultArr;
}

let A11 = [-1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3]


// console.log(threeSumZero(A11))


// Q3. Container With Most Water

function containerWithMostWater(A) {
  let res = 0
  let l = 0;
  let r = A.length - 1

  while(l<r) {
    let area = (r-l) * Math.min(A[l], A[r])
    res = Math.max(res, area);
    if(A[l]< A[r]) {
      l += 1
    } else {  
      r -= 1
    }
  }
  return res
}

let A12 = [1, 5, 4, 3]

// console.log(containerWithMostWater(A12))


// Q5. Pairs with given sum II
function pairsWithGivenSum(A,B) {
  // create a map
  let map = new Map()

  for(let i=0;i<A.length;i++) {
      if(map.has(A[i])) {
        let data = map.get(A[i])
        map.set(A[i], data+1)
      } else {
        map.set(A[i], 1)
      }
  }
  console.log(map);

  let twice_count = 0;


  for(let i=0;i<A.length;i++) {
    if(map.has(B - A[i]) != null) {
      // console.log(map.get(B - A[i]))
        twice_count += map.get(B - A[i])
        if(B - A[i] === A[i]) {
          twice_count--
        }
    }

  }
  console.log(twice_count)
  return twice_count / 2

}

let A33 = [1, 5, 7, -1, 5]
// console.log(pairsWithGivenSum([2, 3, 5, 6, 10], 6))


// Q1. Array 3 Pointers
function arrayThreePointers(A,B,C) {
  var diff = Math.pow(10, 9); // Initialize min diff
  var p = A.length;
  var q = B.length;
  var r = C.length;
       // Initialize result
       var res_i = 0,
         res_j = 0,
         res_k = 0;
 
       // Traverse arrays
       var i = 0,
         j = 0,
         k = 0;
       while (i < p && j < q && k < r)
       {
        
         // Find minimum and maximum of current three elements
         var minimum = Math.min(A[i], Math.min(B[j], C[k]));
         var maximum = Math.max(A[i], Math.max(B[j], C[k]));
 
         // Update result if current diff is less than the min
         // diff so far
         if (maximum - minimum < diff)
         {
           (res_i = i), (res_j = j), (res_k = k);
           diff = maximum - minimum;
         }
 
         // We can't get less than 0 as values are absolute
         if (diff == 0) break;
 
         // Increment index of array with smallest value
         if (A[i] == minimum)
             i++;
         else if (B[j] == minimum)
             j++;
         else
             k++;
       }

       console.log(A[res_i] + " " + B[res_j] + " " + C[res_k])
}

var A77 = [1, 4, 10];
var B77 = [2, 15, 20];
var C77 = [10, 12];

arrayThreePointers(A77,B77,C77)