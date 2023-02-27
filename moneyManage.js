const balanceValue = document.querySelector('.balance-value')
const withdrawValue = document.querySelector('#withdraw')
const withdrawButton = document.querySelector('.withdraw-button')
const depositValue = document.querySelector('#deposit')
const depositButton = document.querySelector('.deposit-button')
let bankBalance = balanceValue.innerText

withdrawButton.addEventListener('click', function(e){
    e.preventDefault()

    if(Number(bankBalance)>=Number(withdrawValue.value)){
        balanceValue.innerText = Number(bankBalance) - Number(withdrawValue.value)
    bankBalance = balanceValue.innerText
    withdrawValue.value = ""
    }
    else{
        alert("Can't withdraw more than balance!")
    }
})
depositButton.addEventListener('click', function(e){
    e.preventDefault()

    balanceValue.innerText = Number(depositValue.value) + Number(bankBalance)
    bankBalance = balanceValue.innerText
    depositValue.value = ""
})
