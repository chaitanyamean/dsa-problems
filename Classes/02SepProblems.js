// Valid sudoko
// We need to iterate loop - n = 9
// we need to find if ele exists in row, column and box
// 

function validSudoko(A) {
    let seen = new Set()

    for(let i =0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(A[i][j] != ".") {
                let colCell = `cell: ${j} ${A[i][j]}`;
                let rowCell = `row: ${i} ${A[i][j]}`;
                let subBoxCell = `subBox: ${parseInt(i/3)}-${parseInt(j/3)} ${A[i][j]}`;
                if(!seen.has(colCell) && !seen.has(rowCell) && !seen.has(subBoxCell)) {
                    seen.add(colCell);
                    seen.add(rowCell);
                    seen.add(subBoxCell);
                }
                else 
                    return false;
              }
                // console.log(A[i][j])
            }
        }
    return true;
}



let A  = [ "....5..1.", ".4.3.....", ".....3..1", "8......2.", "..2.7....", ".15......", ".....2...", ".2.9.....", "..4......" ]

console.log(validSudoko(A))


function permutationAAndB(A, B) {
    console.log(A,B)

    let A1 = new Map()
    let B1 = new Map()
    let ans = 0;
    for(let i = 0; i<A.length; i++) {
        if(A1.has(A[i])) {
            let val = A1.get(A[i])
            A1.set(A[i], val+1)
        } else {
            A1.set(A[i], 1);
        }
    }
    for(let i = 0; i<A.length; i++) {
        if(B1.has(B[i])) {
            let val = B1.get(B[i])
            B1.set(B[i], val+1)
        } else {
            B1.set(B[i], 1);
        }
    }

    if(compareMaps(A1,B1)) {
        ans += 1;
    }

    for(let i = A.length; i<B.length; i++) {

        let val = B1.get(B[i - A.length])
        console.log('68',val, B[i - A.length]);
        B1.set(B[i-A.length], val-1);

        if(B1.has(B[i])) {
            let val = B1.get(B[i])
            B1.set(B[i], val+1)
        } else {
            B1.set(B[i], 1);
        }
        if(compareMaps(A1,B1)) {
            ans += 1;
        }
    }
    console.log('AAAA', ans);
}

function compareMaps(h1, h2) {
    if(h1.size === h2.size) {
        for(let [key, value] of h1) {
            if(!h2.has(key) || h1.get(key) != h2.get(key)) {
                return false;
            } 
        }
        return true
    }
    return false;

}



// permutationAAndB('abc', 'abcbacabc')
// permutationAAndB('aca', 'acaa')
permutationAAndB('p', 'pccdpeeooadeocdoacddapacaecb')