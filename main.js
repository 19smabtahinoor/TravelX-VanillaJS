const marsConst = 5000
const moonCost = 3000

function handleClick(planet,operator){
    //get the input
    const quantityInput  = document.getElementById(planet + '-tickets').value
    //convert to number
    let quantity = parseInt(quantityInput)

    operator == 'plus' ? quantity += 1 : ((quantity > 0) ? quantity -= 1 : null)
    //update the value 
    document.getElementById(planet + '-tickets').value = quantity

    calculateTicketsCost(planet, quantity)
}

let marsTotal = 0;
let moonTotal = 0

//calculate the cost for tickets
function calculateTicketsCost(planet, quantity){
    if (planet == 'mars') {
        marsTotal = quantity * marsConst
        updateUI(planet,marsTotal)
    }else{
        moonTotal = quantity * moonCost
        updateUI(planet, moonTotal)
    }
    updateTotalCost(marsTotal, moonTotal )
}

//update total cost ui 
function updateUI(planet,total){
    const journeyCostInput = document.getElementById(planet + '-total')
    journeyCostInput.innerText =  total
}

//updateTotal cost 
function updateTotalCost(marsTotal, moonTotal){
    const totalJourneyCost = document.getElementById('total')
    const total = marsTotal + moonTotal
    totalJourneyCost.innerText = total
}