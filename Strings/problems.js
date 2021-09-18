// String manuplation problems

// https://theasciicode.com.ar/ascii-printable-characters/capital-letter-z-uppercase-ascii-code-90.html
// https://medium.com/@codesprintpro/javascript-string-useful-methods-c74647f992ad
/**
 * 
 * ASCII values for A-Z = 65-90
 * ASCII values for a-z = 97-122
 * ASCII values for 0-9 = 48-57
 * 
 */
let b = 'B'
// console.log(charCodeAt(b))

let originalString = 'GeeksForGeeks';
newString = originalString.replace('G', '');
// console.log(originalString)


function stringOperations(A){
        
	    let newString = ''
	    let arr = ['a', 'e', 'i', 'o', 'u']
	    for(let i =0; i<A.length; i++) {
            if(A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0)<= 90) {
                    // not doing any thing, not appending any thing
	        } else if(arr.includes(A[i])) {
	            newString += '#';
                // appending # here
	        } else {
	            newString += A[i]
                // Appending remaining strings here
	        }
	    }
	    return newString+newString
}

// stringOperations('AbcaZeoB') // it should return bc###bc###


// Find number of occurrences of bob in the string A consisting of lowercase english alphabets.

function firstOccurence(A){
    let count = 0
    let letter = 'bob'
    // if(A.includes('bob')) {
    //     count++
    // }
    for(let i =0; i<A.length; i++){
        if(A[i] === 'b') {
            if(A[i+1] == 'o' && A[i+2] == 'b') {
                count++
            }
        }
    }

    console.log(count)

    
}



// firstOccurence('bobo')



// function gfg() {
//     var s = "bobob";
//     var f = "bob";
//     var i = 0,
//         n = 0,
//         j = 0;

//     while (true) {
//         console.log('III', j)
//         j = s.indexOf(f, j);
//         console.log('j', j)
//         if (j >= 0) {
//             n++;
//             j++;
//         } else
//             break;
//     }
//     console.log(n)
// }

// gfg()


// Closest Palindrome

function closestPalindrome(A) {
    let count = 0
	    let n = A.length
	    let val = Math.floor((n+1)/2)
	    for(let i=0;i<val; i++) {
	        if(A[i] !== A[n-i-1]) {
	            count++
	        }
	    }
	   if((n%2 == 0 && count == 1) || (n%2 == 1 && count <=1) ) {
	       return 'YES'
	   } else {
	       return 'NO'
	   }
	    

	}
// closestPalindrome('abcba')

function isAlpha(A){
    for(let i=0;i<A.length;i++) {
        // console.log(A[i], A[i].charCodeAt(0))
        if((A[i].charCodeAt(0) >= 65 && A[i].charCodeAt(0) <= 90) ||
            (A[i].charCodeAt(0) >= 97 && A[i].charCodeAt(0) <= 122)) {
                    console.log(A[i])
            } else {
                return 0
            }
    }
    
    return 1
}
// let A = [ "S", "c", "a", "l", "@", "r", "#", "2", "0", "2", "0" ]
// isAlpha(A)

function simpleReverse(A) {
    let n = A.length
    let newStr = '';
    for(let i = n-1; i >=0; i--) {
        newStr += A[i]
    }
    console.log(A, newStr)
}

// simpleReverse('scaler')


// Reverse The String

function revString(A) {
    let arr = A.split(' ')
    console.log(arr) 
    let newArr = []
    for(let i = arr.length-1; i>=0; i--) {
        newArr.push(arr[i])
    }

    console.log(newArr.join(' '))
}

// revString('the sky is blue')

// TC:O(N) and SC:O(1)
// function rev(str) {
//     return str.split("").reverse().join("");
// }
// module.exports = { 
// 	solve : function(s){
//         let ans = "";
//         let cur = "";
//         for (let i = s.length - 1; i >= 0; i--) {
//             if (s[i] == ' ') {
//                 if (cur.length == 0) {
//                     continue;
//                 }
//                 cur = rev(cur);
//                 if (ans.length > 0) { 
//                     ans += ' ';
//                 }
//                 ans += cur;
//                 cur = "";
//                 continue;
//             }
//             cur += s[i];
//         }
//         if (cur.length > 0) {
//             cur = rev(cur);
//             if (ans.length > 0) { 
//                 ans += ' ';
//             }
//             ans += cur;
//         }
//         s = ans;
//         return s ;
// 	}
// };


// Change character
/**
 * 
 * Here we are implmenting Array frequency
 * 
 *  
 * */ 

function changeCharater(A, B) {
    let arr = new Array(26).fill(0)
    console.log('arr', arr)
    for(let i=0; i<A.length; i++) {
        arr[A[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    // arr.sort((a,b) => a - b);
    console.log(arr)

    let i = 0;
    while(B >= arr[i]) {
        B -= arr[i]
        i++
    }
    console.log(i)
    return 26 - i;
}

// console.log(
//     changeCharater('abcabbccd', 3)
//     )

    // Longest Common Prefix

    function longestCommonPrefix(A) {

        let n = A.length
        let i = 0;
        let ans = '';
        while(true) {
            let ok = true;
            for(let j =0; j <n-1; j++) {
                if(i>=Math.min(A[j].length, A[j+1].length)) {
                    ok= false
                    break;
                }
                if(A[j][i] !== A[j+1][i]) {
                    ok = false
                    break;
                }
            }
            if(ok) {
                ans += A[0][i]
            } else {
                break;
            }
            i++
        }
            console.log(ans)
        return ans
        // console.log(ans)
    }

    // longestCommonPrefix(["abcdefgh", "aefghijk", "abcefgh"])
    // longestCommonPrefix(    [ "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ]
    // )

//    [ "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" ]


/**
 * 
 * @param {string} A 
 * @param {Number} B
 * 
 * If B > n the n we need to take B = B%n
 *   
 */
function rotateString(A, B) {
        let n = A.length
        let j = 1;
        let finalStr = ''
        if(B>n) {
            B = B%n
        }
        for(let i = 0; i<n-B; i++) {
            finalStr += A[i]
        }
    for(let i=0; i<B; i++) {
        let subStr = A.substring(n - j, n-i) 
        console.log(subStr);
        finalStr = subStr + finalStr;
        j++;
    }
    console.log(finalStr)
}

// bnbkftdv
// rotateString('jadgbxjesitcdbnbkftdv', 29) // bnbkftdvjadgbxjesitcd
// rotateString('scaler', 2);

function amazingSubString(A) {
    let arr= ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let n = A.length;
    let count = 0;
    for(let i=0; i<A.length; i++) {
        if(arr.includes(A[i])) {
            let remainingChars = n - i;
            count += remainingChars
            count = count % 10003;
        }
    }
    console.log(count);
}


// amazingSubString('AzZGBauYuTknYjjWEEbLvqMQwnoSgXKBdHKEVpeoxYNNtBfrxQrPauttMzjKFayKwMeuChjzCocgAHfAmPCatOqarzLuabyTnxoheeocVshfERNssVPfRyPmwvOVGbzNAuvryYNWwIeyZLMlLbkcFFJRHjEIgIwOThRJJFpLbunVrbhAYsMtdsKslLAGElwrZjvZweIytMpPEYVmktQeNleNROcTjrNxXeHvOMMTMfqZHTUjetojHFzZwOekfAILYISANxeJFRNgeZDKoOTddXqxduPIjGXsRSSkgIqKMeSqlQwAKtdrkvHLgmKleNAPEztGMPmZzUuCImLAhzUnXmsVzFvJUTeIKleuRnMPNAPWJYAZLXgzTBPmkXVShbBSlIAJSeFgvRFvcoqfVFgHUefxUxuYFCfUxbxlOslUhYRFXKmMmqDIQhhfXyGqUwGMSYeLLpEsKAhvFUzavDCOUgtmmNMnsvfmCdPWuWIjuUfZCBTrWnaDopbqXcjzSqRMpQWIBNnMcOQZjDkjPkxsuwENYQyjgSHFJrgSLnwbEInBfdeIfBbVuZZbBrblJgKHOmLZACLQkSRxxQJeUMPIQutraxFtrRcSeqAejOTSqaFGglQOoWPkcNOnLIgfclWNtjGQRVMlqCPUnUlOLbHfkzUyNAmTsswWtZjIGUBrLmRmstHgVcRUgWdQTCEPRzjPVTMJRJocYHftwoRzOSyQexjmceRHdqFdgNuGmGTUdXQaNwKmvOUzZPzGCBVcbVLgMoQrESbpVGteVVntOwEWxXsZnSAoIfBSsWVhDFBuDTkcrnsPdmmSHymouxHlcgtjgKUAPznxsIRUjDFsrjadJjEtPaWTVBHpatqYeSgrpWJDOGfgIGQPcTIXVsCVyCfKMpcXWGkvwuRuTmvCbNMLeUkZrEpYZdlKAgFELfwCCbZCYBcXhfUrsIHfdwhYyxHKAMYMERwlyRtxObDoxBhjXmynYkmkYZrkzlCuvrhW')


function largestNumber(A) {
    let n = A.length;
    let ans = A[0]
    let arr = []
    A.sort((a,b) => {
        console.log(a, b)
        let ab = a.toString() + b.toString();
        let ba = b.toString() + a.toString();
        console.log('AB', ab)
        if(Number(ab) > Number(ba)) {
            return -1
        }
        return 1
    })
    console.log(A.join(''))
    return A.toString();
}


// largestNumber([3, 30, 34, 9, 5])




function lexograpicallyLargest(A) {
    let strOfArray = A.split('_');
    let S = strOfArray[0];
    let T = strOfArray[1].split('');
    let count = 0;
    let newStr = ''
    let j = 0
    T.sort((a,b) => a >b ? -1 : 1)
    let sortedStr = T.join('')
    console.log(sortedStr)
    for(let i = 0; i<S.length && j<sortedStr.length; i++) {
        if(S[i].charCodeAt(0) < sortedStr[j].charCodeAt(0)) {
            // console.log(S[i], sortedStr[j], S.replace(S[i], sortedStr[j]))
        //    newStr += S.replace(S[i], sortedStr[j])
        newStr += sortedStr[j]
            
        } 
        j++
    }
    if(S.length > j) {
        console.log(S)
        for(let i = j; i<S.length; i++) {
            newStr += S[i]
        }
    }

    console.log('ans', newStr);

    
}

// lexograpicallyLargest('psafelqnoe_eflqypyqecbrvxyoagogravxvlmrirxitihomztvjmenihqvfu')
// lexograpicallyLargest('abb_c')
// lexograpicallyLargest('ittmcsvmoa_jktvvblefw')  // wvvtlkjfeb


// abcdefght_zyxwv

// zyxwvfght


function sortingProb(A, B) {
    A.sort()
    console.log(A)
    let min= Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let newMap = new Map()
    for(let i = 0; i<A.length; i++) {
        min = Math.min(A[i], min)
        max = Math.max(A[i], max)

        if(newMap.has(A[i])) {
            let val = newMap.get(A[i])
            newMap.set(A[i], val+1);
        } else {
            newMap.set(A[i], 1);
        }
    }
    console.log(newMap, min, max)

    while((min < max) && B != 0) {
        let minMapValue = newMap.get(min)
        let maxMapValue = newMap.get(max)
        
        if(newMap.get(min) < newMap.get(max)) {
            
            if(B < newMap.get(min)) {
                break;
            }
            
            // newMap.get(min+1) =
            let nextVal = newMap.get(min+1)
            
            newMap.set(min+1, nextVal+minMapValue)
            B = B - minMapValue;
            min++
        } else {
            if(B < newMap.get(max)) {
                break;
            }
            let nextVal = newMap.get(max-1)
            newMap.set(max-1, nextVal+maxMapValue)
            B = B - maxMapValue;
            max--
        }
    }
    return (max - min)
}


console.log(
    sortingProb([2, 8, 3, 7, 8, 7, 9 ], 9)
    )