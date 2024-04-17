
const sum = (firstNumber, secondNumber) => {
    let value = 0
    if( verifyIsTypeCorrect (firstNumber, 'number') && verifyIsTypeCorrect (secondNumber, 'number') ) {
        value = firstNumber + secondNumber
    }

    return value
}

const  subtract = (firstNumber, secondNumber) => {
    let value = 0
    if( verifyIsTypeCorrect (firstNumber, 'number') && verifyIsTypeCorrect (secondNumber, 'number') ) {
        value = firstNumber - secondNumber
    }

    return value
}


const  multiply = (firstNumber, secondNumber) => {
    let value = 0
    if( verifyIsTypeCorrect (firstNumber, 'number') && verifyIsTypeCorrect (secondNumber, 'number') ) {
        value = firstNumber * secondNumber
    }

    return value
}

const  divide = (firstNumber, secondNumber) => {
    let value = 0
    if( verifyIsTypeCorrect (firstNumber, 'number') && verifyIsTypeCorrect (secondNumber, 'number') ) {
        value = firstNumber / secondNumber
    }

    return value
}

const verifyIsTypeCorrect = (value, typeName) => {
    return typeof value  == typeName
}


module.exports = {
    sum,
    divide,
    multiply,
    subtract
}