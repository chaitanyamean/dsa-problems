// Q3. Find nth Magic Number
// First few magic numbers are 5, 25, 30(5 + 25), 125, 130(125 + 5), ….

function findNthMagicNum(A) {
  let pow = 1;
  let ans = 0;
  while (A) {
    pow = pow * 5;

    if (A & 1) {
      console.log(A, A & 1);
      ans += pow;
    }
    A >>= 1; // A = A/2
  }
  return ans;
}

// console.log(findNthMagicNum(10));


// Finding Position

function findPosition(A) {
  let res = Math.floor(Math.log2(A))
  console.log(res, Math.pow(2, res))
}


// findPosition(5)

function isMagic(A) {
  let res = 0
    // if(A<=1) return res

    // return

    // for(let i=0; i<A.length; i++) {

    // }
    let digits = A.toString().split('')
    console.log(digits)

    for (var i = 0, sum = 0; i < A.length; sum += output[i++]);
console.log(sum);

}

isMagic(83557)