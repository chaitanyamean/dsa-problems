// Q3. Is magic?
// Given a number A, check if it is a magic number or not.

function isMagic(A) {
    // console.log(A)
    let sum = 0
    while(A > 0|| sum > 9) {
        if(A == 0) {
            A = sum
            sum = 0
        }
        sum = sum + A % 10;
        A = Math.floor(A/10)
        console.log(A, sum)
    }
    return sum;
}

// let  A = 1291
// console.log(isMagic(A))

// sum of digits

function sumOfDigits(A) {
    console.log(A)
    let sum = 0;
    while(A>0) {
        
        sum = sum + A%10
        A= Math.floor(A/10);
    }
    return sum
}
// return (n % 10 + sum_of_digit(n / 10));



// console.log(sumOfDigits(11));


// Sequence of numbers

function solveProb(A) {
    if(A == 2) return 2
    else if(A==1 || A ==0) return 1
    if(dp[A] != -1) {
        return dp[A]
    } 
       let ans = solveProb(A-1) + solveProb(A-2) + solveProb(A-3) + A
        dp[A] = ans
        console.log('aaa',ans)
        return ans;

}

function seqNumbers(A) {
    console.log(A)
   return solveProb(A)
}

let dp = new Array(22).fill(-1)
dp[0] = 1
dp[1] = 1
dp[2] = 2
// console.log(seqNumbers(2))

// Find fibnoci

function findfibnoci(A) {

    if(A == 0) return 0;
    if(A == 1) return 1;

    if(A <= 1) return A;


    return findfibnoci(A-1) + findfibnoci(A-2)

}

// console.log(findfibnoci(9))

// Q2. Sum of Digits!
function sumOfDigitsRecursion(A) {
    console.log(A)
    // let sum = 0

    if(A == 0) return 0
    if(A == 1) return 1

    // sum = sum + A % 10
    // return sum + sumOfDigitsRecursion(Math.floor(A/10))
    return (A % 10 + sumOfDigitsRecursion(Math.floor(A / 10)));
}

// console.log(sumOfDigitsRecursion(46))

// Q1. Implement Power Function

function pow(A,B) {
    if(A < 0) {
        A = A + C
    }
    if(B == 0) return 1
    let p = Math.floor(pow(A, Math.floor(B/2)))
    console.log('PP',p)
    if(B % 2 == 0) {
        return p * p
    } else {
        return A * p *p
    }
}

function implmentFPowerFunctin(A,B,C) {
    let powVal = pow(A,B)
    console.log(powVal)
    return powVal % C
}


// console.log(implmentFPowerFunctin(213,231,1))



// 


function singlenumber(A) {
    // let map = new Map()
    //     for(let i =0; i<A.length; i++) {
    //         if(map.has(A[i])) {
    //             let val = map.get(A[i])
    //             map.set(A[i], val+1)
    //         } else {
    //             map.set(A[i], 1)
    //         }
    //     }

    //     for(let [key,value] of map) {
    //         console.log(key,value)
    //         if(value === 1) {
    //             console.log(key)
    //             return key
    //         }
    //     }


    let ans = 0;
    A.forEach((ele) => {
        console.log('AA', ele, ans)
        ans = ans ^ ele
        // console.log(ans)
    });
    return ans;
}

let A33 = [ 723, 256, 668, 723, 140, 360, 597, 233, 128, 845, 737, 804, 986, 
    701, 906, 512, 845, 510, 510, 227, 430, 701, 366, 946, 464, 619, 946, 627, 
    209, 771, 424, 555, 959, 711, 530, 937, 716, 261, 505, 658, 706, 140, 511, 
    277, 396, 233, 819, 196, 475, 906, 583, 261, 147, 658, 517, 197, 196, 702, 
    944, 711, 128, 555, 149, 483, 530, 291, 716, 258, 430, 464, 601, 749, 149, 
    415, 802, 573, 627, 771, 660, 601, 360, 986, 291, 51, 415, 51, 227, 258, 937, 
    366, 923, 669, 33, 517, 417, 702, 475, 706, 110, 417, 275, 804, 500, 473, 
    746, 973, 669, 275, 973, 147, 817, 657, 277, 923, 144, 660, 197, 511, 793, 
    893, 944, 505, 322, 817, 586, 512, 322, 668, 33, 424, 962, 597, 144, 746, 345, 
    753, 345, 269, 819, 483, 368, 802, 573, 962, 583, 615, 208, 209, 269, 749, 256, 
    657, 619, 893, 959, 473, 753, 299, 396, 299, 500, 368, 586, 110, 793, 737, 615 ]

console.log(singlenumber(A33))