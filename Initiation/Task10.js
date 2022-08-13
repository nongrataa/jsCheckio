/*
В заданном массиве первый элемент должен стать последним. Пустой массив или массив только с одним элементом должен оставаться неизменным.

Вход: массив.

Вывод: массив.

Пример:
replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1]
replaceFirst([1]) == [1]
replaceFirst([]) == []
 */

const replaceFirst = (arr)=>{
    arr[1]?arr.push(arr.shift()):arr
    return arr
}
console.log(replaceFirst([]))