// Q1. Smallest Prefix String

function smallestPrefix(A,B) {
    B = B[0]
    let str = A[0]
    console.log(A.length)
    if(A.length === 1) {
        return A+B
    }
        for(let i = 1; i <= A.length; i++)
    {
        console.log("SS", str)
        if (A[i] < B)
        {         
            str += A[i]
          
        } else {
            str += B
            break;
        }
    }
      
    return str;
}


// console.log(smallestPrefix("harry", "potter"))
// console.log(smallestPrefix("tom", "rider"))


// Count A

function countA(A) {
    let m = 0

    for(let i=0;i<A.length;i++) {
        if(A[i] == 'a') {
            m++
        }
    }
    console.log(Math.floor(m * (m+1)/2))

    // 
}

// countA('vleirzohviwfaqnefbdwzpcjdlxhqollqfdrdqvhqlinlggbmpxqwfsdytuihbmkssmelzpn')

// Closest palindrome

function closestPalendrome(A) {
    let j = A.length-1
    let i =0
    count = 0
    while(i<j) { // 0,5 
        console.log(A[i], A[j])
        if(A[i] != A[j]) {
            count++
        }
        j--;
        i++;
    }
    if (count == 0 && A.length % 2 === 0) {
        return 'NO'
    } else if(count == 0 && A.length % 2 != 0) {
        return 'YES'
    }
    if(count == 1) {
        return 'YES'
    }
        return 'NO'
    
}

// console.log(closestPalendrome('abccda'))
// console.log(closestPalendrome('aba'))


function isPalendrome(A) {
    let i =0
    let j = A.length-1

    while(i<=j) {
        if(A[i] == A[j]) {
            i++
            j--
        } else {
            return false
        }
    }

    return true
}
// Q3. Make String Pallindrome
function makeStringPallindrome(A) {
    // abc
    let P = A
    let count = 0
    let flag = 0
    for(let i =0; i<A.length; i++) {
        if(isPalendrome(A)) {
            flag = 1;
            break;
        } else {
            count++
            A=A.substring(0, A.length-1);
        }
    }
    if(flag) {
        return count
    }
}

console.log(makeStringPallindrome('babb'))

// console.log(isPalendrome('madam'))