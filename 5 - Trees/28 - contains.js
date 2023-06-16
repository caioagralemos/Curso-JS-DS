class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
        this.length = 0
    }

    insert(value) {
        var newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            var temp = this.root
            while(true) {
                if(newNode.value === temp.value) {
                    return undefined
                } else if (value < temp.value) {
                    if (temp.left) {
                        temp = temp.left
                    } else {
                        temp.left = newNode
                        return true
                    }
                } else if (value > temp.value) {
                    if (temp.right) {
                        temp = temp.right
                    } else {
                        temp.right = newNode
                        return true
                    }
                }
            }
        }
        this.length++
        return true
    }

    contains(value) {
        if (this.root === null) {
            return false
        } else {
            var temp = this.root
            while(true) {
                if(value === temp.value) {
                    return true
                } else if (value < temp.value) {
                    if (temp.left) {
                        temp = temp.left
                    } else {
                        return false
                    }
                } else if (value > temp.value) {
                    if (temp.right) {
                        temp = temp.right
                    } else {
                        return false
                    }
                }
            }
        }
    }
}