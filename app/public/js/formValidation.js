function validateForm () {
  // var username = document.forms["login"]["username"].value
  //   , password = document.forms["login"]["password"].value;
  //
  // if (!password && !username) {
  //   document.getElementById("login-error").innerHTML = "A username and password are required";
  //   return false;
  // }
  //
  // if (!username) {
  //   document.getElementById("login-error").innerHTML = "Username is required!";
  //   return false;
  // }
  //
  // if (!password) {
  //   document.getElementById("login-error").innerHTML = "A password is required!";
  //   return false;
  // }
  //
  // return true;

    $.post('http://localhost:3000/signin', {
        username: 'bart',
        password: '12345'
      },
      function(returnedData) {
        console.log(returnedData);
        return false
      })

    console.log('nee')


}

var isEmpty = function (value) {
  return (value) ? false : true;
}

var isRealName = function (value) {
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return regex.test(value);
}
var isEmail = function (value) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
}
function checkForEnterEvent(e) {
  if (e.keyCode == 13) {
    loginUser()
  }
}
function register(main, second) {
  var mainLink = main + 'Link';
  var secondLink = second + 'Link';
  document.getElementById(second).style.display = 'none'
  document.getElementById(main).style.display = 'block'
  document.getElementById(mainLink).style.display = 'none'
  document.getElementById(secondLink).style.display = 'block'
}

function checkName (id) {
  var value = document.getElementById(id).value;
  var icon = document.getElementById(id).previousElementSibling;
  if (!isEmpty(value) && isRealName(value)) {
    document.getElementById(id).style.borderColor = '#3a9679';
    icon.style.color = '#3a9679'
  } else {
    document.getElementById(id).style.borderColor = '#e16262';
    icon.style.color = '#e16262';
  }
}

function checkMail (id) {
  var value = document.getElementById(id).value;
  var icon = document.getElementById(id).previousElementSibling;
  if (!isEmpty(value) && isEmail(value)) {
    document.getElementById(id).style.borderColor = '#3a9679';
    icon.style.color = '#3a9679'
  } else {
    document.getElementById(id).style.borderColor = '#e16262';
    icon.style.color = '#e16262';
  }
}
function loginUser() {
  var username = $('#username').val();
  var password = $('#password').val();

  $.post('http://localhost:3000/signin', {
      username: username,
      password: password
    },
    function(returnedData) {
      console.log(returnedData.msg)
      debugger;
      if (returnedData.msg != true) {
        console.log(returnedData.msg)
        $('#message').html(returnedData.msg);
      } else {
        window.location.href = "/register";
      }
    })
}

function registerUser () {
  var firstName = $("#register-form input[name='firstName']").val();
  var lastName = $("#register-form input[name='lastName']").val();
  var email = $("#register-form input[name='email']").val();
  var username = $("#register-form input[name='username']").val();
  var password = $("#register-form input[name='password']").val();
  console.log(firstName)
  $.post('http://localhost:3000/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    },
    function(returnedData) {
      console.log(returnedData.msg)
      if (returnedData.msg != false) {
        $('#messageRegister').html(returnedData.msg);
      } else {
        window.location.href = "/register";
      }
      // debugger;
      // if (returnedData.msg != true) {
      //   console.log(returnedData.msg)
      //   $('#message').html(returnedData.msg);
      // } else {
      //   window.location.href = "/register";
      // }
    })
}
