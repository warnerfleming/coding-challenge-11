//Task 2
const productSelector = document.getElementById("product-selector")
const quantityElement = document.getElementById("quantity")

productSelector.addEventListener("change", (event)=>{
const selectPrice = event.target.value;
quantityElement.textContent = `$${selectPrice}`

}
)

//Task 3
const quantityinput = document.getElementById(`quantity`)
const orderButton = document.getElementById(`place-order`)
const totalPrice = document.getElementById(`total-price `)

function updatePrice(){
    const price = parseFloat(productSelector.value)
    const quan = parseInt(quantityinput.value)
    const thetotalPrice = price * quan

    totalPrice.textContent = price.toFixed(2)
}


//Task 4
orderButton.addEventListener(`click`, function(){
const quantity = quantityinput.value;
const priceTotal = totalPrice.textContent;

})