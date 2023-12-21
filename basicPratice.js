// const solution  = n => {
//     let sum = 0
//     for(let i = 0; i < n; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum = sum + i
//         }
//     }

//     return sum
// }

// console.log(solution(0)); // 0
// console.log(solution(-15)); // 0
// console.log(solution(10)); // 23
// console.log(solution(20)); // 78
// console.log(solution(200)); // 9168

// const even_or_odd = number => {
//     if(number % 2 === 0){
//         return 'Even'
//     }else {
//         return 'Odd'
//     }
//   };

//   console.log(even_or_odd(0)); // 'Even'
//   console.log(even_or_odd(2)); // 'Even'
//   console.log(even_or_odd(3)); // 'Odd'
//   console.log(even_or_odd(-3)); // 'Odd'


// const past = (h, m, s) => {
//     return (h * 60 * 60 + m * 60 + s) * 1000
// };

// console.log(past(0, 0, 0)); // 0
// console.log(past(0, 1, 1)); // 61000
// console.log(past(1, 0, 0)); // 3600000
// console.log(past(1, 0, 1)); // 3601000
// console.log(past(1, 1, 1)); // 3661000

// const greet = name => {
//     return `Hello, ${name} how are you doing today?`
// };

// console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
// console.log(greet('Sara')); // "Hello, Sara how are you doing today?"

// const century = year => {
//     return Math.ceil(year / 100)
//   };

//   console.log(century(1705)); // 18
//   console.log(century(1900)); // 19
//   console.log(century(1601)); // 17
//   console.log(century(2000)); // 20
//   console.log(century(89)); // 1

// const isDivisible = (n, x, y) => {
//     return n % x === 0 && n % y === 0
//   };

//   console.log(isDivisible(3, 3, 4)); // false
//   console.log(isDivisible(12, 3, 4)); // true
//   console.log(isDivisible(8, 3, 4)); // false
//   console.log(isDivisible(48, 3, 4)); // true

// const getCount = str => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let vowelsCounter = 0

//     for (let i = 0; i < str.length; i++) {
//         const word = str[i]
//         for(let j = 0; j < vowels.length; j++){
//             const vowel = vowels[j]
//             if(word === vowel){
//                 vowelsCounter++
//             }
//         }
//     }
//     return vowelsCounter
// };

// console.log(getCount('my pyx')); // 0
// console.log(getCount('pear tree')); // 4
// console.log(getCount('abracadabra')); // 5
// console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13



// const disemvowel = str => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let strContainer = ''

//     for (let i = 0; i < str.length; i++) {
//         let isVowel = false;
//         const letter = str[i]

//         for (let j = 0; j < vowels.length; j++) {
//             const vowel = vowels[j];

//             if (vowel === letter.toLowerCase()) {
//                 isVowel = true;
//                 break
//             }

//         }

//         if (!isVowel) {
//             strContainer += letter
//         }
//     }

//     return strContainer
// };

// console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'


// const findOdd = arr => {
//     return arr.reduce((a, b) => a ^ b);
// };

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
// console.log(findOdd([10])); // 10

// const getMiddle = str => {
//     const mid = str.length / 2
//     return str.length % 2 ? str[Math.floor(mid)] : str[mid - 1] + str[mid]
// };

// console.log(getMiddle('test')); // 'es'
// console.log(getMiddle('testing')); // 't'
// console.log(getMiddle('middle')); // 'dd'
// console.log(getMiddle('A')); // 'A'


// const likes = names => {
//     const length = names.length;

//     if (length === 0) {
//         return 'no one likes this';
//     } else if (length === 1) {
//         return `${names[0]} likes this`;
//     } else if (length === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//     } else {
//         return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//     }
//   };

//   console.log(likes([])); // 'no one likes this'
//   console.log(likes(['Peter'])); // 'Peter likes this'
//   console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
//   console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'


// const createPhoneNumber = numbers => {
//     let str = ''
//     for (let i = 0; i < numbers.length; i++) {
//         if (i === 0) {
//             str += `(${numbers[i]}`
//         } else if (i === 3) {
//             str += `) ${numbers[i]}`
//         } else if (i === 6) {
//             str += `-${numbers[i]}`
//         } else {
//             str += numbers[i]
//         }
//     }
//     return str
// };

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'


// const squareDigits = num => {
//     const numToStr = num.toString().split('')
//     let sum = ''
//     for (let i = 0; i < numToStr.length; i++) {
//         sum = sum + (numToStr[i] * numToStr[i])
//     }
//     return sum
// };

// console.log(squareDigits(2112)); // 4114
// console.log(squareDigits(3212)); // 9414
// console.log(squareDigits(9159)); // 8112581


// const isSquare = n => {
//     return Math.sqrt(n) % 1 === 0
//   };

//   console.log(isSquare(0)); // true
//   console.log(isSquare(4)); // true
//   console.log(isSquare(25)); // true
//   console.log(isSquare(3)); // false
//   console.log(isSquare(93)); // false
//   console.log(isSquare(-1)); // false

// const highAndLow = numbers => {
//     const numArr = numbers.split(' ')
//     const sortedNum = numArr.sort((a,b) => b-a)
//     let sum = ''

//     for(let i = 0; i < sortedNum.length; i++){
//         if(i === 0){
//             sum += `${sortedNum[i]}`
//         }else if(i === sortedNum.length - 1){
//             sum += ` ${sortedNum[i]}`
//         }
//     }
//     return sum
//   };

//   console.log(highAndLow('1 2 3 4 5')); // '5 1'
//   console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
//   console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
//   console.log(highAndLow('0 -214 542')); // '542 -214'

// const descendingOrder = n => {
//     const arr = n.toString().split('')
//     let swapped;
//     do{
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < arr[i + 1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)

//     let arrToStr = Number(arr.join(''))
//     return arrToStr
// };

// console.log(descendingOrder(0)); // 0
// console.log(descendingOrder(1)); // 1
// console.log(descendingOrder(1021)); // 2110
// console.log(descendingOrder(42145)); // 54421
// console.log(descendingOrder(145263)); // 654321
// console.log(descendingOrder(123456789)); // 987654321



// const accum = str => {
//     let result = ''

//     for (let i = 0; i < str.length; i++) {
//         result += str[i].toUpperCase()

//         for (let j = 0; j < i; j++) {
//             result += str[i].toLowerCase()
//         }

//         if (i < str.length - 1) {
//             result += '-'
//         }
//     }

//     return result
// };

// console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
// console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
// console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'


// const spinWords = str => {
//     const strArr = str.split(' ')

//     for (let i = 0; i < strArr.length; i++) {
//         if(strArr[i].length >= 5){
//             strArr[i] = strArr[i].split('').reverse().join('');
//         }
//     }
//     return strArr.join(' ');
// };

// console.log(spinWords('This is a test')); // 'This is a test'
// console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
// console.log(spinWords('This is another test')); // 'This is rehtona test'


// const findShort = str => {
//     const strArr = str.split(' ')

//     let charCount = 0;

//     for (let i = 0; i < strArr.length; i++) {
//         const currentWord = strArr[i].length

//         if (charCount === 0 || currentWord < charCount) {
//             charCount = strArr[i].length
//         }
//     }

//     return charCount

// };

// console.log(findShort('Test where final word shortest see')); // 3
// console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
// console.log(findShort('i want to travel the world writing code one day')); // 1

// const countBits = n => {
//     let count = 0;

//     while (n > 0) {
//         count += n & 1;  // Check the rightmost bit
//         n >>= 1;        // Shift bits to the right
//     }

//     return count;
// };

// console.log(countBits(0)); // 0
// console.log(countBits(4)); // 1
// console.log(countBits(7)); // 3
// console.log(countBits(9)); // 2

// const XO = str => {
//     const lowerStr = str.toLowerCase()
//     let result = 0;

//     for (const char of lowerStr) {
//         if(char === 'x'){
//             result++
//         }else if(char === 'o'){
//             result--;
//         }
//     }
//     return !result
// };

// console.log(XO('xo')); // true
// console.log(XO('Oo')); // false
// console.log(XO('xxOo')); // true
// console.log(XO('xxxm')); // false
// console.log(XO('ooom')); // false
// console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)


// const positiveSum = arr => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if(num > 0){
//             sum += num
//         }
//     }
//     return sum
// };

// console.log(positiveSum([1, 2, 3, 4, 5])); // 15
// console.log(positiveSum([1, -2, 3, 4, 5])); // 13
// console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
// console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
// console.log(positiveSum([])); // 0

// const findOutlier = arr => {
//     const evenArr = []
//     const oddArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenArr.push(arr[i])
//         }else{
//             oddArr.push(arr[i])
//         }
//     }

//     return evenArr.length === 1 ? evenArr[0] : oddArr[0]
//     // return evenArr.length
//   };

//   console.log(findOutlier([0, 1, 2])); // 1
//   console.log(findOutlier([1, 2, 3])); // 2
//   console.log(findOutlier([1, 1, 0, 1, 1])); // 0
//   console.log(findOutlier([0, 0, 3, 0, 0])); // 3
//   console.log(findOutlier([160, 3, 1719, 19, 13, -21])); // 160
//   console.log(findOutlier([4, 0, 100, 4, 11, 2602, 36])); // 11

// const arrayDiff = (a, b) => {
//     const resultArr = []
//     if (a.length === 0) {
//         return resultArr
//     }
//     for (let i = 0; i < a.length; i++) {
//         let isFound = false
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 isFound = true
//                 break
//             }
//         }
//         if(!isFound) resultArr.push(a[i])
//     }
//     return resultArr
// };

// console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
// console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
// console.log(arrayDiff([3, 4], [3])); // [4]
// console.log(arrayDiff([], [4, 5])); // []

// const capitalize = str => {
//     const strArr = str.split(' ')
//     let strResult = []
//     for(let i = 0; i < strArr.length; i++){
//         strResult.push(strArr[i][0].toUpperCase() + strArr[i].slice(1))
//     }

//     return strResult.join(' ')
// };

// const str = "How can mirrors be real if our eyes aren't real";
// console.log(capitalize(str)); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'


// const DNAStrand = dna => {
//     let result = ''

//     for (let i = 0; i < dna.length; i++) {
//         const char = dna[i]
//         if(char === 'A'){
//             result += 'T'
//         }else if(char === 'T'){
//             result += 'A'
//         }else if(char === "G"){
//             result += 'C'
//         }else if(char === 'C'){
//             result += 'G'
//         }

//     }

//     return result
//   };

//   console.log(DNAStrand('AAAA')); // 'TTTT'
//   console.log(DNAStrand('ATTGC')); // 'TAACG'
//   console.log(DNAStrand('GTAT')); // 'CATA'

// const isIsogram = str => {
//     for (let i = 0; i < str.length -1; i++) {
//         const char = str[i].toLowerCase()

//         for (let j = i + 1; j < str.length; j++) {
//             const element = str[j]

//             if(element === char) {
//                 return false
//             }
//         }

//     }
//     return true
// };

// console.log(isIsogram('Dermatoglyphics')); // true
// console.log(isIsogram('isIsogram')); // false
// console.log(isIsogram('isogram')); // true
// console.log(isIsogram('moOse')); // false
// console.log(isIsogram('aba')); // false
// console.log(isIsogram('')); // true


// const duplicateCount = text => {
//     const strLowerCase = text.toLowerCase()
//     const freq = {}
//     let count = 0
//     for(let i = 0; i < strLowerCase.length; i++){
//         const letter = strLowerCase[i]

//         if(letter in freq){
//             freq[letter]++
//         }else{
//             freq[letter] = 1
//         }

//         if(freq[letter] === 2) count++
//     }
//     return count
// };

// console.log(duplicateCount('')); // 0
// console.log(duplicateCount('abcde')); // 0
// console.log(duplicateCount('abA11')); // 2
// console.log(duplicateCount('aabbcde')); // 2
// console.log(duplicateCount('aabBcde')); // 2
// console.log(duplicateCount('Indivisibility')); // 1
// console.log(duplicateCount('Indivisibilities')); // 2


// const duplicateEncode = word => {
//     const lowerText = word.toLowerCase()
//     let res = ''

//     for (let i = 0; i < lowerText.length; i++) {
//         const char = lowerText[i];

//         if(lowerText.indexOf(char) !== lowerText.lastIndexOf(char)){
//             res += ')'
//         }else{
//             res += '('
//         }

//     }

//     return res
// };

// console.log(duplicateEncode('din')); // '((('
// console.log(duplicateEncode('(( @')); // '))(('
// console.log(duplicateEncode('recede')); // '()()()'
// console.log(duplicateEncode('Success')); // ')())())'


// const reverseString = str => {
//     let result = ''
//     for(let i = 0; i < str.length; i++){
//         result = str[i] + result
//     }
//     return result
// };

// console.log(reverseString('hello')); // 'olleh'
// console.log(reverseString('world')); // 'dlrow'
// console.log(reverseString('')); // ''
// console.log(reverseString('h')); // 'h'

// const persistence = num => {
//     if (num < 10) return 0;
//     let pro = 1;

//     while(num >= 10){
//         pro *= num % 10;
//         num = Math.floor(num / 10);
//     }

//     return 1 + persistence(pro * num)
// };

// console.log(persistence(999)); // 4
// // because 9*9*9=729, 7*2*9=126, 1*2*6=12, and finally 1*2=2

// console.log(persistence(93)); // 3
// // because 9*3=27, 2*7=14, 1*4=4 and 4 has only one digit

// console.log(persistence(5)); // 0
// // because 5 is already a single-digit number

// const fib = steps => {
//     if(steps < 2) return steps

//     return fib(steps - 2) + fib(steps - 1)
// };

// console.log(fib(0)); // 0
// console.log(fib(4)); // 3
// console.log(fib(17)); // 1597
// console.log(fib(20)); // 6765


// const alphabetPosition = text => {
//     const strStarting = 'a'.charCodeAt() -1;
//     const textChange = text.toLowerCase().match(/[a-z]/g)
//     const strArr = []

//     for(let i = 0; i < textChange.length; i++){
//         strArr.push(textChange[i].charCodeAt() - strStarting)
//     }

//     return strArr.join(' ')
//   };

//   console.log(alphabetPosition('The narwhal bacons at midnight.'));
//   // '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'

//   console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//   // '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'




// const twoSum = (nums, target) => {

//     for (let i = 0; i < nums.length; i++) {
//         const j = nums.lastIndexOf(target - nums[i])

//         if (j > i) return [i, j]
//     }

// };

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]







// const uniqueInOrder = iterable => {
//     const resultArray = []

//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] !== iterable[i - 1]) {
//             resultArray.push(iterable[i])
//         }
//     }

//     return resultArray
// };

// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
// console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']


// const maxProfit = prices => {

//     let min = prices[0];
//     let profit = 0;

//     for(let i = 0; i < prices.length; i++){
//         if(prices[i] < min){
//             min = prices[i]
//         }else if(prices[i] - min > profit){
//             profit = prices[i] - min
//         }
//     }

//     return profit
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0




// const songDecoder = song => {
//     return song.replace(/(WUB)+/g, ' ').trim();
// };

// console.log(songDecoder('AWUBBWUBC'));
// // 'A B C' (WUB should be replaced by 1 space)
// console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
// // 'A B C' (Multiples WUBs should be replaced by only 1 space)
// console.log(songDecoder('WUBAWUBBWUBCWUB'));
// // 'A B C' (Any starting or trailing WUBs should be removed)
// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
// // 'WE ARE THE CHAMPIONS MY FRIEND'


// const isValid = s => {
//     const stack = []
//     const pairs = {
//         '(':")",
//         '[':']',
//         '{':'}'
//     }

//     for(let i = 0; i < s.length; i++){
//         const char = s[i]
//         if(pairs[char]){
//             stack.push(char)
//         }else if(pairs[stack.pop()] !== char){
//             return false
//         }
//     }


//     return !stack.length;
// };

// console.log(isValid('[')); //false
// console.log(isValid('()')); //true
// console.log(isValid('(]')); //false
// console.log(isValid('{[]}')); //true
// console.log(isValid('([)]')); //false
// console.log(isValid('()[]{}')); //true



// const reverse = x => {

//     const MAX = Math.pow(2,31) -1;
//     const MIN = -1 * Math.pow(2,31)
//     const arr = Math.abs(x).toString().split('')
//     const rev = Math.sign(x) * Number(arr.reverse().join(''))
//     return rev < MIN || rev > MAX ? 0 : rev
// };

// console.log(reverse(0)); // 0
// console.log(reverse(120)); // 21
// console.log(reverse(123)); // 321
// console.log(reverse(-123)); // -321
// console.log(reverse(1534236469)); // 0

// const removeDuplicates = nums => {
//     if(nums.length < 1) return nums.length

//     const result = []

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== nums[i - 1]){
//             result.push(nums[i])
//         }
//     }
//     return result.length
// };

// console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
// console.log(removeDuplicates([])); // 0


// const kidsWithCandies = (candies, extraCandies) => {
//     const booleansArr = []

//     let maxCandies = candies[0]
//     for(let i = 0; i < candies.length; i++){
//         if(candies[i] > maxCandies){
//             maxCandies = candies[i]
//         }
//     }

//     for (let i = 0; i <candies.length; i++) {
//         booleansArr.push(
//             candies[i] + extraCandies >= maxCandies
//         )
//     }

//     return booleansArr
// };

// console.log(kidsWithCandies([12, 1, 12], 10)); // [true, false, true]
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]


// const rot13 = str => {
//     return str.replace(/[a-z]/gi, letter => String.fromCharCode(
//         letter.charCodeAt() + (letter.toLowerCase() <= 'm' ? 13 : -13)
//     ))
// };

// console.log(rot13('az AZ')); // nm NM
// console.log(rot13('10+2 is twelve.')); // 10+2 vf gjryir.
// console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm

// const maximumWealth = accounts => {
//     let result1 = 0

//     for(let i = 0; i < accounts.length; i++){
//         let result2 = 0

//         for(let j = 0; j < accounts[i].length; j++){
//             result2 += accounts[i][j]
//         }

//         if(result2 > result1){
//             result1 = result2
//         }
//     }

//     return result1
// };

// console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])); // 17
// console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])); // 10
// console.log(maximumWealth([[1, 2, 3], [3, 2, 1]])); // 6

// const generateHashtag = str => {
//     if (str.length <= 2 || str.length >= 140) {
//         return false
//     }

//     let res = '#'
//     let capitalizeNext = true

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             res += capitalizeNext ? str[i].toUpperCase() : str[i].toLowerCase()
//             capitalizeNext = false
//         }else{
//             capitalizeNext = true
//         }
//     }

//     return res
// };

// console.log(generateHashtag('JavaScript')); // #JavaScript
// console.log(generateHashtag('Do we have a Hashtag')); // #DoWeHaveAHashtag
// console.log(generateHashtag('    Hello     World   ')); // #HelloWorld
// console.log(generateHashtag('coding' + ' '.repeat(140) + 'for life')); // #CodingForLife
// console.log(generateHashtag('')); // false
// console.log(generateHashtag(' ')); // false
// console.log(generateHashtag('a'.repeat(140))); // false
// console.log(generateHashtag(' '.repeat(200))); // false





// const cakes = (recipe, available) => {
//     let numCakes = Infinity

//     for(let ingredient in recipe){
//         if (!available[ingredient] || recipe[ingredient] > available[ingredient]){
//             return 0;
//         }
//         numCakes = Math.min(numCakes,Math.floor(available[ingredient] / recipe[ingredient]));
//     }

//     return numCakes
// };





// let recipe = { flour: 500, sugar: 200, eggs: 1 };
// let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log(cakes(recipe, available)); // 2

// recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
// available = { sugar: 500, flour: 2000, milk: 2000 };
// console.log(cakes(recipe, available)); // 0


// const count = string => {
//     const resultObj = {}

//     if(string.length < 1){
//         return resultObj
//     }

//     let counter = 0

//     for(let i = 0; i < string.length; i++){
//         const char = string[i]
//         resultObj[char] = (resultObj[char] || 0) + 1;
//     }

//     return resultObj
// };

// console.log(count('')); // {}
// console.log(count('aba')); // { a: 2, b: 1 }


// const solution = str => {
//     let strResult = ''

//     for (let i = 0; i < str.length; i++) {
//         const currStr = str[i]
//         if(i > 0 && currStr === currStr.toUpperCase()){
//             strResult += ' ' + currStr
//         }else{
//             strResult += currStr
//         }
//     }

//     return strResult
// };

// console.log(solution('camelCasingHere')); // camel Casing Here
// console.log(solution('No Camels here')); // No Camels here
// console.log(solution('ABC')); // ABC
// console.log(solution('')); // ''

// const isSumEqual = (firstWord, secondWord, targetWord) => {

//     const getNumericValue = word => {
//         let numericalValue = ''
//         for (let i = 0; i < word.length; i++) {
//             numericalValue += word.charCodeAt(i) - 'a'.charCodeAt(0)
//         }
//         return parseInt(numericalValue, 10)
//     }

//     const sum = getNumericValue(firstWord) + getNumericValue(secondWord)
//     const targetVal = getNumericValue(targetWord)

//     return targetVal === sum
// };

// console.log(isSumEqual('acb', 'cba', 'cdb')); // true
// The numerical value of firstWord 'acb' is '021' -> 21
// The numerical value of secondWord 'cba' is '210' -> 210
// The numerical value of targetWord 'cdb' is '231' -> 231
// So we return true because 21 + 210 == 231

// console.log(isSumEqual('aaa', 'a', 'aab')); // false
// The numerical value of firstWord 'aaa' is '000' -> 0
// The numerical value of secondWord 'a' is '0' -> 0
// The numerical value of targetWord 'aab' is '001' -> 1
// So we return false because 0 + 0 != 1

// console.log(isSumEqual('aaa', 'a', 'aaaa')); // true
// The numerical value of firstWord 'aaa' is '000' -> 0
// The numerical value of secondWord 'a' is '0' -> 0
// The numerical value of targetWord 'aaaa' is '0000' -> 0
// So we return true because 0 + 0 == 0


// const domainName = url => {
//     return url.replace(/(www\.|.*\/\/|\..+)/g, '');
// };

// console.log(domainName('www.google.ca')); // google
// console.log(domainName('http://google.com')); // google
// console.log(domainName('https://google.com')); // google
// console.log(domainName('http://google.co.jp')); // google
// console.log(domainName('https://www.google.com')); // google



// const firstNonRepeatingLetter = str => {
//     if (str.length < 2) return str



//     for (let i = 0; i < str.length; i++) {
//         let isRepeated = false

//         for (let j = 0; j < str.length; j++) {
//             if (i !== j && str[i].toLowerCase() === str[j].toLowerCase()) {
//                 isRepeated = true
//                 break
//             }
//         }

//         if (!isRepeated) {
//             return str[i]
//         }

//     }

//     return '';
// };

// console.log(firstNonRepeatingLetter('a')); // 'a'
// console.log(firstNonRepeatingLetter('stress')); // 't'
// console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
// console.log(firstNonRepeatingLetter('abba')); // ''
// console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','


// const convertToRoman = number => {
//     const roman = {
//         M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
//         L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
//     };

//     let strRomanResult = ''
//     for(let i of Object.keys(roman)){
//         let q = Math.floor(number / roman[i])
//         number -= q * roman[i]

//         for(let j = 0; j < q; j++){
//             strRomanResult += i;
//         }
//     }

//     return strRomanResult
// };

// console.log(convertToRoman(4)); // IV
// console.log(convertToRoman(9)); // IX
// console.log(convertToRoman(11)); // XI
// console.log(convertToRoman(19)); // XIX
// console.log(convertToRoman(22)); // XXII
// console.log(convertToRoman(15)); // XV
// console.log(convertToRoman(39)); // XXX + IX = XXXIX
// console.log(convertToRoman(160)); // C + LX = CLX
// console.log(convertToRoman(207)); // CC + VII = CCVII
// console.log(convertToRoman(246)); // CC + XL + VI = CCXLVI
// console.log(convertToRoman(789)); // DCC + LXXX + IX = DCCLXXXIX
// console.log(convertToRoman(1009)); // M + IX = MIX
// console.log(convertToRoman(1066)); // M + LX + VI = MLXVI
// console.log(convertToRoman(1776)); // M + DCC + LXX + VI = MDCCLXXVI
// console.log(convertToRoman(1918)); // M + CM + X + VIII = MCMXVIII
// console.log(convertToRoman(1954)); // M + CM + L + IV = MCMLIV
// console.log(convertToRoman(2014)); // MM + X + IV = MMXIV
// console.log(convertToRoman(2421)); // MM + CD + XX + I = MMCDXXI
// console.log(convertToRoman(3999)); // MMM + CM + XC + IX = MMMCMXCIX


// const scramble = (str1, str2) => {
//     const count = {}

//     for (const char of str1) {
//         count[char] = (count[char] || 0) + 1
//     }

//     for (const char of str2) {
//         if(!count[char]) return false
//         count[char]--
//     }

//     return true
// };

// console.log(scramble('scriptjava', 'javascript')); // true
// console.log(scramble('scriptingjava', 'javascript')); // true
// console.log(scramble('scriptsjava', 'javascripts')); // true
// console.log(scramble('jscripts', 'javascript')); // false
// console.log(scramble('javscripts', 'javascript')); // false



// const wave = str => {
//     const resultArr = []

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             resultArr.push(
//                 str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1)
//             )
//         }
//     }
//     return resultArr
// };

// console.log(wave('hello')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
// console.log(wave(' gap ')); // [' Gap ', ' gAp ', ' gaP '];
// console.log(wave('Two words')); // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS'];


// const getConcatenation = nums => {
//     return [...nums,...nums]
// };

// console.log(getConcatenation([1, 2, 3])); // [1, 2, 3, 1, 2, 3]
// console.log(getConcatenation([4, 3, 2, 1])); // [4, 3, 2, 1, 4, 3, 2, 1]


// const getNames = users => {
//     const res = []

//     for(const user of users){
//         res.push(user.name)
//     }

//     return res
// };

// const users = [
//     {
//         id: '001',
//         name: 'Alice',
//         startDate: '2021-01-03',
//     },
//     {
//         id: '002',
//         name: 'Bob',
//         startDate: '2020-02-01',
//     },
//     {
//         id: '003',
//         name: 'Claire',
//         startDate: '2019-03-01',
//     },
// ];

// console.log(getNames(users)); // ['Alice', 'Bob', 'Claire']


// const toCamel = obj => {
//     const result = {}

//     for(const [key,value] of Object.entries(obj)){
//         const camelKey = key.replace(/(_[a-z])/gi, $1 => $1.replace('_','').toUpperCase())
//         result[camelKey] = value
//     }

//     return result
// };

// console.log(
//     toCamel({
//         first_name: 'John',
//         last_name: 'Rambo',
//         favorite_movie: 'First Blood',
//     })
// ); // {'firstName': 'John', 'lastName': 'Rambo', 'favoriteMovie': 'First Blood'}



// const isPalindrome = s => {
//     const str = s.toLowerCase().replace(/[^a-z0-9]/g, '')

//     let resverseStr = ''

//     for(let i = 0; i < str.length; i++){
//         resverseStr = str[i] + resverseStr
//     }

//     return resverseStr === str
// };

// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// // Explanation: "amanaplanacanalpanama" is a palindrome.
// console.log(isPalindrome('race a car')); // false
// // Explanation: "raceacar" is not a palindrome.
// console.log(isPalindrome('ab_a')); // true
// // Explanation: "aba" is a palindrome.
// console.log(isPalindrome(' ')); // true
// // Explanation: `s` is an empty string "" after removing non-alphanumeric characters.
// // Since an empty string reads the same forward and backward, it is a palindrome.


// const moveZeroes = nums => {
//     let index = 0
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0){
//             nums[index] = nums[i]
//             if(index !== i){
//                 nums[i] = 0
//             }
//             index++
//         }
//     }

//     return nums
// };

// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
// console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
// console.log(moveZeroes([0])); // [0]






