/*
Вам дана строка и два маркера (начальный и конечный). Вам необходимо найти текст, заключенный между двумя этими маркерами. Но есть несколько важных условий.

Это упрощенная версия миссии Between Markers.

Начальный и конечный маркеры всегда разные.
Начальный и конечный маркеры всегда размером в один символ.
Начальный и конечный маркеры всегда есть в строке и идут один за другим.
Input: Три аргумента. Все строки. Второй и третий аргументы это начальный и конечный маркеры.

Output: Строка.

Пример:
betweenMarkers('What is >apple<', '>', '<') == 'apple'
betweenMarkers('What is [apple]', '[', ']') == 'apple'
betweenMarkers('What is ><', '>', '<') == ''
betweenMarkers('[an apple]', '[', ']') == 'an apple'
 */


const betweenMarkers = (line, left, right)=>{
    let indexLeft = line.indexOf(left)
    let indexRight = line.indexOf(right)
    return line.slice(indexLeft+1, indexRight)
}

console.log(betweenMarkers('What is >apple<', '>', '<'))