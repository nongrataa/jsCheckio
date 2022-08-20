/*
Вам дан список файлов. Вам нужно отсортировать этот список по расширению файла.
Файлы с одинаковым расширением должны быть отсортированы по имени.

Некоторые возможные случаи:

Имя файла не может быть пустой строкой;
Файлы без расширения должны идти перед файлами с ним;
Имя файла ".config" имеет пустое расширение и имя ".config";
Имя файла "config." имеет пустое расширение и имя "config.";
Имя файла "table.imp.xls" имеет расширение "xls" и имя "table.imp";
Имя файла ".imp.xls" имеет расширение "xls" и имя ".imp".

Example:

sortByExt(['1.cad', '1.bat', '1.aa']) == ['1.aa', '1.bat', '1.cad']
sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']) == ['1.aa', '1.bat', '2.bat', '1.cad']
sortByExt(['1.cad', '1.bat', '1.aa', '.bat']) == ['.bat', '1.aa', '1.bat', '1.cad']
sortByExt(['1.cad', '1.bat', '.aa', '.bat']) == ['.aa', '.bat', '1.bat', '1.cad']
sortByExt(['1.cad', '1.', '1.aa']) == ['1.', '1.aa', '1.cad']
sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']) == ['1.aa', '1.bat', '1.cad', '1.aa.doc']
 */


const sortByExt = (files)=>{
    let obj={}
    for (let i=0;i<files.length;i++){
        let arr=files[i].split('.')
        obj[files[i]]={typeF:arr[arr.length-1], nameF:files[i].slice(0,-arr[arr.length-1].length-1)}
    }
    let arrSorted = files.sort((a,b)=>{
        if (obj[a].nameF=='' && obj[b].nameF==''){
            if (obj[a].typeF<obj[b].typeF){
                return -1
            }else return 1
        }else {
            if (obj[a].typeF<obj[b].typeF){
                if (obj[b].nameF==''){
                    return 1
                }
                return -1
            }
            if (obj[a].typeF>obj[b].typeF){
                if (obj[a].nameF==''){
                    return -1
                }
                return 1
            }
            if (obj[a].typeF==obj[b].typeF){
                if (a<b)return -1
                if (a>b)return 1
                if (a==b)return 0
            }
        }
    })
    return arrSorted
}




/*console.log(sortByExt(['1.cad', '1.bat', '.bat', '1.aa']))
console.log(sortByExt(['1.cad', '1.bat', '.aa', '.bat']))*/
console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']))

/*

 */

