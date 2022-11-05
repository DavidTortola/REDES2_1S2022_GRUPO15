function obtenerDatos() {
    console.log("llamando al login")
    // $.ajax({
    //     url: "http://10.0.26.48/user/codigoUsuario",
    //     type: "post",
    //     contentType: "application/json; charset=utf-8",
    //     success: function (data, textStatus, jQxhr) {
    //         var result = JSON.parse(data);
    //         console.log(result);
    //         console.log('hola erix y ambrose');
    //     },
    //     error: function (jqXhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //     },
    // });


    let data = { element: "barium" };
    fetch("http://10.0.26.48/user/codigoUsuario", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}