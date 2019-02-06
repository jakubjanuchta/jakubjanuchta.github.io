const resultDial = document.querySelector('.panel div:nth-child(1)')
const one = document.querySelector('.panel div:nth-child(2)')
const two = document.querySelector('.panel div:nth-child(3)')
const three = document.querySelector('.panel div:nth-child(4)')
const four = document.querySelector('.panel div:nth-child(5)')
const five = document.querySelector('.panel div:nth-child(6)')
const six = document.querySelector('.panel div:nth-child(7)')
const seven = document.querySelector('.panel div:nth-child(8)')
const eight = document.querySelector('.panel div:nth-child(9)')
const nine = document.querySelector('.panel div:nth-child(10)')
const plus = document.querySelector('.panel div:nth-child(11)')
const zero = document.querySelector('.panel div:nth-child(12)')
const minus = document.querySelector('.panel div:nth-child(13)')
const divide = document.querySelector('.panel div:nth-child(14)')
const dot = document.querySelector('.panel div:nth-child(15)')
const multiply = document.querySelector('.panel div:nth-child(16)')
const cancel = document.querySelector('.panel div:nth-child(17)')
const equals = document.querySelector('.panel div:nth-child(18)')



let firstNumber = 0;
let secondNumber = 0;
let sign = '';
let result = 0;
let counter = 0;

const numberPress = function () {
    const content = this.textContent;
    if (content != '' && sign == '' && counter > 0) {
        return 0;
    }
    if (content < 10) {
        console.log(content)
        resultDial.textContent += content;
    }

    if (sign === '' && counter == 0) {
        firstNumber += content;
    } else if (counter > 0) {
        firstNumber = result;
        secondNumber += content;
    } else if (sign !== '') {
        secondNumber += content;
    }
}

const signPress = function () {
    const content = this.textContent;
    console.log(content)
    if (sign == '') {
        resultDial.textContent += content;
    }
    sign = content;
}

const resultFun = function () {
    result = 0;
    if (sign == '+') {
        result = Number(firstNumber) + Number(secondNumber)
    }
    if (sign == '-') {
        result = Number(firstNumber) - Number(secondNumber)
    }
    if (sign == '/') {
        result = Number(firstNumber) / Number(secondNumber)
    }
    if (sign == '*') {
        result = Number(firstNumber) * Number(secondNumber)
    }
    counter++;
    resultDial.textContent = result;

    firstNumber = result;
    secondNumber = 0;
    sign = '';
}

const clearAll = function () {
    firstNumber = 0;
    secondNumber = 0;
    sign = '';
    counter = 0;
    result = 0;
    resultDial.textContent = '';
}


zero.addEventListener('click', numberPress)
one.addEventListener('click', numberPress)
two.addEventListener('click', numberPress)
three.addEventListener('click', numberPress)
four.addEventListener('click', numberPress)
five.addEventListener('click', numberPress)
six.addEventListener('click', numberPress)
seven.addEventListener('click', numberPress)
eight.addEventListener('click', numberPress)
nine.addEventListener('click', numberPress)
plus.addEventListener('click', signPress)
minus.addEventListener('click', signPress)
divide.addEventListener('click', signPress)
multiply.addEventListener('click', signPress)
cancel.addEventListener('click', clearAll)
equals.addEventListener('click', resultFun)