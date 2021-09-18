
function rearrange(A) {
    let n = A.length;
    for (let i = 0; i < n; i++) {
        console.log(A[i], A[A[i]])
        A[i] += (A[A[i]] % n) * n;
    }

    for (let i = 0; i < n; i++) {
        A[i] = Math.floor(A[i] / n);
    }

    console.log(A)
}
// rearrange([4,0,2,1,3])

function findColumWithValue(A) {
    let B = A.toString()
    let arr = []
    // map 
    let char = []
    
    for(let i =0; i<26; i++) {
        let val = 'A'.charCodeAt(0) + i
        char.push(String.fromCharCode(val))
    }

    while(A>0) {
        let idx = (A-1) % 26;
        console.log(idx);
        let chars = char[idx]
        arr.push(chars)
        A = Math.floor((A-1) / 26)
    }
    console.log(arr.reverse().join(''));
}

// findColumWithValue(7964)

function intergetPalindrome(A) {
    let temp = A
    let rev = 0
    while(A>0) {
        console.log(rev)
        rev =(A%10) + (rev*10)
        A = Math.floor(A/10)
    }
    console.log(rev, temp)
    return temp == rev
}
// console.log(intergetPalindrome(21474473412));

function reverseNumber(A) {
    let temp = A
    let ans;
    let rev = 0
    while(A>0) {
        temp = A % 10
        A = A / 10
        ans = rev * 10 + temp;
    }
    rev=ans
    console.log(A, temp, rev, ans)
}

console.log(reverseNumber(1234))
