//1
// 
let estados = ['Amazonas', 'Para', 'Acre', 'Rondonia', 'Roraima', 'Amapa', 'Tocantins', 'Maranhão', 'Piauí', 'Paraíba', 'Rio Grande do Norte', 'Ceara', 'Pernambuco', 'Alagoas', 
    'Sergipe', 'Bahia', 'Mato Grosso', 'Goiás', 'Mato grosso do Sul', 'Distrito Federal', 'Minas Gerais', 'Espirito Santo', 'Rio de Janeiro', 'São Paulo', 'Parana', 'Santa Catarina', 'Rio grande do SUl'] 

      estados.forEach((estados, i) => {
        console.log(`${i + 1}: ${estados}`)

    }); 

//2
//

    const Joao = {
        idade: 27,
        nascimento: "28-05-1997",
        localnascimento: "Registro, SP",
        escolaridade: "Superior Completo",
        time: "Palmeiras"

    }
    console.log(`Olá, meu nome é João, tenho ${Joao.idade}, nasci no dia ${Joao.nascimento} na cidade de ${Joao.localnascimento}. Tenho a escolaridade ${Joao.escolaridade} e torço para o ${Joao.time}`)

//3
//

const filmes = [{
        titulo: "A lista de Schindler",
        genero: "Drama",
        ano: 1993,
        classificação: 14
},
{
  titulo: "Coringa",
  genero: "Suspense",
  ano: 2019,
  classificação: 18
},
{
  titulo: "Interestelar",
  genero: "Ficção Científica",
  ano: 2014,
  classificação: 10
},                        

{
  titulo: "Interestelar",
  genero: "Ficção Científica",
  ano: 2014,
  classificação: 10
},  
    
{
  titulo: "Poderoso Chefão",
  genero: "Drama",
  ano: 1972,
  classificação: 14
}
  

]

filmes.forEach(filmes => {
  console.log(`Título: ${filmes.titulo}`)
  console.log(`Gênero: ${filmes.genero}`)
  console.log(`Ano: ${filmes.ano}`)
  console.log(`Classificação: ${filmes.classificação}`)
  console.log()
})
