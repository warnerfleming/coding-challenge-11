//Task 2
const productSelector = document.getElementById("product-selector")
const quantityElement = document.getElementById("quantity")

productSelector.addEventListener("change", (event)=>{
const selectPrice = event.target.value;
quantityElement.textContent = `$${selectPrice}`

}
)
