// First, tell us your name
let yourName = "Phuong Tong" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// Variable to calculate all counts of three types of cookies
let allCount = gb + cc + sugar

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Addressing the elements of Gingerbread
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// Addressing the elements of Chocolate Chip
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// Addressing the elements of Sugar Sprinkle
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Addressing the element of Total
const totalItem = document.querySelector('#qty-total')

// Function to display Gingerbread info 
function updateGbQuantity(displayGB) {
    let gbQuantity = document.querySelector('#qty-gb')
    gbQuantity.textContent = displayGB
    totalItem.textContent = allCount
}

// Function to display Chocolate Chip info
function updateCcQuantity(displayCC) {
    let ccQuantity = document.querySelector('#qty-cc')
    ccQuantity.textContent = displayCC
    totalItem.textContent = allCount
}

// Function to display Sugar Sprinkle info
function updateSugarQuantity(displaySugar) {
    let sugarQuantity = document.querySelector('#qty-sugar')
    sugarQuantity.textContent = displaySugar
    totalItem.textContent = allCount
}

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function () {
    gb++
    allCount++
    updateGbQuantity(`${gb}`)
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function () {
    // Making sure Gingerbread quantity is not less than zero
    if (gb > 0) {
        gb--
        allCount--
    }
    updateGbQuantity(`${gb}`)
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function () {
    cc++
    allCount++
    updateCcQuantity(`${cc}`)
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function () {
    // Making sure Chocolate Chip quantity is not less than zero
    if (cc > 0) {
        cc--
        allCount--
    }
    updateCcQuantity(`${cc}`)
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
sugarPlusBtn.addEventListener('click', function () {
    sugar++
    allCount++
    updateSugarQuantity(`${sugar}`)
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
sugarMinusBtn.addEventListener('click', function () {
    // Making sure Sugar Sprinkle quantity is not less than zero
    if (sugar > 0) {
        sugar--
        allCount--
    }
    updateSugarQuantity(`${sugar}`)
})