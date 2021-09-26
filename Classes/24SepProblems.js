 // Merge Two Sorted Arrays

//  A = [4, 7, 9 ]
// B = [2 ,11, 19 ]

function mergeTwoSortedArrays(A,B) {
    let newArr = []
    let i = 0;
    let j = 0;
    // for(let i = 0; i<A.length; i++) {
    //     for(let j=0; j<B.length; j++) {

    //     }
    // }

while(i<A.length && j<B.length) {
    console.log(A[i], B[j])
    if(A[i] < B[j]){
        newArr.push(A[i])
        i++
    } else if(A[i] > B[j]) {
        newArr.push(B[j])
        j++
    } else {
        newArr.push(A[i])
        newArr.push(A[j])
        i++;
        j++

    }
    
}

while(i<A.length) {
    newArr.push(A[i])
        i++
}
while(j<B.length) {
    newArr.push(B[j])
        j++
}

console.log(newArr)
}




// mergeTwoSortedArrays([-4,3], [-2,-2])
// mergeTwoSortedArrays([4, 7, 9], [2,11,19])


// Majority Element (n/2)

function majorityElementNByTwo(A) {
    let map = new Map()
    let num = Math.floor(A.length / 2);
    for(let i =0; i<A.length; i++) {
        if(map.has(A[i])) {
            let val = map.get(A[i])
            if(val+1 > num) return `${A[i]} which occurs ${val+1} times which is greater than ${A.length}/2`
            map.set(A[i], val+1);
        } else {
            map.set(A[i], 1)
        }
    }
}


// console.log(majorityElementNByTwo([3, 3, 4, 2, 4, 4, 2, 4, 4]))
console.log(majorityElementNByTwo([2,1,1]));