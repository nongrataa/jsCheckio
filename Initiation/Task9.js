/*
Проверить, есть ли в данной строке все символы в верхнем регистре. Если строка пуста или в ней нет ни одной буквы - функция должна вернуть True.

Вход: строка.

Выход: логическое значение.

Пример:
isAllUpper('ALL UPPER') == true
isAllUpper('all lower') == false
isAllUpper('mixed UPPER and lower') == false
isAllUpper('') == true
 */

const isAllUpper = (a)=>{
    return a==a.toUpperCase()?true:false
}

console.log(isAllUpper(''))