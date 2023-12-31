class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) this.dataMap[index] = []

        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        let index = this._hash(key)
        for (let i = 0; i < this.dataMap[index].length; i++) {
            if (this.dataMap[index][i][0] === key) {
                return this.dataMap[index][i][1];
            }
        }
    }

    keys() {
        let keys = []
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                if (this.dataMap[i].length > 1) {
                    for (let j = 0; j < this.dataMap[i].length; j++) {
                        keys.push(this.dataMap[i][j][0])
                    }
                } else {
                    keys.push(this.dataMap[i][0][0])
                }
            }
        }
        return keys
    }

}



let myHashTable = new HashTable();

myHashTable.set("nails", 100);
myHashTable.set("tile", 50);
myHashTable.set("lumber", 80);
myHashTable.set("bolts", 200);
myHashTable.set("screws", 140);
//

myHashTable.printTable()
console.log(myHashTable.keys())