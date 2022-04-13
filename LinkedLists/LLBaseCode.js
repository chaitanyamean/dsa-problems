class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      // console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let first = this.head;
      this.tail = this.head;
      let second = first.next;
  
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      this.head.next = null;
      this.head = first;
      return this.printList();
    }

    llToNumbers() {
      let first = this.head;
      let val = ''
      while(first) {
        val = val + first.value
        first = first.next
      }

      let number = Number(val)
      var revNumber = 0;

      while (number > 0) {
        revNumber = (revNumber * 10) + (number % 10);
        number = Math.floor(number / 10);
      }
      // console.log(revNumber)
      return revNumber;

    }
}

  class LL2{
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }

let myLinkedList = new LinkedList(2);
myLinkedList.append(4)
myLinkedList.append(3)
// myLinkedList.prepend(1)
// myLinkedList.printList()
// myLinkedList.insert(2, 99)
// myLinkedList.insert(20, 88)
// myLinkedList.printList()
// myLinkedList.remove(2)
// myLinkedList.reverse()
// 243
// 564
// 807


let myLinkedList2 = new LinkedList(5);
myLinkedList2.append(6)
myLinkedList2.append(4)

// console.log(myLinkedList, myLinkedList2);
let ll1 = myLinkedList
// console.log(ll1, this.head)


let ll1Value = myLinkedList.llToNumbers()

// console.log(ll1Value)

let ll2Value = myLinkedList2.llToNumbers()
// console.log(ll2Value)

let ans = ll1Value + ll2Value
console.log('154', ans)


let firstVal = ans % 10
		// console.log(ll1, ll2, ll3, firstVal)

		let node;

		let num = ans % 10
    // console.log('163',num)
		let revNum = 0
    let isFirst = true;
    let finalAns;
		while(ans > 0) {
      revans = (ans % 10)
      ans = Math.floor(ans / 10)
      console.log('RRR' ,revans, ans)
			if(isFirst) {
        node = new LL2(revans)
        console.log('ISFIRST', node);
        isFirst = false;
        finalAns = node;
      } else {
        console.log('NODE',node)
        let obj = {
          data: revans,
          next: null
        }
        // node = node.next;
        node.next = obj
        node = node.next;
      }
		}

    console.log('ans',finalAns)
    