// Data Structure Basic

// Array 
// const groceries = ['apple','banana','pearl','orange']
// console.log(groceries);
// groceries.push('cockies')  add in the end of array
// console.log(groceries.slice(0,6));
// console.log(groceries.slice(2,groceries.length -1));
// console.log(groceries.indexOf('orange'));

// const person = {
//     name: 'Leonardo',
//     shirt: 'white'
// }

// console.log(person.name);
// console.log(person.shirt);
// console.log(person['shirt']);


// person.phone = '1-222-333-4444'
// console.log(person.phone);
// console.log(person);

// const person2 = {
//     name: 'Giber',
//     shirt: 'red'
// }

// console.log(person2.name);
// console.log(person2.shirt);

// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt, shirt,
//         assets: 100000,
//         liability: 50000,
//         netWorth: function () {
//             return this.assets - this.liability
//         }
//     }
//     return `My name is ${person.name} and my shirt is ${person.shirt} and my networth is $${person.netWorth()}`;
//     // return person
// }

// console.log(introducer('Giber', 'Black'));
// console.log(introducer('Ecah', 'Blue'));


// const letterCounter = (str) => {
//     let result = 0
//     for (const letter in str) {
//         console.log(Number(letter) + 1)
//         result = Number(letter) + 1
//     }

//     return {
//         result
//     }
// }

// console.log(letterCounter('i want to improve in programming'));


// const sum = arr => {
//     let result = 0

//     for (let sum of arr) {
//         result += sum
//     }

//     return { result }
// }

// const arr = [1, 2, 3, 4]
// sum(arr);


// const max = arr => {
//     let maxNum = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if (maxNum < arr[i]) {
//             maxNum = arr[i]
//         }
//     }

//     return {maxNum}
// }

// const arr = [29, 1, 3, 4, 6, 24, 28, 1]
// console.log(max(arr));

// const frequency = str => {
//     const freqLetter = {}

//     for (let i = 0; i < str.length; i++) {
//         const letter = str[i]
//         if (letter in freqLetter) {
//             freqLetter[letter]++
//         } else {
//             freqLetter[letter] = 1
//         }
//     }
//     return freqLetter
// }

// // console.log(frequency('hahaa'));
// console.log(frequency('lololoz'));


// const wordFreq = str => {
//     const freq = {}
//     const strToArr = str.split(' ')

//     for (let i = 0; i < strToArr.length; i++) {
//         const prev = strToArr[i]
//         if (prev in freq) {
//             freq[prev]++
//         } else {
//             freq[prev] = 1
//         }
//     }
//     return freq
// }

// console.log(wordFreq('lol what lol'))


// const wordFreq = str => { 
//     const strToArr = str.split(' ')
//     return frequency(strToArr)  
// }

// console.log(wordFreq('lol what lol'))




























// Data and Algorithms
// Queue

// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue() {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
//     }
// }


// const queue = new Queue()
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.size());
// queue.print()

// console.log(queue.dequeue())
// console.log(queue.peek())


// Optimizer Queue

// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element) {
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty() {
//         return this.rear - this.front === 0
//     }

//     peek() {
//         return this.items[this.front]
//     }

//     size() {
//         return this.rear - this.front
//     }

//     print() {
//         console.log(this.items);
//     }

// }


// const queue = new Queue()
// console.log(queue.isEmpty());


// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()

// console.log(queue.dequeue());
// console.log(queue.peek());


//Circular Queue
// class CircularQueue {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.rear = 0
//         this.front = -1
//     }

//     isFull() {
//         return this.currentLength === this.capacity
//     }

//     isEmpty() {
//         return this.currentLength === 0
//     }

//     enqueue(element) {
//         if (!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = element
//             this.currentLength += 1
//             if (this.front === -1) {
//                 this.front = this.rear
//             }
//         }

//     }

//     dqueue() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength -= 1
//         if (this.isEmpty()) {
//             this.front = -1
//             this.rear = -1
//         }
//         return item
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[this.front]
//         }
//         return null
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('Queue is empty!');
//         } else {
//             let i
//             let str = ''
//             for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//                 str += this.items[i] + ' '
//             }
//             str += this.items[i]
//             console.log(str);
//         }
//     }
// }

// const queue = new CircularQueue(5)
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// console.log(queue.isFull());
// queue.print()

// console.log(queue.dqueue());
// console.log(queue.peek());
// queue.print()
// queue.enqueue(60)
// queue.print()


// Linked list class


// Linked list - Node
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}




const list = new LinkedList()
console.log('List is Empty ? ', list.isEmpty());
console.log('List size', list.getSize());
list.print()


list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 2)
list.print()

console.log(list.getSize());
console.log(list.removeValue(40));






















