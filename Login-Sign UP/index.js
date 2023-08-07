

function setFormMessage(formElement, type, message){
const messageElement = formElement.querySelector(".form-message");

messageElement.textContent = message;
messageElement.classList.remove("form-message-success", "form-message-error");
messageElement.classList.add(`form-message-${type}`);
}


function setInput(inputElement, message) {
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector("form-input-error-message").textContent = message;
}


document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccount = document.querySelector("#CreateAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
   e.preventDefault();
  loginForm.classList.add("form-hidden");
  createAccount.classList.remove("form-hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e =>{
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    createAccount.classList.add("form-hidden");
    });
    
    loginForm.addEventListener("submit", e => {
      e.preventDefault();


      //perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
   inputElement.addEventListener("blur", e => {
    if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
      setInputError(inputElement, "Username must be at least 10 character");
    }
       })
    });
    
});