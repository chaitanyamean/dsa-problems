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

// smallestSeq(2, 5, 7, 8);


function maxSumSquareSubMatrix(A, B) {
  // A = A.sort((a,b) => a-b)
  // console.log(A, A.length)
  let sum = 0
  let minNum = -Infinity;
  for(let i =0; i<A.length; i++) {
    sum += A[i]
    if(i >= B-1) {
      console.log(i);
      minNum = Math.max(sum, minNum)
      sum -= A[i-(B-1)]
    }
  }
  console.log(sum, minNum)

}

// 595


// let A  =[ 66, 23, 687, 252, 187, 114, 789, 527, 129, 474, 679, 119, 687, 92, 578, 332, 781, 499, 597, 370, 848, 248, 496, 641, 714, 572, 399, 187, 910, 638, 100, 975, 660, 786, 227, 198, 252, 367, 725 ]
// let B = 29

// maxSumSquareSubMatrix(A,B)
// maxSumSquareSubMatrix([1,2,3,5,4,8,6,2], 3)




function sumOfSubMatrix(A,B,C,D,E) {
  console.log(B)
      let r = A.length
      let c = A[0].length
      let res = []

      let p = new Array(r)

      for(let i =0; i<r; i++) {
          p[i] = new Array(c)
          for(let j=0; j<C; j++){
            p[i][j] = 0
          }
      }
      p[0][0] = A[0][0]
      for(let i =1; i<r; i++) {
        p[i][0] = p[i-1][0] + A[i][0] // row
      }
      for(let j =1; j<c; j++) {
        p[0][j] = p[0][j-1] + A[0][j]
      }

      for (let i = 1; i < r; i++){
        for (let j = 1; j < c; j++) {
          p[i][j] = p[i - 1][j] + p[i][j - 1]
          - p[i - 1][j - 1] + A[i][j];
        }
      }

                  res.push(getQuerySum(p,B[0]-1,C[0]-1, B[1]-1, C[1]-1))
                  res.push(getQuerySum(p,D[0]-1,E[0]-1, D[1]-1, E[1]-1))


      console.log(r,c,p, res)
}

function getQuerySum(aux, tli, tlj, rbi, rbj) {
  console.log(tli, tlj, rbi, rbj)
  var res = aux[rbi][rbj];
     
  // Remove elements between (0, 0)
  // and (tli-1, rbj)
  if (tli > 0)
      res = res - aux[tli-1][rbj];

  // Remove elements between (0, 0)
  // and (rbi, tlj-1)
  if (tlj > 0)
      res = res - aux[rbi][tlj-1];

  // Add aux[tli-1][tlj-1] as elements
  // between (0, 0) and (tli-1, tlj-1)
  // are subtracted twice
  if (tli > 0 && tlj > 0)
      res = res + aux[tli-1][tlj-1];

  return res;


}


let A = [
  [5, 17, 100, 11]
  [0, 0, 2, 8]
]

let B = [1, 1]
let C = [1, 4]
let D = [2, 2]
let E = [2, 4]




sumOfSubMatrix(A,B,C,D,E)