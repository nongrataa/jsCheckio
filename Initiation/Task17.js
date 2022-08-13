/*
Проверьте, является ли заданное число четным или нет. Ваша функция должна возвращать true, если число четное, и false, если число нечетное.
Input: An int.

Output: A bool.

Example:

isEven(2) == true
isEven(5) == false
isEven(0) == true

Предварительное условие : оба заданных целых числа должны быть между -1000 и 1000 .
 */


const isEven = (num)=>{
    return num%2==0?true:false
}

console.log(isEven(1))