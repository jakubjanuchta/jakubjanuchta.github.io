const input = document.querySelector('input:nth-of-type(1)')
const inputSearch = document.querySelector('input.second')
const btn = document.querySelector('button')
const counter = document.querySelector('h1 span')
const ul = document.querySelector('ul')

let indexLi = 0
let insideText
let liBtn


const inputTask = (e) => {
    insideText = e.target.value
}

const addTask = (e) => {
    e.preventDefault()
    if (input.value == '') return
    const li = document.createElement('li')
    li.innerHTML = insideText + '<button>Usuń</button>'
    li.classList.add(indexLi)
    ul.appendChild(li)
    input.value = ''
    const removeLi = function (e) {
        let classID = this.classList
        this.parentNode.remove()
        classID = [...classID]
        classID++
        indexLi--
        counter.textContent = indexLi
    }
    liBtn = li.querySelector('button')
    indexLi++
    liBtn.addEventListener('click', removeLi)
    counter.textContent = indexLi

}


const inputSearchTask = (e) => {
    const liElements = document.querySelectorAll('ul li')
    const inputContent = e.target.value
    liElements.forEach(element => {
        console.log(element.style.display)
        element.style.display = 'none'
        if (element.textContent.toLowerCase().includes(inputContent.toLowerCase())) {
            element.style.display = 'list-item'
        }
    })
}

btn.addEventListener('click', addTask)
input.addEventListener('input', inputTask)
inputSearch.addEventListener('input', inputSearchTask)