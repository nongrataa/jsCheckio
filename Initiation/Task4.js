/*
Вы — начало серии паролей. Каждая миссия будет основана на предыдущей. В дальнейшем миссии станут немного сложнее.

В этой миссии вам нужно создать функцию проверки пароля.

Это условия проверки:
длина должна быть больше 6.

Input: A string.

Output: A bool.

Example:

isAcceptablePassword('short') == false
isAcceptablePassword('muchlonger') == true
isAcceptablePassword('ashort') == false

 */


const checkPass = (password)=>{
    return password.length>6?true:false
}

console.log(checkPass('hello12'))