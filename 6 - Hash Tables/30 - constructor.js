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

}

myHashTable = new HashTable()