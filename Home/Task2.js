/*
Давайте научим наших роботов отличать слова от чисел.

Дана строка со словами и числами, разделенными пробелами (один пробел между словами и/или числами). Слова состоят только из букв. Вам нужно проверить есть ли в исходной строке три слова подряд. Для примера, в строке "start 5 one two three 7 end" есть три слова подряд.

Входные данные: Строка со словами (str).

Выходные данные: Ответ как логическое выражение (bool), True или False.

Примеры:

threeWords("Hello World hello") == True
threeWords("He is 123 man") == False
threeWords("1 2 3 4") == False
threeWords("bla bla bla bla") == True
threeWords("Hi") == False

Предусловия: Исходная строка содержит только слова и/или числа. Смешанных слов нет (перемешанные цифры и буквы).
0 < len(words) < 100
 */


const threeWords = (text) => {
    const arrText = text.split(' ')
    const res = arrText.reduce((count, current)=>{
        if (!Number(current)){
            count++
        }else if (count<3) {
            count = 0
        }
        return count
    },0)
    return res>=3?true:false
}

console.log(threeWords('asdf fds 4 3'))