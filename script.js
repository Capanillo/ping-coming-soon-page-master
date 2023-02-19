const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const mail = document.querySelector(".input");
const btn = document.querySelector(".btn");
const msgError = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  let result = regEx.test(mail.value);
  if (mail.value == "" || result == false) {
    e.preventDefault();
    msgError.classList.add("visible");
    mail.classList.add("visible");
    console.log("errore");
  }
});
