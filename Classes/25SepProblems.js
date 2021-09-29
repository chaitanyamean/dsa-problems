// N/3 Repeat
// https://www.geeksforgeeks.org/n3-repeated-number-array-o1-space/
function repeatN3(A) {
    let n = A.length;

    let firstNum  = Number.MAX_VALUE;
    let secondNum  = Number.MAX_VALUE;
    let count1 = 0
    let count2 = 0
    for(let i =0; i<n; i++) {
        if(firstNum == A[i]) {
            count1++
        } else if(secondNum == A[i]) {
            count2++
        } else if(count1 == 0) {
            count1++
            firstNum = A[i]

        } else if(count2 == 0) {
            count2++
            secondNum = A[i]
        } else {
            count1--
            count2--
        }
    }

    // console.log(firstNum,count1, secondNum, count2)
    count2 = 0
    count1 = 0
    for(let i =0; i<n; i++) {
        if(A[i] == firstNum) {
            count1++
        } else if(A[i] == secondNum) {
            count2++
        }
    }

    if(count1 > parseInt(n/3, 10)) {
        return firstNum
    } else if(count2 > parseInt(n/3, 10)) {
            return secondNum
    }

    return -1
}


console.log(repeatN3([1, 2, 3, 1, 1]))