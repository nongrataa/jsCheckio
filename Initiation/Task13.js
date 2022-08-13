/*
У вас есть строка, состоящая только из цифр. Вам нужно найти, сколько нулевых цифр ("0") в начале заданной строки.

Вход: строка, состоящая из цифр.

Выход: Int.

Пример:

beginningZeros('100') == 0
beginningZeros('001') == 2
beginningZeros('100100') == 0
beginningZeros('001001') == 2
beginningZeros('012345679') == 1
beginningZeros('0000') == 4
 */

const beginningZeros = (value) => {
    let count = 0
    let arr = value.split('')
    for (let i=0; i<=arr.length;i++){
        if (arr[i]=='0'){
            count++
        }else {
            break
        }
    }
    return count

}

console.log(beginningZeros('0010001'))