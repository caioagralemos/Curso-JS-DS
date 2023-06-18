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