const students = [
    {
        nome: 'Lucas',
        nota1: 9,
        nota2: 7,
    },

    {
        nome: 'Teste2',
        nota1: 3,
        nota2: 7.2,
    },

    {
        nome: 'teste3',
        nota1: 3,
        nota2: 2,
    }
    
] 

function printMedia(students){

    alert(
        `A média do aluno ${students.nome} foi de 
        ${(students.nota1 + students.nota2) / 2}`
    )
}

for (let studet of students){
    printMedia(studet)
}

console.log(media)




