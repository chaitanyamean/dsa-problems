// Post traversal

function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function inOrderTraversal(A) {

  if (A == null) return;

  let s = [];
  let curr = A;
  while (curr !== null || s.length > 0) {
    while (curr !== null) {
      s.push(curr);
      curr = curr.left;
    }
    console.log(s)
    curr = s.pop();
    console.log(curr.data + " ");
    curr = curr.right;
    console.log('cuuu', curr)
  }
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

// console.log(levelOrder(root))

inOrderTraversal(root)


function levelOrder(A) {
    let queue = [];
    let res = []
    queue.push(A)
    while(queue.length) {
        let size = queue.length
        res.push([])
        for(let i =0; i<size; i++) {
            let node = queue.shift() // 3
            let temp = res[res.length - 1];
            temp.push(node.data);
            res[res.length - 1] = temp;
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
    }

    let finalArr = []
    

    console.log(res);

}

// levelOrder(root)


function reverseLevelOrderTravarsal(A) {
  let queue = []
  let ans = []

  // we push the A to Queue
  queue.push(A)
  while(queue.length !=0) {
    let size = queue.length
    ans.push(node.data);

    if(node.right !== null) queue.push(node.right)
    if(node.left !== null) queue.push(node.left)

  }
  console.log(ans.reverse());
}

// reverseLevelOrderTravarsal(root)