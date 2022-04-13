// Q1. Balanced Paranthesis

function balancedParanthesis(A) {
    // console.log(A)

    let map = {
        "{": "}",
        "(" : ")",
        "[" : "]"
    }

    let stack = []

    for(let i=0; i<A.length; i++) {
        let item = A[i]
        if(map[item]) {
            stack.push(map[item])
        } else {
            if(item !== stack.pop()) {
                return false;
            }
        }
    }
    console.log('222',stack.length);

    if(stack.length === 0) return 1

}


let A = "{([])}"

console.log(balancedParanthesis('(){'))



function passBall(A,B,C) {
    console.log(C)
    let stack = []
    stack.push(B)


    for(let i=0; i<C.length; i++) {
        if(C[i] == 0) {
            stack.pop()
        } else {
            stack.push(C[i])
        }
    }
    console.log(stack)
    return stack[stack.length-1]
}


console.log(passBall(10,23,[86, 63, 60, 0, 47, 0, 99, 9, 0, 0]))