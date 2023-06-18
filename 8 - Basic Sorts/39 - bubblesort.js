const bubbleSort = (myList) => {
    for (let i = myList.length - 1;  i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (myList[j] > myList[j+1]){
                temp = myList[j]
                myList[j] = myList[j+1]
                myList[j+1] = temp
            }
        }
    }
    return myList
}

console.log(bubbleSort([4,23,1,5,76]))