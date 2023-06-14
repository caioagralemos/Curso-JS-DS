class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        var newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            var lastNode = this.tail
            lastNode.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return true
    }

    shift(){
        if (!this.head) return undefined
        var temp = this.head
        this.head = temp.next
        this.length -= 1
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null
        return temp
    }
}

var myLinkedList = new LinkedList(2)
myLinkedList.push(7)
myLinkedList.push(9)
myLinkedList.shift()
myLinkedList.printList()