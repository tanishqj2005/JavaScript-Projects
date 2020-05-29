console.log("This is project 4");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const travelForm = document.getElementById('travelForm');
let validEmail = false;
let validUser = false;
let validPhone = false;
// console.log(name,email,phone);

name.addEventListener("blur", () => {
  // console.log('Name is blurred');
  //validate username here:
  let regex = /^[a-zA-z]([0-9a-zA-z]){2,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    name.classList.remove("is-invalid");
    validUser = true;
    console.log("name is valid");
  } else {
    name.classList.add("is-invalid");
    console.log("name is invalid");
  }
});

email.addEventListener("blur", () => {
  // console.log('Email is blurred');
  //validate email here:
  let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    validEmail = true;
    console.log("email is valid");
  } else {
    email.classList.add("is-invalid");
    console.log("email is invalid");
  }
});

phone.addEventListener("blur", () => {
  // console.log('Phone is blurred');
  //validate phone here:
  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    phone.classList.remove("is-invalid");
    console.log("phone is valid");
    validPhone = true;
  } else {
    phone.classList.add("is-invalid");
    console.log("phone is invalid");
  }
});

submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  console.log("You clicked on submit");
  //submit your form here:
  if (validEmail && validPhone && validUser) {
    let success = document.getElementById("success");
    success.style.display = 'block';
    success.classList.add("show");
    travelForm.reset();
  }
  else{
      console.log('one of phone email or user are invalid');
      let failure = document.getElementById("failure");
      failure.style.display = 'block';
      failure.classList.add("show");
  }
  e.preventDefault();
});
