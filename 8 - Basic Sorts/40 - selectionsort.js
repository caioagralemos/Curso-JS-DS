const selectionSort = (myList) => {
    for (let i = 0;  i < myList.length - 1; i++) {
        var minIndex = i
        for (let j = i+1; j < myList.length; j++) {
            if(myList[minIndex] > myList[j]){
                minIndex = j
            }
        }
        var temp = myList[i]
        myList[i] = myList[minIndex]
        myList[minIndex] = temp
    }
    return myList
}

console.log(selectionSort([4,23,1,5,76]))