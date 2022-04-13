// Merging two sorted arrays

function mergingTwoSortedArrays(A, B) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let C = [];
  while (p1 < A.length && p2 < B.length) {
    if (A[p1] < B[p2]) {
      C[p3] = A[p1];
      p3++;
      p1++;
    } else {
      C[p3] = B[p2];
      p3++;
      p2++;
    }
  }
  while (p1 < A.length) {
    C[p3] = A[p1];
    p3++;
    p1++;
  }
  while (p2 < B.length) {
    C[p3] = B[p2];
    p3++;
    p2++;
  }
}

// let A = [4, 7, 9];
// let B = [2, 11, 19];

// mergingTwoSortedArrays(A, B);

//Q1. Kth Smallest Element
// Insertions Sort

function bThSmallestElementWithInsertionSort(A, B) {
  // console.log(A,B)

  for (let i = 1; i < A.length; i++) {
    let j = i;
    while (A[j] < A[j - 1] && j >= 1) {
      let temp = A[j];
      A[j] = A[j - 1];
      A[j - 1] = temp;
      j--;
    }
  }
  console.log(A, A[B]);
  return A[B];
}

// let A = [2, 1, 4, 3, 2]
// let B = 3

// let A = [ 8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92 ]
// let B = 9

// console.log(bThSmallestElementWithInsertionSort(A,B))

//Q1. Kth Smallest Element
// Selection Sort

function bThSmallestElementWithSelectionsort(A, B) {
  // console.log(A,B)
  //  Find the max item in the remaining array and swap with correct index

  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (let i = 0; i < A.length; i++) {
    let idxOfMin = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[idxOfMin]) idxOfMin = j;
    }

    if (idxOfMin != i) {
      swap(A, idxOfMin, i);
    }
  }
  console.log("AAA", A, A[B - 1]);
  // return min_val
}

// let A = [
//   8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42,
//   28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62,
//   20, 17, 46, 26, 81, 92,
// ];
// let B = 9;

// console.log(bThSmallestElementWithSelectionsort(A, B));

// Array with consecutive elements

// Find the sum of the array.
// If given array elements are consecutive that means they are in AP.
// So, find min element i.e. first term of AP then
// calculate ap_sum = n/2 * [2a +(n-1)*d] where d = 1. So, ap_sum = n/2 * [2a +(n-1)]
// Compare both sums. Print Yes if equal, else No.

function arrWtConsectiveElements(A) {
  let n = A.length;
  let first_term = Number.MAX_VALUE;
  console.log(first_term);
  for (let j = 0; j < n; j++) {
    if (A[j] < first_term) first_term = A[j];
    // consol÷e.log(first_term)
  }

  // Calculate AP sum
  let ap_sum = (n * (2 * first_term + (n - 1) * 1)) / 2;
  console.log(ap_sum);
  // Calculate given Aay sum
  let arr_sum = 0;
  for (let i = 0; i < n; i++) arr_sum += A[i];

  // Compare both sums and return
  return ap_sum == arr_sum;
}

let A = [
  285, 223, 327, 320, 107, 127, 266, 277, 324, 282, 322, 260, 257, 87, 288, 321,
  269, 86, 69, 206, 66, 165, 160, 67, 316, 216, 161, 118, 330, 337, 274, 145,
  256, 318, 250, 187, 273, 68, 105, 193, 314, 137, 77, 336, 287, 120, 334, 278,
  281, 279, 289, 299, 291, 307, 190, 212, 286, 113, 227, 226, 301, 300, 174,
  270, 123, 317, 275, 338, 202, 205, 70, 101, 344, 271, 102, 312, 157, 224, 201,
  106, 88, 292, 305, 343, 246, 328, 138, 148, 315, 254, 108, 229, 346, 350, 255,
  304, 247, 302, 208, 85, 158, 63, 225, 147, 172, 64, 78, 89, 258, 109, 323,
  237, 80, 191, 110, 283, 83, 221, 296, 111, 72, 71, 155, 140, 95, 252, 126, 90,
  91, 114, 228, 163, 303, 197, 162, 248, 75, 339, 116, 92, 209, 198, 139, 112,
  276, 143, 306, 319, 180, 173, 325, 184, 335, 326, 156, 240, 293, 115, 261,
  340, 290, 351, 58, 117, 341, 241, 329, 311, 119, 232, 121, 192, 135, 308, 213,
  182, 313, 253, 146, 103, 214, 124, 331, 332, 230, 349, 194, 333, 259, 211,
  284, 294, 342, 166, 309, 195, 73, 264, 164, 233, 98, 345, 74, 136, 239, 122,
  231, 167, 175, 183, 93, 125, 84, 263, 200, 347, 132, 295, 128, 129, 177, 130,
  280, 94, 234, 168, 297, 141, 104, 142, 207, 262, 131, 298, 144, 76, 154, 310,
  57, 348, 59, 60, 265, 152, 61, 153, 62, 236, 65, 242, 235, 79, 176, 149, 133,
  81, 82, 96, 169, 97, 210, 170, 99, 268, 151, 100, 251, 134, 150, 267, 159,
  171, 272, 178, 196, 179, 203, 181, 185, 186, 188, 189, 199, 243, 204, 215,
  217, 218, 238, 219, 220, 222, 244, 245, 249,
];

// console.log(arrWtConsectiveElements(A))

// Q1. Wave Array
function waveArray(A) {
  A.sort((a, b) => a - b);
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = 
      [arr[idx2], arr[idx1]]);
  console.log(A);
  for (let i = 0; i < A.length - 1; i += 2) {
    swap(A, i, i + 1);
  }
  return A;
}

// console.log(waveArray([3, 6, 5, 10, 7, 20]))

// Q4. MaxMod

function maxMod(A, N) {
  let first = Number.MIN_VALUE;
  let second = Number.MIN_VALUE;

  for (let i = 0; i < N - 1; i++) {
    if (first < A[i]) {
      second = first;
      first = A[i];
    } else if (second < A[i] && A[i] != first) {
      second = A[i];
    }
  }
  if (second != Number.MIN_VALUE) return second;
  return 0;
}

// maxMod([1,1,2],3)

// https://www.guru99.com/quicksort-in-javascript.html
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}
var items = [5, 3, 7, 6, 2, 9];

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var result = quickSort(items, 0, items.length - 1);
console.log(result);
