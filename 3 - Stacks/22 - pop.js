class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
	constructor(value) {
        var newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    printStack() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value) {
        var newNode = new Node(value)
        if (this.top) {
            var temp = this.top
            newNode.next = temp
            this.top = newNode
        } else {
            this.top = newNode
        }
        this.length += 1
        return true
    }

    pop() {
        if (this.top) {
            var temp = this.top
            this.top = temp.next
            temp.next = null
        } else {
            return undefined
        }
        this.length -= 1
        return temp
    }

}
 

 
let myStack = new Stack(4);
myStack.push(7)
myStack.push(10)

myStack.getTop();
myStack.getLength();

console.log("\nStack:");
myStack.printStack();


/*
    EXPECTED OUTPUT:
    ----------------
    Top: 4
    Length: 1

    Stack:
    4

*/