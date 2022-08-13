/*
В заданной строке вы должны перевернуть каждое слово, но слова должны оставаться на своих местах.

Example:

backwardStringByWord('') == ''
backwardStringByWord('world') == 'dlrow'
backwardStringByWord('hello world') == 'olleh dlrow'
backwardStringByWord('hello   world') == 'olleh   dlrow'

 */


const backwardStringByWord = (text)=>{
    let arrText = text.split(' ')
    let newArrText = arrText.map((current)=>{
        return current.split('').reverse().join('')
    }).join(' ')
    return newArrText
}

backwardStringByWord('Hello World')