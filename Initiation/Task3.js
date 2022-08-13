/*
Дана строка и нужно найти ее первое слово.

Это упрощенная версия миссии First Word.

Строка состоит только из английских символов и пробелов.
В начале и в конце строки пробелов нет.
Входные параметры: Строка.

Выходные параметры: Строка.

Пример:

firstWord("Hello world") == "Hello"
 */

const firstWord = (str)=>{
    return str.split(' ')[0]
}

console.log(firstWord('Hello World'))