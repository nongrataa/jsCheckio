/*
Вы должны разделить данный массив на два массива. Если в нем нечетное количество элементов,
то в первом массиве должно быть больше элементов.
Если в нем нет элементов, то должны быть возвращены два пустых массива.

Example:

splitList([1, 2, 3, 4, 5, 6]) == [[1, 2, 3], [4, 5, 6]]
splitList([1, 2, 3]) == [[1, 2], [3]]
splitList([1, 2, 3, 4, 5]) == [[1, 2, 3], [4, 5]]
splitList([1]) == [[1], []]
splitList([]) == [[], []]
 */


const splitList = (values)=>{
    let lenArr = values.length
    let arr=[]
    let sliceArr = lenArr%2==0?(lenArr/2):(lenArr/2)+1
    arr.push(values.slice(0,sliceArr))
    arr.push(values.slice(sliceArr))
    return arr
}

console.log(splitList([1,2,3,4,5]))