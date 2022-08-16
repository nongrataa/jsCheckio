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
    let arrFiles = files.map((a)=>{
        let obj={}
        let arr = a.split('.')
        obj[a] =  arr[arr.length-1]
        console.log(a)
        console.log(obj)
        return obj
    })
    let newArr=[]
    for (let i=0;i<arrFiles.length;i++){

    }

}


sortByExt(['1.cad', '.bat', '1.aa'])

/*
Создать массив объектов с именем и расширением
затем отсортировать по расширению, если одинаковые то по названию
 */