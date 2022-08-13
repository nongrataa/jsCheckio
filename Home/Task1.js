/*
В заданном тексте нужно сложить числа. Следует учитывать только разделенные числа. Если число является частью слова, оно не должно учитываться.

Текст состоит из цифр, пробелов и английских букв

Input: A string.

Output: An int.

Example:

sumNumbers('hi') == 0
sumNumbers('who is 1st here') == 0
sumNumbers('my numbers is 2') == 2
sumNumbers('This picture is an oil on canvas '
 'painting by Danish artist Anna '
 'Petersen between 1845 and 1910 year') == 3755
sumNumbers('5 plus 6 is') == 11
sumNumbers('') == 0

 */

const sumNumbers = (test)=>{
    let arrTest = test.split(' ')
    let count = 0
    arrTest.forEach((a)=>Number(a)?count = count+Number(a):a)
 return count
}

console.log(sumNumbers(""))