class HashTable{
    constructor(size = 7){
        this.dataMap = new Array(size)
    }

    _hash(key){
        let myHash = 0
        for (let index = 0; index < key.length; index++) {
            myHash = (myHash + key.charCodeAt(index) * 23) % this.dataMap.length
            
        }
        return myHash
    }

    printTable(){
        this.dataMap.forEach((value, index) => {
            console.log(index, ':', value)
        });
    }
    
    set(key, value){
        let index = this._hash(key)
        if (!this.dataMap[index]) this.dataMap[index] = []
        
        this.dataMap[index].push([key, value])
        return this
    }
}

myHashTable = new HashTable()
myHashTable.set('Três', 3)
myHashTable.set('Onze', 11)
myHashTable.printTable()