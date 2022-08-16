/*
В этой миссии Вам надо определить, все ли элементы массива равны.

Входные: Array.

Выходные: Bool.

Примеры:

allTheSame([1, 1, 1]) == true
allTheSame([1, 2, 1]) == false
allTheSame(['a', 'a', 'a']) == true
allTheSame([]) == true
 */

const allTheSame = (elements)=>{
    let a=elements[0]
    for (let i=0;i<elements.length;i++){
        if (a!=elements[i]){
            return false
        }
    }
    return true
}

console.log(allTheSame([1,1]))