const insertionSort = (myList) => {
    for (let i = 1; i < myList.length; i++) {
        for (let j = 0; j < i; j++) {
            if (myList[i] < myList[j]){
                var temp = myList[i]
                myList[i] = myList[j]
                myList[j] = temp
            }
        }
    }
    return myList
}

console.log(insertionSort([4,23,1,5,76]))