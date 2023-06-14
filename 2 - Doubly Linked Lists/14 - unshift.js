class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        var new_node = new Node(value)
        this.head = new_node
        this.tail = new_node
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
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value) {
        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            var lastNode = this.tail
            lastNode.next = newNode
            newNode.prev = lastNode
            this.tail = newNode
        }
        this.length += 1
        return true
    }

    pop() {
        if (!this.head) {
            return undefined
        } else {
            var lastNode = this.tail
            var temp = lastNode.prev
            temp.next = null
            lastNode.prev = null
            this.tail = temp
        }
        this.length -= 1
        return lastNode
    }

    unshift(value) {
        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            var temp = this.head
            this.head = newNode
            newNode.next = temp
            temp.prev = newNode
        }
        this.length += 1
        return true
    }

}

my_DLL = new DoublyLinkedList(2)
my_DLL.push(11)
my_DLL.push(1)
console.log(my_DLL.pop())
my_DLL.printList()