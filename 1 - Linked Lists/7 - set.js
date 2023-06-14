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

    pop(){
        if (!this.head) {
            return undefined
        }
        var temp = this.head
        var pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        pre.next = null
        this.tail = pre
        this.length -= 1
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    get(index) {
        if (index > this.length || index < 0) {
            return null
        }
        var temp = this.head
        for (let _ = 0; _ < index; _++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        var node = this.get(index)
        if (!node) {
            return false
        }
        node.value = value
        return true
    }
    
}
