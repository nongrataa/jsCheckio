/*
У вас есть положительное целое число. Попробуйте узнать, сколько в нем цифр?

Вход: положительный Int

Выход: Int.

numberLength(10) == 2
numberLength(0) == 1
numberLength(4) == 1
numberLength(44) == 2

*/

const numberLength=(num)=>{
    return Number((num+'').length)
}

console.log(numberLength(234))