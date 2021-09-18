function processing(arr) {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (Array.isArray(currentElement)) {
      output = output.concat(processing(currentElement));
    } else {
        output = [...output, currentElement];
    }
}
  console.log(output);
  return output

  // .flatMap
}


processing([
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
])

function sub(A) {
  let aCount = 0;
  let gCount = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] == "g") {
      gCount += 1;
    }
    if (A[i] == "a") {
      aCount += gCount;
    }
  }

  console.log(aCount);
}

// sub('agegafaegaggf')

function minMax(A) {
  let min = Math.min(A[0], A[1]);
  let max = Math.max(A[0], A[1]);
  let N = A.length - 1;
  for (let i = 2; i < A.length - 1; i++) {
    if (min > A[i]) {
      min = A[i];
    } else if (max < A[i]) {
      max = A[i];
    }
  }

  let ans = 0;
  let minInd = -1;
  let maxInd = -1;

  if (min === max) return 1;

  for (let i = N - 1; i >= 0; i--) {
    console.log(i);
    if (A[i] == min) {
      minInd = i;
      if (maxInd != -1) {
        ans = Math.min(ans, maxInd - minInd + 1);
      }
    } else if (A[i] == max) {
      maxInd = i;
      if (minInd != -1) {
        ans = Math.min(ans, minInd - maxInd + 1);
      }
    }
  }
  console.log("aaa", ans);

  console.log(min, max);
}

// sub([3,4,1,7,8,9,9,5])
// minMax([814, 761, 697, 483, 981])

function printPattern(A) {
  let res = [];
  for (let i = 0; i < A; i++) {
    res.push([]);
  }

  for (let i = 0; i < res.length; i++) {
    let p = 0;
    for (let k = i; k < res.length - 1; k++) {
      res[i][p++] = 0;
    }
    console.log("P", p);
    let cnt = A - p;
    for (let j = i; j >= 0; j--) {
      res[i][p++] = cnt;
      cnt--;
    }
  }
  console.log("RES", res);
}
// printPattern(1)

function noOfConsecutive(str) {
  console.log(str);
  let n = str.length;
  let left = [];
  let right = [];
  left[0] = Number(str[0]);
  console.log(left);
  for (let i = 0; i < n; i++) {
    console.log("Dash", i, typeof left[i], str[i], typeof str[i]);
    if (str[i] == "1") {
      console.log("inside");
      if ((i = 0)) {
      } else {
        left[i] = Number(left[i - 1]) + 1;
      }
    } else {
      left[i] = 0;
    }
  }
  console.log(left);
}

// noOfConsecutive('111011101')

// function prob(A){
//     let cache = {}
//     for(let i=0;i<A.length;i++) {
//         if(cache[A[i]]) {
//                 cache[A[i]] += 1
//         } else {
//             cache[A[i]] = 1
//         }
//     }

//     console.log(cache)

//     for(let j = 0; j<A.length; j++) {
//         if(cache[A[j]] === 1) {
//             return A[j]
//         }
//     }
// }

// console.log(
//     prob([2,6,8,4,6,7,2,9])
// )

function prob2(A, B) {
  let cache = {};
  for (let i = 0; i < A.length; i++) {
    if (cache[A[i]]) {
      cache[A[i]] += 1;
    } else {
      cache[A[i]] = 1;
    }
  }
  let arr = [];

  for (let i = 0; i < B.length; i++) {
    if (cache[B[i]]) {
      cache[B[i]] -= 1;
      arr.push(B[i]);
    }
  }

  console.log(arr);
}

// prob2([2,3,4,5,6,7],[1,3,5,7,9])
// prob2([1, 2, 2, 1], [2, 3, 1, 2])

// HASING

function twoSum(array, goal) {
  // let cache = {}
  // let twoIndex = []
  // for(let i =0; i<A.length; i++) {
  //     cache[A[i]] = i
  // }
  // // console.log(cache)
  // for(let i =0; i< A.length;i++) {
  //     let target = B - A[i]
  //     if(cache[target] !== null && cache[target] !== i) {
  //         twoIndex.push(i)
  //         twoIndex.push(cache[target])
  //         break;
  //     }
  // }
  // console.log( twoIndex)

  let numberMap = new Map();
  console.log(numberMap);

  for (let index = 0; index < array.length; index++) {
    let el = array[index];
    console.log(el);
    if (numberMap.has(goal - el)) {
      console.log("NUM", numberMap, goal - el);
      return [index, numberMap.get(goal - el)];
    } else {
      numberMap.set(el, index);
    }
  }

  return [];
}

// console.log(
//     twoSum([2,7,3,-8,11,15, -8], 10)
//     )
// console.log(
// twoSum([4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8], -3)
// )

// cache {} iterate over array if b

function multipleLeft(A, B) {
  let twoDArr = [];
  for (let j = 0; j < B.length; j++) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < A.length; i++) {
      if (i < B[j]) {
        arr1.push(A[i]);
      } else {
        arr2.push(A[i]);
      }
    }
    let finalArr = [...arr2, ...arr1];
    twoDArr.push(finalArr);
    console.log(twoDArr);
  }
}

// multipleLeft(
//   [
//     6, 31, 33, 13, 82, 66, 9, 12, 69, 21, 17, 2, 50, 69, 90, 71, 31, 1, 13, 70,
//     94, 46, 89, 13, 55, 54, 67, 97, 28, 27, 62, 34, 41, 18, 15, 35, 13, 84, 93,
//     27, 89, 23, 6, 56, 94, 40, 54, 95, 47,
//   ],
//   [
//     88, 85, 98, 36, 66, 40, 30, 26, 51, 77, 62, 60, 92, 64, 53, 86, 24, 53, 85,
//     49, 57, 29, 32, 60, 75, 82, 17, 23, 67, 51, 23, 11, 70, 59,
//   ]
// );


function findPairs(arr){

  var myMap = new Map();
  console.log(myMap)

  for(let i = 0; i< arr.length; i++) {
    if(myMap.has(arr[i])) {
      let value = myMap.get(arr[i])
      value = value + 1;
      myMap.set(arr[i], value)
    } else {
      myMap.set(arr[i], 1)
    }
  }

  console.log(myMap)

}

// findPairs([4,4,4,4])
// findPairs([3,8,5,10,6,12,4,7,6,7,3])


function subArrayWithZero(arr){
  // find prefix Array
  let N  = arr.length
  let s = 0
  let pf = []
  pf[0] = arr[0]
  for(let i =1; i<arr.length; i++) {
    pf[i] = pf[i-1] + arr[i]
  }
  const mySet = new Set()
  // console.log(mySet)
  // console.log(pf)

  for(let i=0; i<N; i++) {
    s = s + arr[i]
    console.log(s)
    mySet.add(s)
  }
  if(mySet.size < N) return true
  else if(mySet.has(0)) return true
  else return false
}


// console.log(subArrayWithZero([-1,1]))


function colorfulNumbers(A) {
  let digits = []
  let B = A.toString()
  for(let i=0; i<B.length; i++) {
      digits.push(Number(B[i]))
  }
  let mySet = new Set()
  for(let i = 0; i<digits.length; i++) {
    let prod = 1;
    for(let j=i; j<digits.length ; j++) {
        prod *= digits[j]
        console.log(prod)
        if(mySet.has(prod)) {
          return 0
        } else {
          mySet.add(prod)
        }
    }
  }
  console.log(digits)
  return 1
}

// console.log(colorfulNumbers(23))


function changeDateFormat(str){
  let dateMap = new Map()
  let months = new Map()

  months.set('Jan', '01')
  months.set('Feb', '02')
  months.set('Mar', '03')
  months.set('Apr', '04')
  months.set('May', '05')
  months.set('Jun', '06')
  months.set('Jul', '07')
  months.set('Aug', '08')
  months.set('Sep', '09')
  months.set('Oct', '10')
  months.set('Nov', '11')
  months.set('Dec', '12')


  for(let i = 1; i<=31; i++) {
    let key;
    let value;
      // if(i !== 3) {
      //     key = i + 'th'
      //   } else {
      //     key = i + 'rd'
      //     console.log(key)
      // }
        if(i == 1) {
           key = i + 'st'
        } else if(i == 2) {
          key = i + 'nd'

        } else if(i == 3) {
          key = i + 'rd'

        } else {
          key = i + 'th'

        }
      if(i<10) {
        value = '0' + i;
      } else {
        value = i.toString()
      }
    dateMap.set(key, value)
  }
  console.log(dateMap);
  let date = str.split(' ')
  let date1 = dateMap.get(date[0])
  let month1 = months.get(date[1])
  console.log(date1, month1);
  return `${date[2]}-${month1}-${date1}`
}


// console.log(

//   changeDateFormat('2nd Feb 3092')
//   )

  function perfectCards(A){

    let map = new Map()

    for(let i = 0; i< A.length; i++) {
        if(map.has(A[i])) {
          let value = map.get(A[i])
          map.set(A[i], value +1)

        } else {
          map.set(A[i], 1)
        }
    }
    console.log(map.size)

    if(map.size === 2){
      let mySet = new Set()
      for(const value of map.values()) {
        mySet.add(value)
        console.log(value)
      }
      console.log(mySet)
      if(mySet.size === 1) {
        return 'WIN'
      } else {
        return 'LOSE'
      }
     } else {
      return 'LOSE'
     }
  }

// console.log(
//   perfectCards([6,6])
//   )

  function isDictonary(A,B){
    let map = new Map()
    isLess = false;
    for(let i = 0; i<B.length; i++) {
      map.set(B[i], i+1)
    }
    console.log(map)

    for(let i=0; i<A.length; i++) {
      if(i < A.length-1) {
        let first =  A[i]
        let second = A[i+1]
        if(first[0] === second[0]) {
          let j = 0
          while(j< Math.min(first.length, second.length)) {
              if(first[j] !== second[j]) {
                if(map.get(first[j]) < map.get(second[j])) {
                  isLess = 1;
                } else {
                  isLess = 0;
                }
              } else {
                isLess = 0;
              }
            j++
          }
        } else {
          if(map.get(first[0]) < map.get(second[0])) {
            isLess = 1;
          } else {
            isLess = 0;
          }
        }
      }
    }
    console.log(isLess)
  }



  // isDictonary(["hello", "scaler", "interviewbit"], 'adhbcfegskjlponmirqtxwuvzy')

  // isDictonary(["fine", "none", "no"], 'qwertyuiopasdfghjklzxcvbnm')

  // isDictonary(["zkv", "zbc", "qpmxuj", "loovaowuxwhmsncbxcoks", "ejuvpvaboygp", "txdknlyjyhfixjswnkkufnux", 
  // "qghumeaylnlfdxfirc", "scxggbwkfnqduxwfn", "ggxrpnrvystmwcysyycqpev", "ozvsrtkjpre", "o", 
  // "cxfxtlsgypsfadpooef", "keffmznimkkasvwsrenzk", "etlyhnkoaugzqrcddiutei", "eylfpbnpljvrvipyamyehwqnq",
  //  "jwayyzpvscmpsajlfvgubfa", "zrzbmnmgqoo"], 'viwcblqmjdxhuyfkonrpzagste')



   function twoSum2(A, B){
     let res = []
     let map = new Map()
    let s = 0
    let N = A.length
      map.set(0, -1)
     for(let i=0; i<N; i++) {
      s = s + A[i]
      let req = s - B
      if(map.has(req)) {
        let idx = map.get(req) + 1
          return [A[idx], A[i]]
      } else {
        map.set(s, i)
      }
    }

    
return -1

   }
// console.log(
//   twoSum2([5, 10, 20, 100, 105], 110)
//   )



  function spiralOrderMatrix(A){
      let res = []
    res = Array(A).fill().map(() => Array(A).fill(0))
    // console.log(res)
    let i = 0;
    let j = 0;
    let dir = 0
    let k = 1
    while(k <= A * A) {
      res[i][j] = k
      k = k + 1
      if(dir === 0) {
        j = j + 1
        if(j == A || res[i][j] !=0) {
          dir =1
          j=j-1
          i=i+1
        }

      } else if(dir == 1){
        i = i + 1
        if(i==A || res[i][j] !=0){
          dir = 2
          j=j-1
          i=i-1
        }
      } else if(dir == 2){
        j = j -1
        if(j<0 || res[i][j] !=0){
          dir = 3
          i=i-1
          j=j+1
        }

      } else {
        i=i-1
        if(i<0 || res[i][j] !=0){
          dir =0
          i=i+1
          j=j+1
        }
      }
    }
    // console.log(res)
  }



  // spiralOrderMatrix(80)


  function findAP(A){
    let n = A.length;
  //   for(let i = 0; i<n-1; i++) {
  //     let min_idx = i
  //     for(j=i+1; j<=n; j++) {
  //         if(A[j] < A[min_idx]) {
  //           min_idx = j
  //         }
  //       }
  //       const temp = A[i]
  //       A[i] = A[min_idx]
  //       A[min_idx] = temp
  // }
    A = A.sort((a,b) => a-b)
    console.log("s",A)
  let isAp = false;
  let diff = A[1] - A[0]
  for(let i = 0; i<n-1; i++) {
    if(A[i+1] - A[i] === diff) {
      isAp = true
    } else {
      isAp = false
    }
  }
  console.log(A, isAp)
  }


  // findAP([6,8,2,4,12])

  // find first and second min values



function findColor(arr){

  let map = new Map()
  for(let i =0; i< arr.length; i++) {
        map.set(arr[i], 1)
  }

}


// findColor([0,0,1,2,1,2,0])

// wave problem need to add + 2 while iterating
function sinosidalArray(A) {
  let B = A.sort(function(a, b) {
    return a - b;
  });
console.log(B)
  for(let i = 0; i<B.length-1; i=i+2) {
      let temp = B[i]
      B[i] = B[i+1]
      B[i+1] = temp
  }

  console.log(B)

}
// sinosidalArray([2,3,4,10,0,8])
// sinosidalArray([5, 1, 3, 2, 4])
/*
// this is a special problem we can loop the i from 0 to i<=B-1

or we can put if condition before inner loop like i<=B-1

*/
function findKthElementInArray(A, B){
  let n = A.length;
    for(let i =0; i< n-1;i++) {
      let min_idx = i
      for(let j = i+1; j<n; j++) {
        if(A[j] < A[min_idx]) {
          let temp = A[j]
          A[j] = A[min_idx]
          A[min_idx] = temp;
        }
      }
    }
    console.log(A)
    console.log(A[B-1])
}


// findKthElementInArray([64,25,12,22,11],3)


 function ssIndex(A){
  let n = A.length;

  let map = new Map()

  // for(let i = 0; i< A.length; i++) {
  //       map.set(A[i], i)
  // }
  // console.log(map)
  let res = []
  for(let i = 0; i<n-1; i++) {
      let min_idx = i
      for(j=i+1; j<=n; j++) {
          if(A[j] < A[min_idx]) {
            min_idx = j
          }
        }
        // console.log(min_idx)
        const temp = A[i]
        A[i] = A[min_idx]
        A[min_idx] = temp
        res.push(min_idx)
  }

  console.log(A)
  console.log(res)


  return A

}


// ssIndex([6, 4, 3, 7, 2, 8])



var arr1 = ['a','b','c','d','e','f'];
var arr2 = arr1;  // Reference arr1 by another variable 
arr1 = [];
arr1.push('z')
// console.log(arr2);



function pascalTrainge(A) {
    let arr = []
    for(let i = 0; i<A; i++) {
      arr.push([])
    }
    let i = 0;
    while(i<A) {
      for(let j=0; j<A; j++) {
        arr[i].push(0)
      }
      i++
    }
    i =0;
    while(i<A) {
      for(let j=0; j<=i; j++) {
        if(j == 0) {
          arr[i][j] = 1
        } else {
          arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
        }
      }
      i++
    }

    console.log(arr)

}  // TC O(N^2) SC O(N^2)



// pascalTrainge(3)

function elementRemoval(A) {
  let sum = 0
	    let ans = 0
	    A.sort((a,b) => a-b)
	    for(let i=0;i<A.length; i++) {
	        sum += A[i]
	        ans = sum
	    }
	    console.log(A, sum, ans)
	    for(let j = A.length-1; j>=0; j--) {
        console.log("AJJ",A[j])
	        sum -= A[j]
	        ans += sum
	    }
      console.log(ans)
	    return ans
	    
}

// elementRemoval([8, 0, 10])

