// Q1. Longest Consecutive Sequence

function longConsectiveSeq(A) {
    // A.sort((a,b) => a-b);
    // console.log(A)

    //Fan out Method
    //O(N)
    const set = new Set(A); //Init a set with all the A
    let maxLength = 0; //Result
    for (const num of A) {
        if (!set.has(num)) continue; //If the number has been removed before, continue
        set.delete(num); //Remove the current number from the set
        
        //Fan out to the left to find any adjacent numbers
        let start = num; 
        while (set.has(start - 1)) { 
            set.delete(start - 1); //Remove them from the set
            start--; //Decrement the left pointer
        }
        //Fan out to the right to find any adjacent numbers
        let end = num;
        while (set.has(end + 1)) {
            set.delete(end + 1); //Remove them from the set
            end++;  //Increment the left pointer
        }
        maxLength = Math.max(maxLength, end - start + 1); //Try to update the new max length
    }
    return maxLength;
}


let A = [100, 4, 200, 1, 3, 2]

// console.log(longConsectiveSeq(A))

// sub array with 0 sum
function subArrayWithZero(A) {
    console.log(A)
    const set = new Set()
    let sum = 0;

    for(let i =0; i<=A.length; i++) {
        sum += A[i]
        if(sum == 0 || set.has(sum)) {
            return 1
        }
        set.add(sum)
    }
    return 0
}

// console.log(subArrayWithZero([1,-1]))


// Q2. Colorful Number

function colorfulNumber(A) {
    let arr = []

    while(A) {
        arr.push(A % 10)
        A= Math.floor(A/10)
    }

    let set = new Set()
    for(let i =0; i<arr.length; i++) {
        let product = 1
        for(let j =i; j<arr.length; j++) {
            product *= arr[j]
            if(set.has(product)) {
                return 0
            }
            set.add(product)
        }
    }
    return 1
}



console.log(colorfulNumber(26))