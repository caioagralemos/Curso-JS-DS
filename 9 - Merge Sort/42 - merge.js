const merge = (list1, list2) => {
    var combined = []
    var i = 0
    var j = 0

    while(i < list1.length && j < list2.length){
        if(list1[i] < list2[j]){
            combined.push(list1[i])
            i++
        } else {
            combined.push(list2[j])
            j++
        }
    }

    if (i < list1.length) {
        while(i < list1.length) {
            combined.push(list1[i])
            i++
        }
    }

    if (j < list2.length) {
        while(j < list2.length) {
            combined.push(list2[j])
            j++
        }
    }

    return combined
}

let myArray1 = [1,3,7,8];
let myArray2 = [2,4,5,6];
console.log( merge( myArray1, myArray2 ) );