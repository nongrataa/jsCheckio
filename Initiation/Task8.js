/*
Не все элементы важны. Здесь вам нужно удалить из массива все элементы перед данным.

Для иллюстрации у нас есть массив [3, 4, 5], и нам нужно удалить все элементы, которые идут до 3, то есть 1 и 2.

Здесь у нас есть два крайних случая: (1) если режущий элемент не может быть найден, то массив не следует изменять. (2) если массив пуст, то он должен оставаться пустым.

Вход: массив и элемент границы.

Вывод: массив.

Пример:
removeAllBefore ( [ 1 , 2 , 3 , 4 , 5 ] , 3 ) == [ 3 , 4 , 5 ]
removeAllBefore ( [ 1 , 1 , 2 , 2 , 3 , 3 ] , 2 ) == [ 2 , 2 , 3 , 3 ]
removeAllBefore ( [ 1 , 1 , 2 , 4 , 2 , 3 , 4 ] , 2 ) == [ 2 , 4 , 2 , 3 , 4 ]
removeAllBefore ( [ 1 , 1 , 5 , 6 , 7 ] , 2 ) == [ 1 , 1 , 5 , 6 , 7 ]
удалитьВсеПеред ( [ ] , 0 ) == [ ]

 */

const removeAllBefore = (mass,a)=>{
    return mass.includes(a)?mass.slice(mass.indexOf(a)):mass
}

console.log(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7))