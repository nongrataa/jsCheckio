/*
Вам нужно подсчитать количество цифр в заданной строке.
Example:

countDigits('hi') == 0
countDigits('who is 1st here') == 1
countDigits('my numbers is 2') == 1
countDigits('This picture is an oil on canvas '
 'painting by Danish artist Anna '
 'Petersen between 1845 and 1910 year') == 8
countDigits('5 plus 6 is') == 2
countDigits('') == 0
 */

const countDigits = (text)=>{
    let arrText = text.split('')
    return arrText.reduce((count,current)=>{
        /[0-9]/.test(current)?count++:count
        return count
    },0)
}

console.log(countDigits('This 10 picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'))