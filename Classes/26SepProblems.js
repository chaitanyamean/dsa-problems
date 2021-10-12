function subarraySum(A){
    let sum = 0
    let N = A.length
    for(let i =0; i<A.length; i++) {
        let count = BigInt((i+1) * (N-i) ) * BigInt(A[i])
        
        sum = sum + count
    }
        console.log(sum)
    return sum


}


// subarraySum([2,9,5])

function rowWise(A, B) {
for(let i =0; i<A.length; i++) {
    for(let j =0; j<A[i].length; j++) {
        // console.log(A[i][j])
        if(B == A[i][j]) {
            console.log(i, j)
            i = i+1;
            j=j+1
            return i * 1009 + j
        }
    }
}

return -1

}

let A = [ [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9] ]
let B = 2

// console.log('ROWWISE',rowWise(A,B)) // TC: O(N^2)

function optimizedSearchInMatrix(A,B) {
    console.log(A,B);
    let n = A.length;
    let i = 0
    let j = n-1

    while(i<n && j>=0) {

        if(A[i][j] == B) {
            console.log('AABB', i,j)
            return 1
        }
        if(A[i][j] > B) {
            j--
        } else {
            i++
        }

        // return -1

    }

    return -1
}



console.log(optimizedSearchInMatrix(A,B))