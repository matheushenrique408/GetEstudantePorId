const express = require('express')
const app = express()

const estudantes = [
    {id: 1, nome: "Pedro Henrique", idade: 17, media: "100kg no supino"},
    {id: 2, nome: "Joao Papadunhio", idade: 16, media: "nao sabe ingles"},
    {id: 3, nome: "Matheus Luciano", idade: 16, media: "quase 0"},
    {id: 4, nome: "Arthur Marcelino", idade: 17, media: "666"},
    {id: 5, nome: "Renan Aprigio", idade: 17, media: "criou um elemento novo"},
    {id: 6, nome: "Juan Vila Nova Rojas Moreno", idade: 17, media: "odeia padre gay"} ,
    {id: 7, nome: "João Guilherme", idade: 17, media: "deu pra passar"},
    {id: 8, nome: "Artur Tomé", idade: 17, media: "redacao defendendo o racismo"},
    {id: 9, nome: "Debora", idade: 22, media: "Se casou com matheus henrique"},
    {id: 10, nome: "Amanda tacielly", idade: 17, media: "700R$"},
    {id: 11, nome: "Rômulo siqueira", idade: 16, media: "bilologia"},
    {id: 12, nome: "Matheus Henrique", idade: 17, media: "I ghost the down cool"}
    
];

app.get('/', (req,res) =>{
    res.send('http://localhost:3000/estudante/(id do estudante)')
});

app.get('/estudante/:id', (req,res) =>{
    let id= req.params.id;
    let estudante = estudantes[id - 1];
    if (estudante) {
        res.send('Nome: ' + estudante.nome + '<br>' + 'Idade: ' + estudante.idade + '<br>' + 'Média : ' + estudante.media) ;   
    }else {
        res.send('Não existe estudante com o id: ' +id)
    }
    
})

app.listen(3000, () => {
    console.log ("Servidor em execução...")

})
