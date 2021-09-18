function findLongestConsOne(A) {
  let count = 0;
  let left = [];
  let right = [];
  // left[0]
  let cnt = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == "1") {
      count++;
      cnt += 1;
      left.push(cnt); // 1st
    } else {
      left.push(0);
      cnt = 0;
    }
  }

  let rightCount = 0;
  for (let j = A.length - 1; j >= 0; j--) {
    if (A[j] == "1") {
      rightCount += 1;
      right.push(rightCount); // 1st
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


