/**
 * left max and right max
 * leftMax - should contain max of all
 * 
 */




// Pick from both sides!

function pickFromBothSides(A, B) {
    let L=0, R=0, ans = 0
    for(let i =0; i<B; i++) {
        L += A[i] 
        console.log('insideloop', L, A[i])
    }
    
    ans = L+R
    console.log("19", L,R,ans)
    
    k=A.length -1
    for(let j=B-1; j>=0; j--) {
        L = L - A[j]
        R = R + A[k]
        k--
        console.log(L,R,ans)
        ans = Math.max(ans, L+R)
    }
    return ans
}


// console.log(pickFromBothSides([5, -2, 3 , 1, 2], 3))


function prefixSum(A) {
    let pr=[]
    pr[0] = A[0]
    for(let i = 1; i<A.length; i++) {
        pr[i] = pr[i-1] + A[i]
    }
    console.log(pr)
}

// prefixSum([-3,6,2,4,5,2,8,-9,3,1])

// Beggars Outside Temple

function beggersOutside(A, B) {
    console.log(A,B)
    let p = new Array(A).fill(0)
    console.log(p)
    for(let i =0; i<B.length; i++) {
        let L = B[i][0] - 1
        let R = B[i][1] - 1
        let val = B[i][2]

        console.log(L,R,val)

        p[L] += val
        if((R+1) < A) {
            p[R+1] -= val 
        }


    }
    console.log(p)

    for(let i=1; i<A; i++) {
        p[i] = p[i-1] + p[i] 
    }

    console.log(p)
}


// Return: [10, 55, 45, 25, 25]
beggersOutside(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]])