console.log('21 sep class Assignments and problems');

// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
// NOTE:
// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

function isArrayEquilibrium(A) {
    console.log(A)

    let ls = 0
    let total_sum = 0
    let n = A.length;
    let rs = 0;
    // let cnt = 0;
    for(let i =0; i<n; i++) {
        total_sum +=A[i]
    }
    console.log(total_sum);
    for(let i =0; i<=n-1; i++) {
        rs = total_sum - A[i] - ls
        console.log('LS and RS', ls, rs)
        if(ls == rs) return i;
        ls += A[i]
    }
    return -1

}

// console.log(isArrayEquilibrium([-7, 1, 5, 2, -4, 3, 0]))


function minAbsoluteDifference(A) {
    let min_val = Number.MAX_VALUE;
    A.sort((a,b) => a-b)
    console.log(A);

    for(let i=0; i<A.length-1; i++) {
        let val = Math.abs(A[i] - A[i+1])
        if(min_val> val) {
            min_val = val;
        }
        min_val = Math.min(val, min_val);
        console.log(val)
    }

    console.log(min_val);
}


// minAbsoluteDifference([5,17,100,11])


// Maximum Difference 
function maxAbsoluteDifference(A,B) {
    console.log(A);
    let total = 0
    for(let i = 0; i<A.length; i++) {
        total += A[i]
    }
    A.sort((a,b) => a-b)
    let n = A.length
    let bArr = A.slice(n-B,n)
    let s1 = 0
    bArr.forEach(element => {
            s1 += element
    });

    let s2 = total - s1
    let ans = Math.max((2*s1) - total, total-(2*s1))
    console.log(ans);

    let bArr1 = A.slice(0,B)
    let s3 = 0
    bArr1.forEach(element => {
            s3 += element
    });

    let s4 = total-s3
    let ans2 = Math.max((2*s3) - total, total-(2*s3))
    console.log(ans2);
    return Math.max(ans, ans2)
}







maxAbsoluteDifference([5,17,100,11], 3)
maxAbsoluteDifference([1,2,3,4,5], 2)
