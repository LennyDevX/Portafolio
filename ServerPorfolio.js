import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors'; // Importa cors

const { Pool } = pg;

dotenv.config({ path: '.env.development.local' });

const app = express();
const port = 3000;

// Aplica el middleware cors a todas las rutas
app.use(cors({
    origin: 'localhost:3000'
}));


// Configura la conexión a la base de datos
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL, // Asegúrate de configurar esta variable de entorno
    ssl: true,
});

app.get('/', (_, res) => {
    res.send('¡Bienvenido a mi servidor!');
});

app.listen(port, async () => {
    try {
        await pool.connect();
        console.log(`La conexión a la base de datos fue exitosa. El servidor está corriendo en el puerto ${port}`);
    } catch (err) {
        console.error('Falló la conexión a la base de datos', err);
    }
});