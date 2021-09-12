// finc sum using recursion

function findSum(A){
// if(A.)
// let B = A.toString()
// let n = B.length;
// console.log( typeof A, typeof n)

if(A == 0) return 0

return (A % 10 + findSum(Math.floor(A/10)))
}
// console.log(
//     findSum(46)
//     )

//     console.log(46 % 10,Math.floor(46/10))


    // check is palendrome or not

    function isPalendrome(A, start, end){
	        
        if(start >= end) {
            return true
        }
        
        return (A[start] === A[end] && isPalendrome(A, start+1, end-1))

}
// let A = 'namon'
// console.log(

//     isPalendrome(A,0,A.length-1)
//     )

    // Unique Elements

    function uniqueElements(A) {
        A.sort((a,b) => a-b)
        let count = 0
        for(let i =1; i<A.length; i++) {
            if(A[i] <= A[i-1]) {
                count += (A[i-1] - A[i] + 1) // 3 - 3 + 1
                A[i] = A[i-1] + 1;
            }
        }
        console.log(count)
    }

// 2 3 3 4 4 5
    uniqueElements([51, 6, 10, 8, 22, 61, 56, 48, 88, 85, 21, 98, 81, 76, 71, 68, 18, 6, 14, 23, 72, 18, 56, 30, 97, 100, 81, 5, 99, 2, 85, 67, 46, 32, 66, 51, 76, 53, 36, 31, 81, 56, 26, 75, 69, 54, 54, 54, 83, 41, 86, 48, 7, 32, 85, 23, 47, 23, 18, 45, 79, 95, 73, 15, 55, 16, 66, 73, 13, 85, 14, 80, 39, 92, 66, 20, 22, 25, 34, 14, 51, 14, 17, 10, 100, 35, 9, 83, 31, 60, 24, 37, 69, 62])