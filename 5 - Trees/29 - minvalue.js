class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        currentNode = null;
        this.length = 0
    }

    insert(value) {
        var newNode = new Node(value)
        if (currentNode === null) {
            currentNode = newNode
        } else {
            var temp = currentNode
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
        if (currentNode === null) {
            return false
        } else {
            var temp = currentNode
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

    minimal_value(currentNode) {
        if (currentNode === null) {
            return false
        } else {
            var temp = currentNode
            while(true) {
                if (temp.left) {
                    temp = temp.left
                } else {
                    return temp
                }
            }
        }
    }

}