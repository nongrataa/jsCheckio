/*
Разделите строку на пары из двух символов. Если строка содержит нечетное количество символов, пропущенный второй символ последней пары должен быть заменен подчеркиванием ('_').

Входные данные: Строка.

Входные данные: Массив строк.

Пример:

splitPairs('abcd') == ['ab', 'cd']
splitPairs('abc') == ['ab', 'c_']
splitPairs('abcdf') == ['ab', 'cd', 'f_']
splitPairs('a') == ['a_']
splitPairs('') == []
 */

const splitStr = (value)=>{
    let mass = value.split('')
    if (mass.length%2!=0){
        mass.push('_')
    }
    let str=''
    let count=0
    let newArr=[]
    for (let i=0; i<mass.length;i++){
        count++
        str +=mass[i]
        if (count==2){
            newArr.push(str)
            str=''
            count=0
        }
    }
    return newArr
}

console.log(splitStr(''))