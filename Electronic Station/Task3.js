/*
Проверить, есть ли в данной строке все символы в верхнем регистре.
Если строка пуста или в ней нет ни одной буквы - функция должна вернуть False.

Example:

isAllUpper('ALL UPPER') == true
isAllUpper('all lower') == false
isAllUpper('mixed UPPER and lower') == false
isAllUpper('') == false
 */

const isAllUpper = (text)=>{
    return text.replaceAll(' ','')==text.replaceAll(' ','').toUpperCase() && text.replaceAll(' ','')!='' && !Number(text.replaceAll(' ',''))?true:false
}



console.log(isAllUpper('ALL UPPER'))
console.log(isAllUpper('all lower'))
console.log(isAllUpper(''))
console.log(isAllUpper('123'))
console.log(isAllUpper('  '))
console.log(isAllUpper('mixed UPPER and lower'))