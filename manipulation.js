const myName = 'Al-amin'
console.log(myName)

const nameLength = myName.length
console.log(nameLength)


const newName = myName.toUpperCase()
console.log(newName)

const newSubString = myName.substring(3,7)
console.log(newSubString)

const myOtherName = 'Ozovehe'

const lists = document.querySelectorAll('ul li')


lists[0].textContent = myName
lists[1].textContent = myName.length
lists[2].textContent = myName.toUpperCase()
lists[3].textContent = myName.toLowerCase()
lists[4].textContent = myName.charAt(3)
lists[5].textContent = newSubString
lists[6].innerHTML = myName.replace('amin')





