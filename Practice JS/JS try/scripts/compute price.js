const submitButton = document.querySelector('#submit')
const inputPrice = document.querySelectorAll('.price')
const totalAmount = document.querySelector('#total')

  submitButton.addEventListener('click', () => {
  let sum = 0

  for(let i = 0;  i < inputPrice.length; i++){
    sum += Number(inputPrice[i].value)
  }     
    totalAmount.value = sum
})