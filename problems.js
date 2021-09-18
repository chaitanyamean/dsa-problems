var arr = [7,"a","b",5, 0.1, "c", 0.5, 9, 
1, "e", "m", 0.3, 8.5, 74, 89,"f","r",0.5 ,"x", "y", 4, 7]; 

function sortTypes(arr) {
        let numbers= []
        let string= []
        let floats = []
        let res  = []
    for(let i =0; i<arr.length; i++) {
            if(typeof arr[i] === "number") {
                if(Number.isInteger(arr[i])) {
                    numbers.push(arr[i])
                } else {
                    floats.push(arr[i])
                }
            } else if(typeof arr[i] === 'string') {
                string.push(arr[i])
            } 
    }
    res = [...numbers, ...string, ...floats]
    console.log(res)
}



// sortTypes(arr)



let obj = { 
    fname: 'Soujanya', 
    lname: 'divi' 
}; 

function getDetails(age, place) { 
    // console.log('osa', this, age, place)
    return `${this.fname} ${this.lname} ${age} ${place}`; 
} 

let details = getDetails.bind(obj, 2, 'Hyd')
console.log('details', details());

// Function.prototype.myBind = function(...args){
//     const obj = this
//     let params = args.slice(1);
//     // console.log('this',args[0])
//     return function(...args2) {
//         return obj.apply(args[0], [...params, ...args2])
//     }
// }

Function.prototype.myBind = function(ctx, ...fnArgs) {
    const func = this;

    return function() {
        console.log('ctx',ctx, 'afgs', ...fnArgs)
        return func.call(ctx, ...fnArgs)
    }
}
// console.log(getDetails.myBind(obj, 2, 'Hyd')())

let add = function(a) {
    return function(b) {
        if(b){
            return add(a+b)
        }  
            return a
    }
}

// console.log(
//     add(4)(3)(2)()
//     )

// console.log('aw'.charCodeAt())

// let s_obj = new String(s_prim)


function revStr(str){
    let revStr = ''
    let n = str.length
    
    for(let i = 0; i<n/2; i++) {
        console.log(n-i-1, str[i], str[n-i-1])
        let temp = str[i]
        console.log(temp)
        str[i]=str[n-i-1]
        str[n-i-1] = temp
        console.log('85',n-i-1, str[i], str[n-i-1])

    }
    console.log(str)
}


// revStr('abcd')


function reverseWords(str){
//    let data = str.split(' ')
//    console.log(data)
//    for(let i=data.length-1; )


}

// reverseWords('This is india')