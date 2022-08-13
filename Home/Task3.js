/*
Дана строка и нужно найти ее первое слово.

При решении задачи обратите внимание на следующие моменты:

В строке могут встречатся точки и запятые
Строка может начинаться с буквы или, к примеру, с пробела или точки
В слове может быть апостроф и он является частью слова
Весь текст может быть представлен только одним словом и все
Входные параметры: Строка.

Выходные параметры: Строка.

Пример:

firstWord("Hello world") == "Hello"
firstWord("greetings, friends") == "greetings"

Как это используется: первое слово - это команда в командной строке

Предварительное условие: текст может содержать az AZ , . '
 */

const firstWord = (text)=>{
    let arrText = text.replace('.',' ').split(' ')
    let word=[]
    arrText.forEach((current)=>{
        if (/[a-z,A-Z]/.test(current)){
            word.push(current)
        }
    })
    return word[0].replace(/[,.-]/,'')
}

console.log(firstWord(' ... a. H`ELL ello world '))
console.log(firstWord('Hello world'))
console.log(firstWord(' a word '))
console.log(firstWord('don\'t touch it'))
console.log(firstWord('greetings, friends'))
console.log(firstWord('... and so on ...'))
console.log(firstWord('hi'))
console.log(firstWord('Hello.World'))