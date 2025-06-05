// JOÃO VICTOR SINCARUK VIEIRA

// 1) FUNÇÃO SIMPLES

function dados(){
    console.log("João Victor, ", "27 anos, ", "Registro-SP")
   }
   dados()
   
   ////////////////////////////////////////////////////////////////////////////////////////////
   
   // 2) FUNÇÃO COM PARÂMETROS
   function divisao (num1, num2){
       let resultado = num1 / num2
       console.log(`O resultado da divisão foi ${resultado}`)
   
   }
   divisao(10, 2)
   
   ////////////////////////////////////////////////////////////////////////////////////////////
   
   // 3) FUNÇÃO COM RETORNO
   
   function multiretorno (num1, num2, num3){
       return num1 * num2 * num3
   }
   console.log(`A multiplicação entre esses 3 numeros foi ${multiretorno(2,5,8)}`)
   
   ////////////////////////////////////////////////////////////////////////////////////////////
   
   
   // 4)  FUNÇÃO COM MAIS DE UM RETORNO
   
   function maiordeidade(idade) {
       if (idade >= 18) {
         return "maior de idade";
       } else {
         return "menor de idade";
       }
     }
     let idade = 27;
     console.log(maiordeidade(idade));
     console.log(`a pessoa com ${idade} anos é ${maiordeidade(idade)}!`);
   
     ////////////////////////////////////////////////////////////////////////////////////////////
   
     //  5) FUNÇÃO ANONIMA
   
     let nota = function (n1, n2) {
     let media = (n1 + n2) / 2
     if (media <= 5) {
       return "Reprovado"
     } else{
       return "Aprovado"}
     }
     console.log(nota(5, 6))
   
     ///////////////////////////////////////////////////////////////////////////////////////////
   
   // 6) ARROW FUNCTION COM PARAMETRO UNICO
   
   const triplo = x => {
       return x * 3
   }
   console.log(`O triplo de 40 é ${triplo(40)} `)
   
     ////////////////////////////////////////////////////////////////////////////////////////////
   
   
   // 7) ARROW FUNCTION COM MAIS DE UM PARAMETRO 
   
   const somaquatro = (num1, num2, num3, num4) => {
       return (num1 + num2 + num3 + num4)
   
   }
   console.log(`O resultado da soma dos 4 numeros é ${somaquatro(8, 3, 5, 2)}`)
   
   ////////////////////////////////////////////////////////////////////////////////////////////
   
   //8) IIFE
   
   const olapessoa = (function(nome){
       console.log(`Bem vindo ${nome}`)
   })("Joao")