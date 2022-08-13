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
        }else{
            continue
        }
        for (let j=i;j<=items.length;j++){
            if (items[j]==items[i]){
                count[items[i]]=+count[items[i]]+1
            }
        }
    }
    let arr= Object.keys(count).sort(function(a,b){return count[b]-count[a]})
    return arr
}

frequencySort([2,3,4,5,4,4,4,3,1,2,2])