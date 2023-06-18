import './42 - merge'

const mergeSort = (myList) => {
    if (myList.length == 1) {
        return myList
    }
    var midIndex = Math.floor(myList.length / 2)
    var left = myList.slice(0, midIndex)
    var right = myList.slice(midIndex)

    return merge(mergeSort(left), mergeSort(right))
}