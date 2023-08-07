const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', (e) => {

  const firstName = document.querySelector('#Name')

  const middleName = document.querySelector('#middleName')

  const lastName = document.querySelector('#lastName')

  const yourAge = document.querySelector('#age')

document.querySelector('#FirstName').innerHTML = `First name: ${firstName.value}`;

document.querySelector('#MiddleName').innerHTML = `Middle name: ${middleName.value}`;

document.querySelector('#LastName').innerHTML = `Last name: ${lastName.value}`;

document.querySelector('#Yourage').innerHTML = `Age: ${yourAge.value} years Old`;
})