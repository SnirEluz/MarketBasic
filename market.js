const items = [
    { name: "Bread", price: 3, pieces: 5, },
    { name: "Water", price: 5, pieces: 3, },
    { name: "Milk", price: 4, pieces: 8, },
    { name: "Sprite", price: 9, pieces: 10, },
    { name: "Onion", price: 2, pieces: 4, },
    { name: "Bread", price: 3, pieces: 5, },
    { name: "Water", price: 5, pieces: 3, },
    { name: "Milk", price: 4, pieces: 8, },
    { name: "Sprite", price: 9, pieces: 10, },
    { name: "Onion", price: 2, pieces: 4, },
    { name: "Bread", price: 3, pieces: 5, },
    { name: "Water", price: 5, pieces: 3, },
    { name: "Milk", price: 4, pieces: 8, },
    { name: "Sprite", price: 9, pieces: 10, },
    { name: "Potato", price: 2, pieces: 4, },
]
//main
const main = document.createElement("div")
//main class name
main.className = "main"
// right
const right = document.createElement("div")
const rightHeader = document.createElement("div")
const rightHeaderH = document.createElement("p")
const rightItems = document.createElement("div")
const rightFooter = document.createElement("div")
const rightFooterPrice = document.createElement("h2")
const rightFooterTotal = document.createElement("h1")
let lastprice = 0
// right class name
right.className = "right"
rightHeader.className = "rightHeader"
rightHeaderH.className = "rightHeaderH"
rightItems.className = "rightItems"
rightFooter.className = "rightFooter"
rightFooterTotal.className = "rightFooterTotal"
//right textcontent
rightFooterTotal.textContent = 0 + "$"
rightFooterPrice.textContent = "Total"
rightHeaderH.textContent = "My Shopping List"
//left
const left = document.createElement("div")
// left class name
left.className = "left"
// addItem
const addItem = document.createElement("div")
// addItem class name
addItem.className = "addItem"
addItem.textContent = "Add Item"
// apendChild
document.body.appendChild(main)
main.appendChild(left)
main.appendChild(right)
left.appendChild(addItem)
right.appendChild(rightHeader)
rightHeader.appendChild(rightHeaderH)
right.appendChild(rightItems)
right.appendChild(rightFooter)
rightFooter.appendChild(rightFooterPrice)
rightFooter.appendChild(rightFooterTotal)
//new item
addItem.addEventListener("click", function () {
    const itemDivMain = document.createElement("div")
    itemDivMain.className = "itemDivMain"
    // exit
    const itemDivMainExit = document.createElement("h1")
    itemDivMainExit.className = "itemDivMainExit"
    itemDivMainExit.textContent = "x"
    itemDivMainExit.addEventListener("click", function () {
        itemDivMainExit.parentElement.remove()
    })
    //opiton main
    const itemDivMainOptions = document.createElement("div")
    itemDivMainOptions.className = "itemDivMainOptions"
    // name
    const inputNameH = document.createElement("p")
    inputNameH.textContent = "Name"
    const inputName = document.createElement("input")
    inputName.className = "inputName"
    // price
    const inputNameP = document.createElement("p")
    inputNameP.textContent = "Price"
    const inputPrice = document.createElement("input")
    inputPrice.className = "inputPrice"
    inputPrice.setAttribute("type", "number");
    inputPrice.setAttribute("min", 0);
    // stock
    const inputNameS = document.createElement("p")
    inputNameS.textContent = "Stock"
    const inputStock = document.createElement("input")
    inputStock.className = "inputStock"
    inputStock.setAttribute("type", "number");
    inputStock.setAttribute("min", 0);
    // button
    const itemDivMainAdd = document.createElement("button")
    itemDivMainAdd.className = "itemDivMainAdd"
    itemDivMainAdd.textContent = "Add Item To Market"
    // main appendChild
    document.body.appendChild(main)
    main.appendChild(itemDivMain)
    // top
    itemDivMain.appendChild(itemDivMainExit)
    // middle
    itemDivMain.appendChild(itemDivMainOptions)
    itemDivMainOptions.appendChild(inputNameH)
    itemDivMainOptions.appendChild(inputName)
    itemDivMainOptions.appendChild(inputNameP)
    itemDivMainOptions.appendChild(inputPrice)
    itemDivMainOptions.appendChild(inputNameS)
    itemDivMainOptions.appendChild(inputStock)
    // bottom
    itemDivMain.appendChild(itemDivMainAdd)
    itemDivMainAdd.addEventListener("click", function () {
        if (inputPrice.valueAsNumber && inputName.value && inputStock.valueAsNumber) {
            const itemDiv = document.createElement("div")
            const itemName = document.createElement("h1")
            const itemPrice = document.createElement("h2")
            const addCartandinp = document.createElement("div")
            const addCart = document.createElement("button")
            const inp = document.createElement("input")
            inp.setAttribute("type", "number");
            const stock = document.createElement("p")
            let Ava = "Available In Stock "
            // mainItem
            left.appendChild(itemDiv)
            itemDiv.appendChild(itemName)
            itemDiv.appendChild(itemPrice)
            itemDiv.appendChild(addCartandinp)
            addCartandinp.appendChild(addCart)
            addCartandinp.appendChild(inp)
            itemDiv.appendChild(stock)
            //classs
            itemDiv.className = "itemDiv"
            addCart.className = "addCart"
            inp.className = "inpnumber"
            addCartandinp.className = "addCartandinp"
            //TextContent
            itemName.textContent = inputName.value
            itemPrice.textContent = inputPrice.valueAsNumber + "$"
            addCart.textContent = "Add To Cart"
            stock.textContent = Ava + inputStock.valueAsNumber
            if (inputPrice.valueAsNumber && inputName.value && inputStock.valueAsNumber) {
                itemDivMainExit.parentElement.remove()
            }
            addCart.addEventListener("click", function () {
                if (inp.valueAsNumber <= inputStock.valueAsNumber) {
                    if (inp.valueAsNumber > 0) {
                        const cartitemDiv = document.createElement("div")
                        const cartitemName = document.createElement("h1")
                        const cartitemPrice = document.createElement("h2")
                        const rightFooterAmount = document.createElement("h3")
                        const cartrRemoveCart = document.createElement("button")
                        // CartmainItem
                        rightItems.appendChild(cartitemDiv)
                        cartitemDiv.appendChild(cartitemName)
                        cartitemDiv.appendChild(cartitemPrice)
                        cartitemDiv.appendChild(rightFooterAmount)
                        cartitemDiv.appendChild(cartrRemoveCart)
                        //classNmae
                        cartitemDiv.className = "cartitemDiv"
                        cartrRemoveCart.className = "cartrRemoveCart"
                        for (num = 0; num < inp.valueAsNumber; num++) {
                            //TextContent
                            cartitemName.textContent = inputName.value
                            cartitemPrice.textContent = inputPrice.valueAsNumber * inp.valueAsNumber + "$"
                            cartrRemoveCart.textContent = "Remove"
                            rightFooterAmount.textContent = inp.valueAsNumber + " Quantity"
                            //price.
                            if (lastprice == 0) {
                                rightFooterTotal.textContent = cartitemPrice.textContent
                                lastprice = inputPrice.valueAsNumber
                                console.log(lastprice)
                            } else if (lastprice != 0) {
                                rightFooterTotal.textContent = inputPrice.valueAsNumber + lastprice + "$"
                                lastprice = inputPrice.valueAsNumber + lastprice
                                console.log(lastprice)
                            }
                            //removeFromCar
                            cartrRemoveCart.addEventListener('click', function (e, d) {
                                e.target.parentElement.remove()
                                if (lastprice != 0) {
                                    rightFooterTotal.textContent = lastprice - inputPrice.valueAsNumber + "$"
                                    lastprice = lastprice - inputPrice.valueAsNumber
                                    // console.log(lastprice)
                                    inputStock.valueAsNumber = inputStock.valueAsNumber + 1
                                    stock.textContent = Ava + inputStock.valueAsNumber
                                }
                            })
                        }
                    }
                    inputStock.valueAsNumber = inputStock.valueAsNumber - inp.valueAsNumber
                    stock.textContent = Ava + inputStock.valueAsNumber
                } else {
                    console.log("out of stock")
                    stock.textContent = "Left " + inputStock.valueAsNumber + " in stock"
                }
            })
        }
    })
})
//item
for (let i = 0; i < items.length; i++) {
    const itemDiv = document.createElement("div")
    const itemName = document.createElement("h1")
    const itemPrice = document.createElement("p")
    const addCartandinp = document.createElement("div")
    const addCart = document.createElement("button")
    const updatePrice = document.createElement("img")
    const inp = document.createElement("input")
    inp.setAttribute("type", "number");
    inp.setAttribute("min", 0);
    inp.setAttribute("max", items[i].pieces);
    const stock = document.createElement("p")
    let Ava = "Available In Stock "
    // mainItem
    left.appendChild(itemDiv)
    itemDiv.appendChild(itemName)
    itemDiv.appendChild(itemPrice)
    itemDiv.appendChild(addCartandinp)
    addCartandinp.appendChild(addCart)
    addCartandinp.appendChild(inp)
    addCartandinp.appendChild(updatePrice)
    itemDiv.appendChild(stock)
    //classs
    itemDiv.className = "itemDiv"
    addCart.className = "addCart"
    inp.className = "inpnumber"
    addCartandinp.className = "addCartandinp"
    stock.className = "stock"
    updatePrice.className = "updatePrice"
    //TextContent
    itemName.textContent = items[i].name
    itemPrice.textContent = items[i].price + "$"
    addCart.textContent = "Add To Cart"
    inp.textContent = "Add To Cart"
    stock.textContent = Ava + items[i].pieces
    //img
    updatePrice.src = "https://cdn-icons-png.flaticon.com/512/2089/2089793.png"
    updatePrice.addEventListener("click", function () {
        console.log("ff")
        const itemDivMain = document.createElement("div")
        itemDivMain.className = "itemDivMain"
        // exit
        const itemDivMainExit = document.createElement("h1")
        itemDivMainExit.className = "itemDivMainExit"
        itemDivMainExit.textContent = "x"
        itemDivMainExit.addEventListener("click", function () {
            itemDivMainExit.parentElement.remove()
        })
        //opiton main
        const itemDivMainOptions = document.createElement("div")
        itemDivMainOptions.className = "itemDivMainOptions"
        // price
        const inputNameP = document.createElement("p")
        inputNameP.textContent = "New Price"
        const inputPrice = document.createElement("input")
        inputPrice.className = "inputPrice"
        inputPrice.setAttribute("type", "number");
        inputPrice.setAttribute("min", 0);
        // stock
        const inputNameS = document.createElement("p")
        inputNameS.textContent = "Stock"
        const inputStock = document.createElement("input")
        inputStock.className = "inputStock"
        inputStock.setAttribute("type", "number");
        inputStock.setAttribute("min", 0);
        // button
        const itemUpdatePrice = document.createElement("button")
        itemUpdatePrice.className = "itemDivMainAdd"
        itemUpdatePrice.textContent = "Update Price"
        // main appendChild
        document.body.appendChild(main)
        main.appendChild(itemDivMain)
        // top
        itemDivMain.appendChild(itemDivMainExit)
        // middle
        itemDivMain.appendChild(itemDivMainOptions)
        itemDivMainOptions.appendChild(inputNameS)
        itemDivMainOptions.appendChild(inputStock)
        itemDivMainOptions.appendChild(inputNameP)
        itemDivMainOptions.appendChild(inputPrice)
        // bottom
        itemDivMain.appendChild(itemUpdatePrice)
        itemUpdatePrice.addEventListener("click", function () {
            if (inputPrice.valueAsNumber && !inputStock.valueAsNumber) {
                itemPrice.textContent = inputPrice.valueAsNumber + "$"
                items[i].price = inputPrice.valueAsNumber
                if (inputPrice.valueAsNumber) {
                    itemDivMainExit.parentElement.remove()
                }
            } else if (!inputPrice.valueAsNumber && inputStock.valueAsNumber) {
                stock.textContent = Ava + inputStock.valueAsNumber
                items[i].pieces = inputStock.valueAsNumber
                if (inputStock.valueAsNumber) {
                    itemDivMainExit.parentElement.remove()
                }
            } else if (inputPrice.valueAsNumber && inputStock.valueAsNumber) {
                itemPrice.textContent = inputPrice.valueAsNumber + "$"
                items[i].price = inputPrice.valueAsNumber
                stock.textContent = Ava + inputStock.valueAsNumber
                items[i].pieces = inputStock.valueAsNumber
                if (inputStock.valueAsNumber && inputPrice.valueAsNumber) {
                    itemDivMainExit.parentElement.remove()
                }
            }
        })
    })
    addCart.addEventListener("click", function () {
        if (inp.valueAsNumber <= items[i].pieces) {
            if (inp.valueAsNumber > 0) {
                // let num = inp.valueAsNumber
                const cartitemDiv = document.createElement("div")
                const cartitemName = document.createElement("h2")
                const cartitemPrice = document.createElement("h3")
                const rightFooterAmount = document.createElement("p")
                const cartrRemoveCart = document.createElement("button")
                // CartmainItem
                rightItems.appendChild(cartitemDiv)
                cartitemDiv.appendChild(cartitemName)
                cartitemDiv.appendChild(cartitemPrice)
                cartitemDiv.appendChild(rightFooterAmount)
                cartitemDiv.appendChild(cartrRemoveCart)
                //classNmae
                cartitemDiv.className = "cartitemDiv"
                cartrRemoveCart.className = "cartrRemoveCart"
                for (num = 0; num < inp.valueAsNumber; num++) {
                    //TextContent
                    cartitemName.textContent = items[i].name
                    cartitemPrice.textContent = items[i].price * inp.valueAsNumber + "$"
                    cartrRemoveCart.textContent = "Remove"
                    rightFooterAmount.textContent = inp.valueAsNumber + " Quantity"
                    //price.
                    if (lastprice == 0) {
                        rightFooterTotal.textContent = cartitemPrice.textContent
                        lastprice = items[i].price
                        // console.log(lastprice)
                    } else if (lastprice != 0) {
                        rightFooterTotal.textContent = items[i].price + lastprice + "$"
                        lastprice = items[i].price + lastprice
                        // console.log(lastprice)
                    }
                    //removeFromCar
                    cartrRemoveCart.addEventListener('click', function (e, d) {
                        e.target.parentElement.remove()
                        if (lastprice != 0) {
                            rightFooterTotal.textContent = lastprice - items[i].price + "$"
                            lastprice = lastprice - items[i].price
                            // console.log(lastprice)
                            items[i].pieces = items[i].pieces + 1
                            stock.textContent = Ava + items[i].pieces
                        }
                    })
                }
            }
            items[i].pieces = items[i].pieces - inp.valueAsNumber
            stock.textContent = Ava + items[i].pieces
        } else {
            console.log("out of stock")
            stock.textContent = "Left " + items[i].pieces + " in stock"
        }
    })
}
