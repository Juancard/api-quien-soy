
module.exports = function(req,resp){
    var headers = req.headers;
    var ip = headers["x-forwarded-for"];
    var idioma = headers["accept-language"].split(",")[0];
    var software = headers["user-agent"].split(/[()]/)[1];
    var objetoHeaders = JSON.stringify({
        "direccion-ip" : ip,
        "idioma" : idioma,
        "software" : software
    });
    resp.end(objetoHeaders);
}

 