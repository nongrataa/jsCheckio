/*
Вам дана строка и два маркера (начальный и конечный). Вам необходимо найти текст, заключенный между двумя этими маркерами. Но есть несколько важных условий:

Начальный и конечный маркеры всегда разные
Если нет начального маркера, то началом считать начало строки
Если нет конечного маркера, то концом считать конец строки
Если нет ни конечного, ни начального маркеров, то просто вернуть всю строку
Если конечный маркер стоит перед начальным, то вернуть пустую строку
Input: Три аргумента. Все строки. Второй и третий аргументы это начальный и конечный маркеры.

Output: Строка.

Примеры:

betweenMarkers('What is >apple<', '>', '<') == 'apple'
betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'
 */

const betweenMarkers = (text, begin, end)=>{
    let left = text.indexOf(begin)+begin.length
    let right = text.indexOf(end)
    if (left-begin.length==-1){
        left=0
    }
    if (right==-1){
        right=text.length
    }
    if (left>right){
        return ''
    }
    return text.slice(left,right)
}

console.log(betweenMarkers('What is apple', '>', '<'))
console.log(betweenMarkers("<head><title>My new site</head>","<title>", "</title>"))
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'))
console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'))
console.log(betweenMarkers('No hi', '[b]', '[/b]'))
console.log(betweenMarkers('No <hi>', '>>>>>>>', '<'))
