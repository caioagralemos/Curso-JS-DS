const swap = (myList, index1, index2) => {
    var temp = myList[index1]
    myList[index1] = myList[index2]
    myList[index2] = temp
}

const pivot = (array, pivotIndex=0, endIndex=array.length-1) => {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
        swapIndex++;
        swap(array, swapIndex, i);
        }  
    }
  swap(array, pivotIndex, swapIndex);
  
  return swapIndex;
}

var quickSortHelper = (myList, left, right) => {
    if (left < right) {
        pivotIndex = pivot(myList, left)
        quickSortHelper(myList, pivotIndex + 1, right)
        quickSortHelper(myList, left, pivotIndex - 1)
    }
    return myList
}

var quickSort = (myList) => {
    return quickSortHelper(myList, 0, myList.length - 1)
}

console.log(quickSort([4,1,2,7,8,3]))