/*
У вас есть число, и вам нужно определить, какая цифра в этом числе самая большая.

Вход: положительное целое.

Выход: Int (0-9).

Пример:
maxDigit(0) == 0
maxDigit(52) == 5
maxDigit(634) == 6
maxDigit(1) == 1
maxDigit(10000) == 1
 */

const maxDigit = (value)=>{
    const a = String(value).split('').map(i=>{
        return Number(i)
    })
    let max = a[0]
    for (let i=0; i<=a.length-1;i++){
        a[i]>max?max=a[i]:max
    }
    return max
}

console.log(maxDigit( 123454234))