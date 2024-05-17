const checkZip = () => {
  const constraints = {
    ca: [
      "^[ABCEGHJ-NPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ -]?\\d[ABCEGHJ-NPRSTV-Z]\\d$",
      "Canada ZIP code must be in the form of X1X1X1 or X1X 1X1 or X1X-1X1",
    ],
    us: [
      "^\\d{5}(?:[-\\s]\\d{4})?$",
      "US ZIP code must be in the form of 5 digits such as 00000 or 00000-0000",
    ],
    gb: [
      "^[A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}$",
      "Great Britain ZIP code must be in the form of A1 1AA, A1A 1AA, or similar",
    ],
    jp: [
      "^\\d{3}[- ]?\\d{4}$",
      "Japan ZIP code must be in the form of 000-0000 or 000 0000",
    ],
  };

  const country = document.getElementById("country").value;
  const zipCode = document.getElementById("zip");

  const constraint = new RegExp(constraints[country][0], "i");

  if (constraint.test(zipCode.value)) {
    zipCode.setCustomValidity("");
  } else {
    zipCode.setCustomValidity(constraints[country][1]);
  }
};

const checkEmail = () => {
  const email = document.getElementById("email");
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Invalid email address");
  } else if (email.validity.valueMissing) {
    email.setCustomValidity("Enter an email address");
  } else {
    email.setCustomValidity("");
  }
};

const checkPassword = () => {
  const password = document.getElementById("password");
  const constraint = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",
  );

  if (constraint.test(password.value)) {
    password.setCustomValidity("");
  } else {
    password.setCustomValidity(
      "Please enter a password with minimum 8 characters, an upper case character and a special character",
    );
  }
};

const checkConfirmedPassword = () => {
  const password = document.getElementById("password");
  const confirmedPassword = document.getElementById("confirm-password");
  if (confirmedPassword.value === password.value) {
    confirmedPassword.setCustomValidity("");
  } else {
    confirmedPassword.setCustomValidity("Passwords do not match");
  }
};

window.onload = () => {
  document.getElementById("country").onchange = checkZip;
  document.getElementById("zip").oninput = checkZip;
  document.getElementById("email").oninput = checkEmail;
  document.getElementById("password").oninput = checkPassword;
  document.getElementById("confirm-password").onchange = checkConfirmedPassword;
};
