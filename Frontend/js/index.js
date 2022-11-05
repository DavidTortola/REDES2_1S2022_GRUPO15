function obtenerDatos() {
    console.log("llamando al login")
    $.ajax({
        url: "http://44.197.229.70:3000/api/home",
        type: "get",
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            //var result = JSON.parse(data);
            //console.log(result);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}