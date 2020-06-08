function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pivotElem = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (pivotElem > arr[j]) {
                //swap needed
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(selectionSort([65, 56, 55, 76, 34, 98]))