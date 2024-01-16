const myName = 'Al-amin'
console.log(myName)

const nameLength = myName.length
console.log(nameLength)


const newName = myName.toUpperCase()
console.log(newName)

const newSubString = myName.substring(3,7)
console.log(newSubString)

const myOtherName = 'Ozovehe'
console.log(myOtherName)

const myUpdatedName = myName.replace('amin', 'Ozovehe')
console.log(myUpdatedName)
console.log(myUpdatedName.indexOf('e'))

const anotherString = 'a greeting'
const result = myName.concat(anotherString)
console.log(result)

const resultLength = result.length
console.log(resultLength)

const oper = (nameLength>resultLength)
console.log(oper)


const lists = document.querySelectorAll('ul li')


lists[0].textContent = myName
lists[1].textContent = myName.length
lists[2].textContent = myName.toUpperCase()
lists[3].textContent = myName.toLowerCase()
lists[4].textContent = myName.charAt(3)
lists[5].textContent = newSubString
lists[6].innerHTML = `Al-${myOtherName}`
lists[7].textContent = myUpdatedName
lists[8].textContent = myUpdatedName.indexOf('e')
lists[9].textContent = myName.concat(anotherString)


// Arithmetic and Comparison Operators
let num1 = 25
let num2 = 23
let num3 = 19


let a = num1 + num2
console.log(a)

let b = num3 - num2
console.log(b)

let c = num3 * num2
console.log(c)

let d = num3 / num2
console.log(d)

let e = num1 % num2
console.log(e)



