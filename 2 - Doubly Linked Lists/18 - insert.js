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

    shift() {
        if (!this.head) {
            return undefined
        }
        var temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            var newHead = temp.next
            this.head = newHead
            newHead.prev = null
            temp.next = null
        }
        this.length -= 1
        return temp
    }

    get(index) {
        if (index > this.length - 1 || index < 0) {
            return null
        }

        if (index < this.length / 2) {
            var temp = this.head
            for (let i = 0; i < this.length / 2; index++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
            return temp
        }

    }

    set(index, value) {
        if (index > 0 && index < this.length) {
            var currentNode = this.get(index)
            currentNode.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index == 0) {
            this.unshift(value)
            return true
        }
        if (index == this.length) {
            this.push(value)
            return true
        }
        if (index > 0 && index < this.length) {
            var newNode = new Node(value)
            var before = this.get(index-1)
            var post = before.next
            before.next = newNode
            newNode.prev = before
            newNode.next = post 
            post.prev = newNode
            this.length += 1
            return true
        }
        return false
    }

}

var my_DLL = new DoublyLinkedList(2)
my_DLL.push(7)
my_DLL.push(1)
my_DLL.push(100)
console.log('Pre-insert:')
my_DLL.printList()

console.log('Post-insert:')
my_DLL.insert(3, 50)
my_DLL.printList()