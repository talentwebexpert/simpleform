const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('emailaddress');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password1');
const password2 = document.getElementById('password2');
const good = document.getElementsByClassName('good');

// Show input error message
function showError(input, message) {
  const inputBox = input.parentElement;
  inputBox.className = 'input-box error';
  const small = inputBox.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const inputBox = input.parentElement;
  inputBox.className = 'input-box success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([firstname, lastname, email, password, password2]);
  checkLength(firstname, 3, 15);
  checkLength(phonenumber, 11, 11);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  if(firstname.parentElement.classList.contains('success')){
    if(lastname.parentElement.classList.contains('success')){
        if(email.parentElement.classList.contains('success')){
            if(phonenumber.parentElement.classList.contains('success')){
                if(password.parentElement.classList.contains('success')){
                    if(password2.parentElement.classList.contains('success')){
                        alert("Successful Submission")
                    }
                }
            }
        }
    }
  }
});
