// Check if value is empty
var isEmpty = function (value) {
  return (value) ? false : true;
}

// Check if value is e real name
var isRealName = function (value) {
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return regex.test(value);
}

// Check if value is a E-mail
var isEmail = function (value) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
}

// Check password : Minimum eight characters, at least one letter and one number
var checkPassword = function (value) {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(value);
}

// Check password : Minimum eight characters, at least one letter, one number and one special character
var checkPassword2 = function (value) {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(value);
}

// Check password : Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
var checkPassword3 = function (value) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(value);
}

// Check password : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
var checkPassword4 = function (value) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(value);
}

// Check password : Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
var checkPassword5 = function (value) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
  return regex.test(value);
}

module.exports = {
  isEmpty: isEmpty ,
  isRealName: isRealName ,
  isEmail: isEmail ,
  chackPassword: checkPassword ,
  chackPassword2: checkPassword2 ,
  chackPassword3: checkPassword3 ,
  chackPassword4: checkPassword4 ,
  chackPassword5: checkPassword5
}
