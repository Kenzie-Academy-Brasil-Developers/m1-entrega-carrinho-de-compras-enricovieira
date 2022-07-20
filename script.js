let body            = document.querySelector("body")
let header          = document.createElement("header")
let h1              = document.createElement("h1")
let main            = document.createElement("main")
let section         = document.createElement("section")
let divTitle        = document.createElement("div")
let pItem           = document.createElement("p")
let pValor          = document.createElement("p")
let productList     = document.createElement("ul")
let divTotal        = document.createElement("div")
let total           = document.createElement("p")
let totalValor      = document.createElement("p")
let buttonEnd       = document.createElement("button")
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
    section.appendChild(productList)
    divTotal.classList = "total-carrinho"
    section.appendChild(divTotal)
    total.innerText = "Total"
    divTotal.appendChild(total)
    totalValor.innerText = 0
    divTotal.appendChild(totalValor)
    buttonEnd.classList = "buy-btn"
    buttonEnd.innerText = "Finalizar compra"
    section.appendChild(buttonEnd)

}createPage()

function createCard(lista){
    for(let i = 0; i<lista.length; i++){
        let produtos = lista[i]
        let cardProdutos = criarCard(produtos)
        productList.appendChild(cardProdutos)
        soma(produtos.price)
    }
}createCard(products);

function criarCard(produtos){
    
    let productDetails = document.createElement("li")
    let h2 = document.createElement("h2")
    let span = document.createElement("span")
    

    let nome = produtos.name
    let preco = produtos.price

    productDetails.classList = "card"
    h2.classList = "title"
    h2.innerText = nome
    span.classList = "price"
    span.innerText = `R$${preco}`

    productDetails.appendChild(h2)
    productDetails.appendChild(span)

    return productDetails
}

function soma(preco){
    totalCarrinho += preco
    let precoFormatado = `R$${totalCarrinho}`
    totalValor.innerHTML = ""
    totalValor.append(precoFormatado)
    console.log(totalCarrinho)
}