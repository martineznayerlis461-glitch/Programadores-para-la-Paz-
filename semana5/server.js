const express = require('express');
const app = express();

app.use(express.json());

// Ruta principal GET
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo GET
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetros GET
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta de reporte POST
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Inicialización del servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
