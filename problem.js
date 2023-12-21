// 1. Finding the GCD using Euclidian Algorithm
// 2. Finding permutaion and combinations of list of a list of number



// 3. Finding the longest common substring in a given string
const longestSubtring = (str1, str2) => {
    let longestString = ''
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let subString = ''
            let x = i
            let y = j
            while (x < str1.length && y < str2.length && str1[x] === str2[y]) {
                subString += str1[x]
                x++
                y++
            }
            if (subString.length > longestString.length) {
                longestString = subString
            }
        }
    }
    return longestString
}

const str1 = 'GeeksForgeeks'
const str2 = 'Geekscode'
console.log(longestSubtring(str1, str2));




// 4. knaps problem