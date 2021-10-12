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


