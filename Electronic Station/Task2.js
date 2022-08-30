/*
У вас есть текст и список слов. Вам нужно проверить, появляются ли слова в списке в том же порядке, что и в данном тексте.

Случаи, которые вы должны ожидать при решении этой задачи:

слово из списка отсутствует в тексте — ваша функция должна вернуть False;
любое слово может встречаться в тексте более одного раза — используйте только первое;
два слова в данном списке совпадают - ваша функция должна вернуть False;
условие чувствительно к регистру, что означает, что «привет» и «Привет» — это два разных слова;
текст включает только английские буквы и пробелы.

Example:

wordsOrder('hi world im here', ['world', 'here']) == true
wordsOrder('hi world im here', ['here', 'world']) == false
wordsOrder('hi world im here', ['world']) == true
wordsOrder('hi world im here', ['world', 'here', 'hi']) == false
wordsOrder('hi world im here', ['world', 'im', 'here']) == true
wordsOrder('hi world im here', ['world', 'hi', 'here']) == false
wordsOrder('hi world im here', ['world', 'world']) == false
wordsOrder('hi world im here', ['country', 'world']) == false
wordsOrder('hi world im here', ['wo', 'rld']) == false
wordsOrder('', ['world', 'here']) == false
 */

const wordsOrder = (text, words) => {
    let textArr = text.split(' ')
    let indexWord = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < textArr.length; j++) {
            if (words[i] == textArr[j]) {
                indexWord.push(j)
                continue
            }
            if (textArr[j]==textArr[j+1]){
                return false
            }
        }
    }
    if (words.length>indexWord.length){
        return false
    }else {
        for (let i = 0; i < indexWord.length - 1; i++) {
            if (indexWord[i] < indexWord[i + 1]){
                continue
            } else return false
        }
    }
    return true
}


// console.log(wordsOrder('hi world im here', ['world', 'im']))
// console.log(wordsOrder('hi world im here', ['world', 'here']))
// console.log(wordsOrder('hi world im here', ['wo', 'rld', 'he','re']))


// console.log(wordsOrder('hi world im here', ['world', 'here']));
// console.log(wordsOrder('hi world im here', ['here', 'world']));
// console.log(wordsOrder('hi world im here', ['world']));
// console.log(wordsOrder('hi world im here', ['world', 'here', 'hi']));
// console.log(wordsOrder('hi world im here', ['world', 'im', 'here']));
// console.log(wordsOrder('hi world im here', ['world', 'hi', 'here']));
// console.log(wordsOrder('hi world im here', ['world', 'world']));
console.log(wordsOrder('hi world im here', ['country', 'world']));
console.log(wordsOrder('hi world im here', ['wo', 'rld']));
console.log(wordsOrder('', ['world', 'here']));
// console.log(wordsOrder('hi world world im here', ['world', 'world']));