function obtenerDatos() {
    console.log("llamando al login")
    $.ajax({
        url: "http://localhost:4000/user/codigoUsuario",
        type: "post",
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jQxhr) {
            var result = JSON.parse(data);
            console.log(result);
            console.log('hola erix y ambrose');
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}