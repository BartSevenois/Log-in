var connection = require('./../config/db.config')

module.exports.getUserByUsername = (username, result) => {
  connection.query("select * from users where uid = ?", [username], function(err, user){
    if (err)
      return result(err, null);

    return result(null, user);
  });
}

module.exports.register = (firstName, lastName, email, username, password, result) => {
  var d = new Date();
d = new Date(d.getTime() - 3000000);
var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
  connection.query("INSERT INTO users (first_name, last_name, email, uid, pwd, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)", [firstName, lastName, email, username, password, date_format_str, date_format_str], function(err, user) {
    console.log('SQL: ' + err)
    console.log('----')
    console.log('user: ' + user)

    if (err)
      return result(err, null)

    return result(null, user);
  })
}
