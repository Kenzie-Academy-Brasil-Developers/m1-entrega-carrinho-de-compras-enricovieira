let body            = document.querySelector("body")
let header          = document.createElement("header")
let h1              = document.createElement("h1")
let main            = document.createElement("main")
let section         = document.createElement("section")
let divTitle        = document.createElement("div")
let pItem           = document.createElement("p")
let pValor          = document.createElement("p")
let ul              = document.createElement("ul")
let divTotal        = document.createElement("div")
let total           = document.createElement("p")
let totalValor      = document.createElement("p")
let button          = document.createElement("button")
let totalCarrinho   = 0

function createPage(){
    
    body.appendChild(main)
    main.appendChild(header)
    h1.classList = "logo"
    h1.innerText = "Mercadinho"
    header.appendChild(h1)
    section.classList = "container"
    main.appendChild(section)
    divTitle.classList = "title-carrinho"
    section.appendChild(divTitle)
    pItem.innerText = "Item"
    divTitle.appendChild(pItem)
    pValor.innerText = "valor"
    divTitle.appendChild(pValor)
    section.appendChild(ul)
    divTotal.classList = "total-carrinho"
    section.appendChild(divTotal)
    total.innerText = "Total"
    divTotal.appendChild(total)
    totalValor.innerText = 0
    divTotal.appendChild(totalValor)
    button.classList = "buy-btn"
    button.innerText = "Finalizar compra"
    section.appendChild(button)

}console.log(createPage())

function createCard(lista){
    for(let i = 0; i<lista.length; i++){
        let produtos = lista[i]
        let cardProdutos = criarCard(produtos)
        ul.appendChild(cardProdutos)
        soma(produtos.price)
    }
}console.log(createCard(products));

function criarCard(produtos){
    
    let card = document.createElement("li")
    let h2 = document.createElement("h2")
    let span = document.createElement("span")
    

    let nome = produtos.name
    let preco = produtos.price

    card.classList = "card"
    h2.classList = "title"
    h2.innerText = nome
    span.classList = "price"
    span.innerText = `R$${preco}`

    card.appendChild(h2)
    card.appendChild(span)

    return card
}

function soma(preco){
    totalCarrinho += preco
    let precoFormatado = `R$${totalCarrinho}`
    totalValor.innerHTML = ""
    totalValor.append(precoFormatado)
    console.log(totalCarrinho)
}console.log(soma())