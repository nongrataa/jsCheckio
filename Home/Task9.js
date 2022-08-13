/*
Ваша задача в этой миссии определить популярность определенных слов в тексте.
На вход вашей функции передается 2 аргумента. Текст и массив слов, популярность которых необходимо определить.
При решении этой задачи обратите внимание на следующие моменты
Слова необходимо искать во всеx регистрах. Т.е. если необходимо найти слово "one", значит для него будут подходить слова "one", "One", "oNe", "ONE" и.т.д.
Искомые слова всегда указаны в нижнем регистре
Если слово не найдено ни разу, то его необходимо вернуть в словаре со значением 0 (ноль)
Входные параметры: Текст и массив искомых слов.

Выходные параметры: Словарь, в котором ключами являются искомые слова и значениями то, сколько раз они встречаются в исходном тексте.

Пример:
popularWords('When I was One \n\
I had just begun\n\
When I was Two\n\
I was nearly new', ['i', 'was', 'three', 'near']) == {
    'i': 4,
    'was': 3,
    'three': 0,
    'near': 0
}

Предусловия:
Исходный текст будет состоять из букв английского алфавита в верхнем и нижнем регистре, а также пробелов.
 */


const popularWords = (text, words) => {
    let text1 = text.replace(/\n+/g,' ')
    let textArr = text1.toLowerCase().split(' ')
    let topWord = {}
    for (let i=0; i<words.length;i++){
        let count = 0
        for (let j=0;j<textArr.length;j++){
            if (words[i]==textArr[j]){
                count++
            }
        }
        topWord[words[i]]=count
    }
    return topWord
}

popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near'])