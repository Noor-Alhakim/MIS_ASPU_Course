mydata = [
  {
    username: "MHD",
    password: "12345678",
    email: "mhd@mhd.com",
    name: "Mohamad deeb hegazy",
    bdate: "2-6-2000",
  },
  {
    username: "Ahmad",
    password: "12345678",
    email: "Ahmad@Ahmad.com",
    name: "Ahmad Test",
    bdate: "30-4-2002",
  },
];

// ShowPass
function show_password() {
  const inp = document.getElementById("password");
  const eye = document.getElementById("eye");
  if (inp.type == "password") {
    inp.type = "text";
    eye.innerHTML =
      '<path fill="#adadad" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" />';
  } else {
    inp.type = "password";
    eye.innerHTML =
      '<path fill="#adadad" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />';
  }
}

function show_confirm_password() {
  const inp = document.getElementById("password2");
  const eye = document.getElementById("eye2");
  if (inp.type == "password") {
    inp.type = "text";
    eye.innerHTML =
      '<path fill="#adadad" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" />';
  } else {
    inp.type = "password";
    eye.innerHTML =
      '<path fill="#adadad" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />';
  }
}

// validation username
function username_validation() {
  const inp = document.getElementById("username");
  if (inp.value === "") {
    alert("يجب عليك ادخال اسم المستخدم");
    return true;
  }
  return false;
}

// password validation
function password_validation() {
  const inp = document.getElementById("password");
  if (inp.value === "") {
    alert("يجب عليك ادخال كلمة المرور");
    return true;
  }
  return false;
}

// checkpassword validation
function password2_validation() {
  const inp = document.getElementById("password2");
  if (inp.value === "") {
    alert("يجب عليك ادخال تأكيد كلمة المرور");
    return true;
  }
  return false;
}

// validation name
function name_validation() {
  const inp = document.getElementById("name");
  if (inp.value === "") {
    alert("يجب عليك ادخال الاسم");
    return true;
  }
  return false;
}

// validation bdate
function bdate_validation() {
  const inp = document.getElementById("bdate");
  if (inp.value === "") {
    alert("يجب عليك ادخال تاريخ الميلاد");
    return true;
  }
  return false;
}

// validation email
function email_validation() {
  const inp = document.getElementById("email");
  if (inp.value === "") {
    alert("يجب عليك ادخال الايميل");
    return true;
  }
  var val = inp.value;
  val = val.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (val < 0) {
    alert("هذا ليس إيميل");
    return true;
  }
  return false;
}

// userfound for login
function iscorrect() {
  const inp_username = document.getElementById("username");
  const inp_pass = document.getElementById("password");
  for (var i = 0; i < mydata.length; i++) {
    if (
      mydata[i].username == inp_username.value &&
      mydata[i].password == inp_pass.value
    ) {
      alert("أهلا بعودتك " + mydata[i].name + "!");
      return;
    }
  }
  alert("اسم المستخدم أو كلمة المرور خاطئة");
}

// Login
function Login() {
  if (username_validation()) {
    return false;
  } else if (password_validation()) {
    return false;
  }
  iscorrect();
}

// userfound for register
function iscorrect_register() {
  const inp_username = document.getElementById("username");
  const inp_email = document.getElementById("email");
  for (var i = 0; i < mydata.length; i++) {
    if (
      mydata[i].username == inp_username.value ||
      mydata[i].email == inp_email.value
    ) {
      alert("عذراً لكن اسم المستخدم او الايميل قيد الاستعمال");
      return false;
    }
  }
  return true;
}

// password match
function iscorrect_pass() {
  const inp = document.getElementById("password");
  const inp2 = document.getElementById("password2");
  var val = inp.value;
  var val2 = inp2.value;
  if (val.length < 8 || val2.length < 8) {
    alert("يجب أن تكون كلمة المرور أكبر من 8 محارف");
    return true;
  }
  if (val != val2) {
    alert("يجب أن تكون كلمات المرور متطابقة");
    return true;
  }
  return false;
}

// register
function register() {
  if (name_validation()) {
    return;
  } else if (bdate_validation()) {
    return;
  } else if (email_validation()) {
    return;
  } else if (username_validation()) {
    return;
  } else if (password_validation()) {
    return;
  } else if (password2_validation()) {
    return;
  } else if (iscorrect_pass()) {
    return;
  } else if (iscorrect_register()) {
    alert("تم تسجيلك بنجاح");
    const myname = document.getElementById("name");
    const myemail = document.getElementById("email");
    const mypass = document.getElementById("password");
    const mybdate = document.getElementById("bdate");
    const myusername = document.getElementById("username");
    const ob = {
      name: myname.value,
      email: myemail.value,
      password: mypass.value,
      bdate: mybdate.value,
      username: myusername.value,
    };
    mydata.push(ob);
    localStorage.setItem("mydata", JSON.stringify(mydata));
    location.assign("index.html");
  }
}

function restore_data() {
  if (window.localStorage.getItem("mydata") === null) {
    return;
  }
  mydata = JSON.parse(window.localStorage.getItem("mydata"));
}
