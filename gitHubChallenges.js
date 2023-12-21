const mergeSort = arr => {
    if (arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const rigth = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(rigth))

}

const merge = (left,rigth) => {
    const tempArr = []

    while(left.length && rigth.length){
        if(left[0] <= rigth[0]){
            tempArr.push(left.shift())
        }else{
            tempArr.push(rigth.shift())
        }
    }

    return [...tempArr,...left,...rigth]
}



const arr = ['c', 'd', 'a']
const numArr = [5,4,3,7,2,1]

console.log(mergeSort(numArr));