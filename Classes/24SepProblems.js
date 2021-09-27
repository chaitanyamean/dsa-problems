 // Merge Two Sorted Arrays

//  A = [4, 7, 9 ]
// B = [2 ,11, 19 ]

function mergeTwoSortedArrays(A,B) {
    let newArr = []
    let i = 0;
    let j = 0;
    // for(let i = 0; iBA.length; i++) {
    //     for(let j=0;Bj<B.length; j++) {

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
// console.log(majorityElementNByTwo([2,1,1]));


/*
// Minimize the absolute difference
// Given three sorted arrays A, B and C of 
not necessarily same sizes.
// Calculate the minimum absolute difference between 
the maximum and minimum number from the 
triplet a, b, c such that a, b, c belongs 
arrays A, B, C respectively. i.e. 
minimize | max(a,b,c) - min(a,b,c) |.
*/

function minimizeAbsDiff(A,B,C) {
    let i = A.length-1;
    let j = B.length-1;
    let k = C.length-1;

    let min_diff
    let curr_diff
    let max_diff
    console.log(Math.max(A[i], Math.max(B[j], C[k])));
    console.log(Math.min(A[i], Math.min(B[j], C[k])));
    // console.log(Math.abs(Math.max(A[i], Math.max(B[j], C[k]))));

    min_diff = Math.abs(Math.max(A[i], Math.max(B[j], C[k])) - 
                Math.min(A[i], Math.min(B[j], C[k])))

                console.log(min_diff);

                while(i>-1 && j>-1&& k>-1) {

                    curr_diff = Math.abs(Math.max(A[i], Math.max(B[j], C[k])) - 
                    Math.min(A[i], Math.min(B[j], C[k])))

                    if(curr_diff < min_diff) {
                        min_diff = curr_diff
                    }


                    max_diff = Math.max(A[i], Math.max(B[j], C[k])) 

                    if(max_diff == A[i]) {
                        i--
                    } else if(max_diff == B[j]) {
                        j--
                    } else {
                        k--
                    }

                }
                console.log(min_diff);

}


let D = [ 5, 8, 10, 15 ];
let E = [ 6, 9, 15, 78, 89 ];
let F = [ 2, 3, 6, 6, 8, 8, 10 ];
// minimizeAbsDiff(D,E,F)
// minimizeAbsDiff([1, 4, 5, 8, 10], [6,9,15], [2,3,6,6])


// Remove Duplicates from Sorted Array

function removeDuplicates(A) {
    let n = A.length
    
    let j =1
    for (let i = 1; i < n; i++) {

        if (A[i] != A[i-1]) {

            A[j++] = A[i];
        }
    }
        return A.splice(0, j)
}

// let B = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 88 ]

// removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5])
// let B = [0]
// console.log(
// 'asas',
//     removeDuplicates(B)
//     )



// Intersection Of Sorted Arrays
function intersectionofSortedArrays(A,B) {
    let A1 = new Map()
    let A2 = new Map()

    for(let i=0; i<A.length; i++) {
        if(A1.has(A[i])) {
            let val = A1.get(A[i])
            A1.set(A[i], val+1);
        } else {
            A1.set(A[i], 1)
        }
    }

    for(let i=0; i<B.length; i++) {
        if(A2.has(B[i])) {
            let val = A2.get(B[i])
            A2.set(B[i], val+1);
        } else {
            A2.set(B[i], 1)
        }
    }
    let newArr = []
    for(let i = 0; i<B.length; i++) {
            if(A1.has(B[i]) == A2.has(B[i])) {
                let val1  = A1.get(B[i])
                let val2  = A2.get(B[i])

                A1.set(B[i],val1-1)
                A2.set(B[i],val2-1)
                console.log(A2)
                newArr.push(B[i])
            } else {
                
            }
    }

    return newArr;

}


// console.log(intersectionofSortedArrays([1, 2, 3, 3, 4, 5, 6],[3,3,5]));
// console.log(intersectionofSortedArrays([1, 2, 3, 4, 5, 6],[3,5]));

let A = [ 1, 3, 8, 10, 13, 13, 16, 16, 16, 18, 21, 23, 24, 31, 31, 31, 33, 35, 35, 37, 37, 38, 40, 41, 43, 47, 47, 48, 48, 52, 52, 53, 53, 55, 56, 60, 60, 61, 61, 63, 63, 64, 66, 67, 67, 68, 69, 71, 80, 80, 80, 80, 80, 80, 81, 85, 87, 87, 88, 89, 90, 94, 95, 97, 98, 98, 100, 101 ]
let B = [ 5, 7, 14, 14, 25, 28, 28, 34, 35, 38, 38, 39, 46, 53, 65, 67, 69, 70, 78, 82, 94, 94, 98 ]

// console.log(intersectionofSortedArrays(A,B));

function intersectionofSortedArrays2(A,B) {
    // console.log(A,B)
    let n = A.length;
    let m = B.length;
    let i = 0;
    let j = 0;
    let arr = []
    while(i<n && j<m) {
        console.log(i,j,n,m);
        if(A[i]<B[j]) {
            i++
        } else if(A[i]>B[j]) {
            j++
        } else if(A[i] == B[i]) {
            i++;
            j++;
            arr.push(A[i])
        }

    }

    return arr;

}


console.log(intersectionofSortedArrays2(A,B))
