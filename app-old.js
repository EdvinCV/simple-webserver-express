const http = require('http');

http.createServer( (req, res) => {

    // Mandar Headers
    res.writeHead(200, { 'Content-Type': 'application/json'});

    // Respuesta JSON
    let salida = {
        "nombre" : "EdvinCV",
        "puntos" : "128412",
        "rango" : "Maestro"
    }


    // Respuesta simple
      //res.write("Hola mundo");

    // Respuesta JSON
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log("Escuchando en puerto: 8080");