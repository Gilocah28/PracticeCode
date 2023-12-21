// const arr = [9, 6, 1, 5, 8, 3]

// function bubbleSort(arr) {
//     let loop;
//     do {
//         loop = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 loop = true
//             }
//         }
//     } while (loop)


//     return arr
// }

// console.time('Time V1')
// console.log(bubbleSort(arr));
// // Big-O = O(n^2) => Quadratic Time Complexity
// console.timeEnd('Time V1')

// const arro = [9, 6, 1, 5, 8, 3]

// function bubbleSortV2(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let temp = arr[j]
//                 arr[j] = arr[i]
//                 arr[i] = temp
//             }
//         }
//     }
//     return arr
// }


// console.time('Time V2')
// console.log(bubbleSortV2(arro));
// Big-O = O(n^2) => Quadratic Time Complexity
// console.timeEnd('Time V2')



// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let numtoInsert = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > numtoInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = numtoInsert
//     }
//     return arr
// }

// console.log(insertionSort(arr));
// Big-O = O(n^2) => Quadratic Time Complexity 


// const arr = [9, 6, 1, 5, 8, 3]


// function quickSort(arr) {

//     if (arr.length < 2) {
//         return arr
//     }


//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }
// console.log(quickSort(arr));
// worst case = O(n^2)
// avg case - O(nlogn)


// Merge Sort
// const mergeSort = arr => {
//     if (arr.length < 2) return arr

//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rigthArr = arr.slice(mid)

//     return merge(mergeSort(leftArr), mergeSort(rigthArr))
// }

// const merge = (left, rigth) => {
//     const sortedArr = []

//     while (left.length && rigth.length) {
//         if (left[0] <= rigth[0]) {
//             sortedArr.push(left.shift())
//         } else {
//             sortedArr.push(rigth.shift())
//         }
//     }
//     return [...sortedArr, ...left, ...rigth]
// }


// const arr = [100,9, 6, 1, 5, 8, 3]
// console.log(mergeSort(arr));

// Big-O = O(logn)


// Cartesian Product
// const cartesian = (arr1, arr2) => {
//     const result = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             result.push([arr1[i], arr2[j]])
//         }
//     }

//     return result
// }

// const arr1 = [1, 2]
// const arr2 = [3, 4, 5]
// console.log(cartesian(arr1, arr2));
// Big-O = O(mn)



// Climbing Staircase

// const climbing = (num) => {
//     const noOfWays = [1, 2]

//     for (let i = 2; i <= num; i++) {
//         noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
//     }

//     return noOfWays[num - 1]
// }

// console.log(climbing(5));
//Big = O(n) = linear Complexity;


// Tower of Honoi

// const towerOfHonoi = (n, fromRod, toRod, usingRod) => {
//     if (n === 1) {
//         console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//         return
//     }
//     towerOfHonoi(n - 1, fromRod, usingRod, toRod)
//     console.log(`Move Disk ${n} from ${fromRod} to ${toRod}`);
//     towerOfHonoi(n - 1, usingRod, toRod, fromRod)
// }

// towerOfHonoi(3, 'A', 'B', 'C')

// Big-O = O(2^n)























// JavaScript Practice Exercises For Beginners

// const newString = (str) =>{
//     return str.indexOf('New!') === 0? str : `New! ${str}`
// }

// console.log(newString('New! Year'));

// const getStr = (str) => {
//     if (str.length > 3) {
//         return str.slice(0,3) + str.slice(-3)
//     }else{
//         return str
//     }

// }

// console.log(getStr('Gib is pogi'));

// const getHalf = (str) => {
//     let strHalf= Math.floor(str.length / 2)
//     return str.slice(0,strHalf)
// }


// console.log(getHalf('Ecah'))


// const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1)
// console.log(concatenate('Giber','Erica'));


// const nearest = num => {
//     if(num === 100){
//         return 'You Guess'
//     }else if(num > 100){
//         return `Lower down ${num}`
//     }else{
//         return `Higher up ${num}`
//     }
// }

// console.log(nearest(100));


// const maxChar = str => {
//     const objResut = {}
//     let maxChar = ''
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i]
//         objResut[char] = (objResut[char] || 0) + 1
//     }

//     return objResut
// }

// console.log(maxChar('Mark Jester'));















