/*
Отсортируйте данный Array таким образом, чтобы его элементы оказались в порядке убывания частоты их появления, то есть по количеству раз,
которое они появляются в элементах.
Если два элемента имеют одинаковую частоту, они должны оказаться в том же порядке, в котором стояли изначально в Array.

Входные данные: Array

Выходные данные: Array

Пример:

frequencySort([4, 6, 2, 2, 6, 4, 4, 4]) == [4, 4, 4, 4, 6, 6, 2, 2]
frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']) == ['bob', 'bob', 'bob', 'carl', 'alex']

Предварительное условие: Элементы могут быть целыми числами или строками.
 */
const frequencySort = (items)=>{
    let count={}
    for (let i=0; i<items.length;i++){
        if (!count[items[i]]){
            count[items[i]]=0
            for (let j=i;j<=items.length;j++){
                if (items[j]==items[i]){
                    count[items[i]]=+count[items[i]]+1
                }
            }
        }
    }
    let arr = items.sort((a, b) => count[a] != count[b] ? count[b] - count[a] : items.indexOf(a) - items.indexOf(b))
    return arr
}

frequencySort([1,4,3,6,5,3,7,7,77,3,5])

/*
Можно было использовать reduce для подсчета количества элементов, но это уже в другой раз...
 */