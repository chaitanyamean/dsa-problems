// Merge two sorted linked lists



function Node(data, next) {
        this.data = data;
        this.next = next;
}

function mergeTwoLL(a,b) {
    var result = new Node(100);
    console.log(result)
    var head = result;
    while (a != null && b != null) {
        if (a.data >= b.data) {
            var nextB = b.next;
            result.next = b;
            b.next = null;
            b = nextB;
        } else {
            var nextA = a.next;
            result.next = a;
            a.next = null;
            a = nextA;

        }
        result = result.next;
    }
    if (a != null)
        result.next = a;
    if (b != null)
        result.next = b;
    return head.next;
}




var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 

// let L3 = mergeTwoLL(L1, L2)

// console.log(L1)
//     let curr = L3
// while(curr) {
//     console.log(curr.data)
//     curr = curr.next
// }


function swapList(A) {

    var temp = A

    while(temp !== null && temp.next !== null) {
        let k = temp.data;
        temp.data = temp.next.data;
        temp.next.data = k
        temp = temp.next.next;
    }

    console.log(temp, A)

}

var n7 = new Node(4, null)
var n6 = new Node(3, n7);
var n5 = new Node(2, n6);
var n4 = new Node(1, n5);
var L2 = n4; 

// console.log(L2)
swapList(L2)


// Merge K sorted Linked lists