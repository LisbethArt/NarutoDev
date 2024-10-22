const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const port = 3000;

// Configurar el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'assets')));

// Usa las rutas
app.use('/', routes);

app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Server running at ${url}`);
});