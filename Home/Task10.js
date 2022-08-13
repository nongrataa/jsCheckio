/*
Даны 2 строки. Необходимо найти индекс второго вхождения второй строки в первую.

Разберем самый первый пример, когда необходимо найти второе вхождение "s" в слове "sims".
Если бы нам надо было найти ее первое вхождение, то тут все просто: с помощью функции indexOf мы можем узнать, что "s" – это самый первый символ в слове "sims", а значит индекс первого вхождения равен 0.
Но нам необходимо найти вторую "s", а она 4-ая по счету.
Значит индекс второго вхождения (и ответ на вопрос) равен 3.
Input: Две строки (String).

Output: Int or undefined

Примеры:

secondIndex("sims", "s") == 3
secondIndex("find the river", "e") == 12
secondIndex("hi", " ")  == undefined
 */

const secondIndex = (text, symbol)=>{
    let count=0
    for (let i=0; i<text.length; i++){
        if (text[i]==symbol){
            count++
            if (count==2){
                return i
            }
        }
    }
    return undefined
}

console.log(secondIndex('qwe rqw re',' '))