document.getElementById('cash-out-btn').addEventListener('click', function (event) {
  event.preventDefault()

  const amountInput = document.getElementById('cash-out-amount-input').value;
  const pinInput = document.getElementById('cash-out-pin-input').value;

  if (pinInput === '1234') {

    const mainBalance = document.getElementById('main-balance').innerText

    const amount = parseFloat(amountInput)
    const balance = parseFloat(mainBalance)

    const afterAddMoney = balance - amount

    document.getElementById('main-balance').innerText = afterAddMoney

    document.getElementById('cash-out-amount-input').value = '';
    document.getElementById('cash-out-pin-input').value = '';

    // toogle 

  }
  else {
    alert('Please input a valid information')
  }


})


document.getElementById('cash-out-main-btn').addEventListener('click', function () {

  const cashOutForm = document.getElementById('cash-out-form')
  cashOutForm.classList.remove('hidden')

  const addMoneyForm = document.getElementById('add-money-form')
  addMoneyForm.classList.add('hidden')

  const cashOutBtn = document.getElementById('cash-out-main-btn')
  cashOutBtn.classList.remove('btn-outline')

 document.getElementById('add-money-main-btn').classList.add('btn-outline')


})