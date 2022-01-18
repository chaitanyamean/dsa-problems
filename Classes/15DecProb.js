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


console.log(implmentFPowerFunctin(213,231,1))