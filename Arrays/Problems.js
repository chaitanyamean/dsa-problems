function findLongestConsOne(A) {
  let count = 0;
  let left = [];
  let right = [];
  let cnt = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == "1") {
      count++;
      cnt += 1;
      left.push(cnt); 
    } else {
      left.push(0);
      cnt = 0;
    }
  }

  let rightCount = 0;
  for (let j = A.length - 1; j >= 0; j--) {
    if (A[j] == "1") {
      rightCount += 1;
      right.push(rightCount); 
    } else {
      right.push(0);
      rightCount = 0;
    }
  }
  right = right.reverse();
  let sum = 0;
  let ans = Number.MIN_VALUE;
  console.log(right, left);
  for (let i = 0; i < A.length; i++) {
    if (A[i] == "0") {
      sum = left[i - 1] + right[i + 1];
      console.log("44", sum);

      if (count - sum >= 1) {
        sum++;
      }
    }

    if (sum > ans) {
      ans = sum;
    }
  }

  // for(let )
  console.log("Ans", ans);
}

// findLongestConsOne("1111111111111");



// To solve this problem we need to understand how B works and 
// B ~ (B % N) we can replace B with (B % N) this is the key observation
// 

function rotateArr(A, B) {
  let N = A.length;
   B = B % N;
    let c = []
    for(let i = 0; i<N; i++) {
        let newIdx = (B + i) % N;
        c[newIdx] = A[i]
    }
    console.log(c.join(' ') + ' ')
  // console.log(c + '')
}

// rotateArr([64, 78, 50, 25, 24, 27, 76, 59, 65, 41, 37, 6, 80, 61, 8, 48, 38, 85, 41, 18, 12, 81, 36, 37, 12, 44, 22, 65, 12, 33, 19, 42, 25, 30, 5, 4, 96, 81, 72, 71, 20, 20, 23, 85, 93, 33, 32, 30, 12, 97, 24, 13, 93, 58, 74, 37, 10, 46, 26, 21, 41, 92, 90, 21, 65, 35, 89, 26, 10, 14, 64, 28, 3, 80, 99, 62, 38, 55, 8, 92, 31, 93, 
//   58, 77, 21, 34, 57, 49, 82, 85, 38, 89, 66, 51, 4, 31, 12, 33, 83, 29], 13)



let A12 = [1]
let B12 = [1]
let C12 = [1]

threePointer(A12,B12,C12)

function threePointer(A,B,C) {
    let currI = 0
		let currJ = 0;
		let currK = 0;

		let result = Infinity;
		while(currI < A.length && currJ < B.length && currK < C.length) {
			let min = Math.min(A[currI], B[currJ], C[currK])
			let max = Math.max(A[currI], B[currJ], C[currK])
		console.log(min, max)
			if(max - min < result) {
				result = max-min;
			}

			if(result === 0) {
				break;
			}

			if(A[currI] == min) {
				currI++
			} else if(B[currJ] == min) {
				currJ++
			} else {
				currK++
			}

		}

		return result
}