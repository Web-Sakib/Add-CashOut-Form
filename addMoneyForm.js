document.getElementById('add-money-btn').addEventListener('click', function (event) {
  event.preventDefault()

  const amountInput = document.getElementById('amount-input').value;
  const pinInput = document.getElementById('pin-input').value;

  if (pinInput === '1234') {

    const mainBalance = document.getElementById('main-balance').innerText

    const amount = parseFloat(amountInput)
    const balance = parseFloat(mainBalance)

    const afterAddMoney = amount + balance

    document.getElementById('main-balance').innerText = afterAddMoney

    document.getElementById('amount-input').value = '';
    document.getElementById('pin-input').value = '';

    // toggle 

  }
  else {
    alert('Please input a valid information')
  }
})


document.getElementById('add-money-main-btn').addEventListener('click', function(){


  const cashOutForm = document.getElementById('cash-out-form')
  cashOutForm.classList.add('hidden')

  const addMoneyForm = document.getElementById('add-money-form')
  addMoneyForm.classList.remove('hidden')


  const cashOutBtn = document.getElementById('cash-out-main-btn')
  cashOutBtn.classList.add('btn-outline')

 document.getElementById('add-money-main-btn').classList.remove('btn-outline')





})