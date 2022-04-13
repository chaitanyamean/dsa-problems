//  N integers containing only 1, 2 & 3
// 1 2 3 11 12 13 21 22 23 31 32 33 111
function integerContaining(A) {
    let list = []
    list.push('1')
    list.push('2')
    list.push('3')

    console.log(list)
    let p1 = 0
    while(list.length < A) {
        let n = list[p1]
        list.push(n + '1')
        list.push(n + '2')
        list.push(n + '3')
        p1++
    }

    console.log('A[i]',list[A-1])
}


// console.log(integerContaining(9))


function taskSchedule(A,B) {
    let q = []
    let cycle = 0;
    for(let i=0;i<A.length; i++) {
        q.push(A[i])
    }

    console.log(q)

    for(let i =0; i<A.length; i++) {

        while(B[i] !== q[0]) {
            let temp = q[0]
            q.shift()
            cycle++
            q.push(temp)
        }
        q.shift()
        cycle++
    }
    console.log(cycle)
}




let A = [2, 3, 1, 5, 4]
let B = [1, 3, 5, 4, 2]
// taskSchedule(A,B)

// According to the order array B task 1 has to be performed first, 
// so the CPU will move tasks 2 and 3 to the end of the queue (in 2 clock cycles).
// Total clock cycles till now = 2
// Now CPU will perform task 1.
// Total clock cycles till now = 3
// Now, queue becomes [5, 4, 2, 3]
// Now, CPU has to perform task 3. So it moves tasks 5, 4, and 2 to the back one-by-one.
// Total clock cycles till now = 6
// Now all the tasks in the queue are as in the required order so the CPU will perform them one-by-one.
// Total clock cycles = 10





function deleteKelementsInqueue(A, K) {
    console.log(A,K)
    let stack = []

    // delete k elements in A
    // add those in stack

    // for(let i =0; i<K; i++) {
    //     // let temp = A.shift()
    //     stack.push(A[i])
    // }

    // console.log(A, stack);

    // // delete k elements in stack and add it to queue
    // let count = 0
    // for(let i =stack.length; i>0; i--) {
    //     let temp = stack.pop()
    //     A[count] = temp;
    //     count++
    // }

    for (let i = 0; i < K / 2; i++) {
        [A[i], A[K - i - 1]] = [A[K - i - 1], A[i]]; // i = 1 43,  // k = 6 [6-2-1] -> 1
    }
    console.log(A)
    return A;

    // i -> 0 : 5 35 25 5 34 43 8 7
    // i -> 1 : 5 34 25 5 35 43 8 7
    // i -> 2 : 5 34 5 25 35 43 8 7


}


let a = [43, 35, 25, 5, 34, 5, 8, 7]

deleteKelementsInqueue(a, 6)




