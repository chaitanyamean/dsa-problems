// Q3. Common Elements

function commonElements(A, B) {
  let hash = {};
  let n = A.length;
  let m = B.length;
  let map1 = new Map();
    let finalArr = [];
  for (let i = 0; i < n; i++) {
    if (map1.has(A[i])) {
      let val = map1.get(A[i]);
      map1.set(A[i], val + 1);
    } else {
      map1.set(A[i], 1);
    }
  }
  console.log(map1)

  for (let i = 0; i < m; i++) {
      let val1 = map1.get(B[i])  // for 2 ki already 1 vunthadi
    if (map1.has(B[i]) && val1 != 0) {
        finalArr.push(B[i])
        map1.set(B[i], val1 -1);
    } 
  }

  return finalArr;


}

let A = [2, 1, 4, 2, 10];
let B = [3, 6, 2, 2, 10, 10];
console.log("Comm", commonElements(A, B));
