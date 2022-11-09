let countEl = document.getElementById("count-el")
let count2El = document.getElementById("count2-el")
let homeZeroEl = document.getElementById("homeZero-el")
let guestZeroEl = document.getElementById("guestZero-el")

homeCount = 0
guestCount = 0

function homeOne() {
    let homeIncrement1 = homeCount += 1
    countEl.textContent = homeIncrement1
}

function homeTwo() {
    let homeIncrement2 = homeCount += 2
    countEl.textContent = homeIncrement2
}

function homeThree() {
    let homeIncrement3 = homeCount += 3
    countEl.textContent = homeIncrement3
}

function guestOne() {
    let guestIncrement1 = guestCount += 1
    count2El.textContent = guestIncrement1
}

function guestTwo() {
    let guestIncrement2 = guestCount += 2
    count2El.textContent = guestIncrement2
}

function guestThree() {
    let guestIncrement3 = guestCount += 3
    count2El.textContent = guestIncrement3
}

function zeroLeft() {
    let left = homeCount = 0
    countEl.textContent = left
}

function zeroRight() {
    let right = guestCount = 0
    count2El.textContent = right
}