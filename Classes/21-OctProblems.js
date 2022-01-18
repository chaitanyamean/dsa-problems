function maxAbDifference(A) {
// console.log(A);
    let n = A.length;
    let max_1 = Number.MIN_SAFE_INTEGER;
    let max_2 = Number.MIN_SAFE_INTEGER;
    let min_1 = Number.MAX_SAFE_INTEGER;
    let min_2 = Number.MAX_SAFE_INTEGER;
    console.log(min_2, max_1)
    for(let i =0; i<n; i++) {
        max_1 = Math.max(max_1, A[i]+i)
        max_2 = Math.max(max_2, A[i]-i)

        min_1 = Math.min(min_1, A[i]+i)
        min_2 = Math.min(min_2, A[i]-i)
    }
    console.log(max_1, min_1);
    let max_ans = Math.max(max_1 - min_1, max_2 - min_2)
    console.log(max_ans)

}

// A[i] - A[j] + i - j
// -A[i] + A[j] + i - j = -(A[i] - i) + (A[j] -j)

// maxAbDifference([1,3,-1])
// maxAbDifference([30, 74, 15, 49, 88, 77, 46, 48, 36, 62])
// maxAbDifference([-1000000000, -1000000000, -1000000000, -1000000000, -1000000000 ])




function addOneToNumber(A) {
        // Reverse the array
        for(let i = 0; i < A.length; i++) {
            if(A[i] > 0) {
                // avoid left side zeros
                A = A.slice(i);
                break;
            }
        }
        A.reverse()
        console.log(A);
        let carry = 0
        for(let i=0;i<A.length; i++) {
            if(i==0){
                let x = A[i] + 1
                if(x > 9) {
                    A[i] = x % 10;
                    carry = x / 10;
                } else {
                    A[i] = x
                } 
            } else {
                // if(A[i] == 0) A.pop()
                let x = A[i] + carry
                carry = 0
                if(x > 9) {
                    A[i] = x % 10;
                    carry = x / 10;
                } else {
                    A[i] = x
                } 
            }
        }
        if(carry > 0) {
            A.push(1)
        }
        return A.reverse()
}


// console.log(addOneToNumber([1,2,3]))
// console.log(addOneToNumber([9,9,9]))
// console.log(addOneToNumber([2,2,9]))
// console.log(addOneToNumber([0,0,2,2,9]))
// console.log(addOneToNumber([3, 0, 6, 4, 0]))




function firstMissingInteger(A) {
    let n = A.length;
    for(let i =0;i<n; i++) {
        console.log('IIOIOI', i);
            if(A[i] > 0 && A[i]<=n) {
                if(A[A[i]-1] != A[i]) {
                    console.log('A[A[i]-1]', A[A[i]-1], A[i], i)
                    // swap
                    let temp = A[A[i]-1]
                    A[A[i]-1] = A[i]
                    A[i] = temp
                    console.log('IIIIIII',i)
                    i--
                    console.log('AAA', A, i)
                }
            } 
    }
    console.log(A)
}



firstMissingInteger([3,4,-1,1])