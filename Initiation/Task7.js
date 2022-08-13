/*
Вы должны вернуть данную строку в обратном порядке.

Вход: строка.

Выход: строка.

Пример:
backwardString('val') == 'lav'
backwardString('') == ''
backwardString('ohho') == 'ohho'
backwardString('123456789') == '987654321'
 */


const backwardString=(str)=>{
    let a=''
    for (let i=str.length-1; i>=0; i--){
        a=a+str[i]
    }
    return a
}

console.log(backwardString('hello'))
console.log(backwardString('hello').length)