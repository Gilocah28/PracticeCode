// const string = (str1) => {
//     if (str1.length < 3) return str1
//     return str1.slice(0, 3) + str1.slice(-3)
// }

// console.log(string('Gibermar'));

// const evenNum = arr => {
//     let countEven = []
//     let countOdd = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             countEven.push(arr[i])
//         } else {
//             countOdd.push(arr[i])
//         }
//     }
//     return { Even:countEven, Odd: countOdd }
// }


// const arr = []
// for (let i = 0; i < 20; i++) {
//    arr.push(i)
// }
// console.log(evenNum(arr));


const largestNumber = arr => {
    let largestNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    return largestNum
}

console.log(largestNumber([100, 12, 24, 4, 6, 7, 0]));