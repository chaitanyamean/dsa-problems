function getRow(rowIndex)
    {
        let currow = [];
 
        // 1st element of every row is 1
        currow.push(1);
 
        // Check if the row that has to
        // be returned is the first row
        if (rowIndex == 0)
        {
            return currow;
        }
        // Generate the previous row
        console.log("BEFORE", rowIndex);

        let prev = getRow(rowIndex - 1);
        console.log("PREV",prev);
 
        for(let i = 1; i < prev.length; i++)
        {
            console.log('inside')
            // Generate the elements
            // of the current row
            // by the help of the
            // previous row
            let curr = prev[i - 1] + prev[i];
            currow.push(curr);
        }
        currow.push(1);
 
        // Return the row
        return currow;
    }

    let n = 3;
    // let arr = getRow(n);

    // console.log(arr);


    // Javascript program to implement the above approach
     
    // Print the N-th row of the
    // Pascal's Triangle
    function generateNthrow(N)
    {
 
        // nC0 = 1
        let prev = 1;
        // document.write(prev);
        let arr = [1]
        for(let i = 1; i <= N; i++)
        {
 
            // nCr = (nCr-1 * (n - r + 1))/r
            let curr = (prev * (N - i + 1)) / i;
            // document.write(", " + curr);
            // console.log(", " + curr)
            arr.push(curr)
            prev = curr;
        }

        console.log(arr);
    }
     
    let N = 2;
    // generateNthrow(N);




// Bit wise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
// Problems reference https://www.geeksforgeeks.org/sum-of-bitwise-or-of-all-subarrays/
    function bitWiseOr(A) {
        let ans = 0;
    let n = A.length;
    for (let bit = 0; bit <= 27; bit++) {
      let zeroes = [];
      for (let i = 0; i < n; i++) {
        if ((A[i] & (1 << bit)) == 0) {
          if (i == 0 || (A[i - 1] & (1 << bit)) != 0) {
            zeroes.push(0);
          }
          zeroes[zeroes.length - 1]++;
        }
      }
      let count = 0;
      count = count + (n * (n + 1)) / 2;
      let sub = 0;
      zeroes.forEach((x) => {
        sub = sub + (x * (x + 1)) / 2;
      });
      count -= sub;
      ans = (ans + mult(count, 1 << bit)) % MOD;
    }
    return ans;
    }

    const MOD = 1000000007;
function mult(a, b) {
  let val = a * b;
  if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
    return val % MOD;
  return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

    let A  = [ 347148, 221001, 394957, 729925, 276769, 40726, 552988, 29952, 184491, 146773, 418965, 307, 219145, 183037, 178111, 81123, 109199, 683929, 422034, 346291, 11434, 7327, 340473, 316152, 364005, 359269, 170935, 105784, 224044, 22563, 48561, 165781, 9329, 357681, 169473, 175031, 605611, 374501, 6607, 329965, 76068, 836137, 103041, 486817, 195549, 107317, 34399, 56907, 37477, 189690, 36796, 376663, 39721, 177563, 174179, 183646, 217729, 408031, 429122, 631665, 282941, 526797, 262186, 306571, 63613, 57501, 70685, 226381, 1338, 9360, 130360, 20300, 400906, 87823, 180349, 108813, 18181, 119185, 1, 102611, 63591, 12889, 311185, 383896, 8701, 76077, 75481, 386017, 153553, 304913, 383455, 105948, 142885, 1, 12610, 137005, 119185, 16948, 66171, 123683 ]

    // console.log(bitWiseOr([1, 2, 3, 4, 5 ]))
    // console.log(bitWiseOr(A))



    function bulbs(A) {
      let ans = 0
      let state = 0
      for(let i=0;i<A.length; i++) {
        if(A[i] == state) {
          ans += 1;
          state = 1 - state;
        }
      }
      return ans
    }


    // console.log(bulbs([0,1,0,1,1]))

function xorProblem(A,B) {
  // console.log(A, B)
  let l
  let r
  let prefixArr = []
  prefixArr[0] = 0;
  for(let i = 0; i<A.length; i++) {
      prefixArr[i+1] = prefixArr[i] + A[i]
  }
  console.log(prefixArr);
  let N = B.length;
  let C = new Array(N)
  for(let i = 0; i<N; i++) {
    let L = B[i][0];
    let R = B[i][0];
    let c1 = prefixArr[R] - prefixArr[L-1]
    let len = R - L + 1
    let c0 = len - c1
    let ans = new Array(2)
    ans[0] = c1 % 2 == 0 ? 0 : 1;
    ans[1] = c0;
    C[i] = ans    
  }
  return C
  // console.log(prefixArr)
}



let ABC=[1,0,0,0,1]
// let z = [10, 4, 16, 20]
let BBB=[ [2,4],
    [1,5],
    [3,5] ]
console.log(xorProblem(ABC,BBB))


