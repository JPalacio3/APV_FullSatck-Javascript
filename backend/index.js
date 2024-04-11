import express from "express";
import dotenv from "dotenv";
import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';

const app = express();
dotenv.config();
conectarDB();

app.use( '/api/veterinarios', veterinarioRoutes );

const PORT = process.env.PORT || 3232;
app.listen( PORT, () => {
    console.log( `servidor funcionando en [ http://127.0.0.1:${PORT} ]` );
} );
