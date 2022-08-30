/*
Определите, является ли последовательность элементов элементами возрастающей,
чтобы каждый ее элемент был строго больше (а не просто равен) предшествующего ему элемента.

Example:

isAscending([-5, 10, 99, 123456]) == true
isAscending([99]) == true
isAscending([4, 5, 6, 7, 3, 7, 9]) == false
isAscending([]) == true
isAscending([1, 1, 1, 1]) == false
 */

const isAscending = (values)=>{
    for (let i=0;i<values.length-1;i++){
        if (values[i]<values[i+1]){
            continue
        }else return false
    }
    return true
}

console.log(isAscending([99]))