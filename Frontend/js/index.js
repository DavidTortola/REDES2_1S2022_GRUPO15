function Login() {
    console.log("llamando al login")
    var usr = document.getElementById("usr").value;
    var pass = document.getElementById("pass").value;
    var usuario = { username: usr, password: pass };
    $.ajax({
      url: "http://18.119.139.84:4000/user/codigoUsuario",
      dataType: "text",
      type: "post",
      contentType: "application/json; charset=utf-8",
      success: function (data, textStatus, jQxhr) {
        var result = JSON.parse(data);
        console.log(result);
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      },
    });
  }