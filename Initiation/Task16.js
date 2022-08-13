/*
На вход Вашей функции будет передано одно предложение. Необходимо вернуть его исправленную копию так, чтобы оно всегда начиналось с большой буквы и заканчивалось точкой.

Обратите внимание на то, что не все исправления необходимы. Если предложение уже заканчивается на точку, то добавлять еще одну не нужно, это будет ошибкой

Входные аргументы: Строка (A string).

Выходные аргументы: Строка (A string).

Пример:
correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

const correctSentence = (text)=>{
    const arrStr = text.split('')
    arrStr[0]=arrStr[0].toUpperCase()
    let lengthText = arrStr.length
    if (arrStr[lengthText-1]!='.'){
        arrStr.push('.')
    }
    return arrStr.join('')
}

correctSentence('texter sdfsdf.')