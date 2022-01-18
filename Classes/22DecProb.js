// Q1. Unique Elements

function uniqueElement(A) {
    
    A.sort((a,b) => a-b)
    console.log(A)
    count = 0
    for(let i =0; i<A.length-1; i++) {
        if(A[i] != A[i+1]) {
            if(A[i] > A[i+1]) {
                count += A[i] + 1 - A[i+1]
                A[i+1] = A[i] + 1
            }

        } else {
            count += A[i] + 1 - A[i+1]
            A[i+1] = A[i] + 1
        }
    }
    console.log('Final',A,count)


}


uniqueElement([2,4,3,4,5,3])
// 2 3 3 4 4 5
// 2 3 4 4 4 5
// 2 3 4 5 6 5
uniqueElement([1,1,3])