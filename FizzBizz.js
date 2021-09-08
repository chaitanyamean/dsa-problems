/*
Problem Description

Given a positive integer A, return an array of strings with all the integers from 1 to N. 
But for multiples of 3 the array should have “Fizz” instead of the number. 
For the multiples of 5, the array should have “Buzz” instead of the number. For numbers 
which are multiple of 3 and 5 both, the array should have "FizzBuzz" instead of the number.
Look at the example for more details.
Problem Constraints
1 <= A <= 500000
Input Format
The first argument has the integer A.
Output Format
Return an array of string.
*/

function fizzBuzz(N) {
    let arr = []
    for(let i = 1; i <= N; i++) {

        if(i % 15 == 0) {
            arr.push('FizzBuzz')
            continue;
        }

        if(i % 3 === 0) {
            arr.push('Fizz')
        } else if (i % 5 == 0) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }
    console.log(arr)
}

fizzBuzz(30)