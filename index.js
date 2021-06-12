console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('            Aline Silva              ')
console.log('--------------------------------------')

const itens = require('./database')

const{produtos} = itens 

produtos.sort((a,b) => a.preco - b.preco)


const read = require('readline-sync')
const carrinho = []
const { SSL_OP_MICROSOFT_SESS_ID_BUG } = require('constants')

const produtosPorCategoria = read.question('Deseja ver os produtos por categoria? (S/N)')

if (produtosPorCategoria.toLocaleUpperCase()=== 'S'){

    console.log('Essas sao as categorias disponiveis:')

    console.log('higiene, casa, alimento, bebida e informatica')

const perguntaCategoria = read.question('Voce esta buscando por qual categoria? ')

const qualCategoria = produtos.filter(item => item.categoria === perguntaCategoria)

console.table(qualCategoria)
} else{
    (produtosPorCategoria.toUpperCase() !== "s")
    console.log("Essas são todas as categorias")
    console.table(produtos)
}

const array = new Array()
class Pedido {

    constructor(array){
        this.productor = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }

}
const compra = () =>{
    productId = parseInt(read.question("Digite o ID do produto: "))

    for(i=0; i< 1000; i++){

        encontreId = produtos.find(item => item.id == productId)
        if(encontreId){
            break;
        }else{
            productId = parseInt(read.question('Digite um ID valido'))
        }
    }


quantidadeItem = parseInt(read.question("Qual a quantidade desejada: "))
 for(i=0; i< 1000; i++){

    if(quantidadeItem > 0){
        break;
    }else{
        quantidadeItem = parseInt(read.question("Digite uma quantidade valida"))
    }
}

const produtosCarrinho = {...encontreId, quantidade: quantidadeItem}
carrinho.push(produtosCarrinho)

const comprando = read.question("Deseja inserir mais algum item? (S/N)")

const comprandoFormato = comprando.toLowerCase()

    if(comprandoFormato === "n"){
        cupom = parseInt(read.question("Digite o valor do cupom: "))

        
        } else{
            compra()

        }

        for(i=0; i< 1000; i++){
            if(cupom > 15 || cupom < 0){
                cupom = parseInt(read.question("Cupom inválido. Tente novamente."))
                
            }else{

                break;
            }
        }
    }

    compra()

   class Order {
       constructor(carrinho){

        this.newProducts = carrinho
        this.subTotal = 0
       }

       calcSubtotal(){
           this.subTotal = this.newProducts.reduce((acumulador, item)=> acumulador + (item.preco*item.quantidade),0)

       }

   } 

const order = new Order(carrinho)
console.table(order.newProducts);

order.calcSubtotal()
console.log(`valor do pedido R$ ${order.subTotal.toFixed(2)}.`)

const desconto = order.subTotal * (cupom/100)
console.log(`valor do desconto R$ ${desconto.toFixed(2)}.`)

const total = order.subTotal - desconto 
console.log(`valor do pedido total R$ ${total.toFixed(2)}.`)


const hoje = new Date()
const options = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
}

const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log("Pedido finalizado em " + dataHoje)

console.log("Obrigada por comprar conosco")



