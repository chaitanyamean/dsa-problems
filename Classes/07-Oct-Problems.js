function simplifyPath(A) {
    let n = A.length;
    let v = []
    let ans = ''
    for(let i = 0; i<n; i++) {
        let dir = ''

        while(i<n && A[i] != '/') {
            dir += A[i]
            i++
        }

        if(dir == '..') {
            if(v.length > 0) {
                v.pop()
            }
        } else if(dir == '.' || dir == '') {

        } else {
            v.push(dir)
        }
    }

    for(let i of v) {
        ans += '/' + i
    }

    if(ans == '') {
        return '/'
    }

    return ans;

}



console.log(simplifyPath('/../'))