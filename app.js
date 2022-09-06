/* 
* Archivo de configuración de la aplicación
* En este archivo se configuran los parámetros de la aplicación
* como ser: el puerto, variables de entorno, rutas y middlewares 
*/

const express = require('express') // Importando librería express
const app = express(); // Inicializando express

// Para que el servidor comprenda archivos con formato json
app.use(express.json());

// Importando rutas
app.use(require('./routes/home.routes')); // Importando rutas

// Configurando puerto
app.listen(3000, () => console.log(`Server running on http://localhost:3000`));

// Ejecutar con: npm run dev
// Para detener el servidor: Ctrl + C