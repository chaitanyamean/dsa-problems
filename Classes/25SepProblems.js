// N/3 Repeat
// https://www.geeksforgeeks.org/n3-repeated-number-array-o1-space/
function repeatN3(A) {
  let n = A.length;

  let firstNum = Number.MAX_VALUE;
  let secondNum = Number.MAX_VALUE;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < n; i++) {
    if (firstNum == A[i]) {
      count1++;
    } else if (secondNum == A[i]) {
      count2++;
    } else if (count1 == 0) {
      count1++;
      firstNum = A[i];
    } else if (count2 == 0) {
      count2++;
      secondNum = A[i];
    } else {
      count1--;
      count2--;
    }
  }

  // console.log(firstNum,count1, secondNum, count2)
  count2 = 0;
  count1 = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] == firstNum) {
      count1++;
    } else if (A[i] == secondNum) {
      count2++;
    }
  }

  if (count1 > parseInt(n / 3, 10)) {
    return firstNum;
  } else if (count2 > parseInt(n / 3, 10)) {
    return secondNum;
  }

  return -1;
}

// console.log(repeatN3([1, 2, 3, 1, 1]))

function minPicks(A) {
  let even = [];
  let odd = [];
  let bigEven = Number.MIN_VALUE;

  let smallEven = Number.MAX_VALUE;
  for (let i = 0; i <= A.length; i++) {
    if (A[i] % 2 == 0) {
      // even.push(A[i])
      if (A[i] > bigEven) {
        bigEven = A[i];
      }
    } else {
      // odd.push(A[i])
      if (A[i] < smallEven) {
        smallEven = A[i];
      }
    }
  }

  even = even.sort((a, b) => a - b);
  odd = odd.sort((a, b) => a - b);
  console.log(bigEven, smallEven);
  // let result = even[even.length-1] - odd[0]
  let result = bigEven - smallEven;
  return result;
}

// console.log(minPicks([74, 9, 51, 51, 75, 0, 35, 89, 96, 77]))
// https://www.youtube.com/watch?v=rRn1vBH-L-8
function smallestSeq(A, B, C, D) {
  console.log(A, B, C, D);
  let arr = [];
  arr.push(1);
  let i = 0;
  let j = 0;
  let k = 0;
  while (D--) {
    let min = Math.min(arr[i] * A, Math.min(arr[j] * B, arr[k] * C));
    arr.push(min)
    if (min == arr[i] * A) {
      i++;
    }
    if (min == arr[j] * B) {
      j++;
    }
    if (min == arr[k] * C) {
      k++;
    }
  }
  console.log(arr.shift())
  console.log(arr);
}

smallestSeq(2, 5, 7, 8);
