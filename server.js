const express = require('express');
const app = express();
const hbs = require('hbs');

// CONFIGURACIÓN NECESARIA PARA HEROKU
// Port
const port = process.env.PORT || 3000;

// Configuración de archivos estáticos
app.use( express.static(__dirname + '/public') );

// Configuración de partials hbs
hbs.registerPartials( __dirname + '/views/partials');

// Configuración de hbs - EXPRESS Engine
app.set('view engine', 'hbs');

// Configuración de helpers hbs - EXPRESS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


app.get('/', (req, res) => {
    res.render('home', {
        year: new Date().getFullYear(),
        user: {
            name: 'Edvin'
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/info', (req, res) => {
    // res.send('Hola mundo');.
    let salida = {
        "nombre" : "EdvinCV",
        "puntos" : "128412",
        "rango" : "Maestro"
    }
    res.send(salida);
});

app.listen(port, () => {
    console.log("Server escuchando");
});