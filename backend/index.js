import express from "express";
import dotenv from "dotenv";
import conectarDB from './config/db.js';

const app = express();
dotenv.config();
conectarDB();

app.use( '/', ( req, res ) => {
    res.send( 'HOLA MUNDO ' );
} );

const PORT = process.env.PORT || 6969;
app.listen( PORT, () => {
    console.log( `servidor funcionando en [ 127.0.0.1:${PORT} ]` );

} );
