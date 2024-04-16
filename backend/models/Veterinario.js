// Importamos mongoose para usar sus propiedades en la creación del modelo
import mongoose from "mongoose";

// Creamos la estructura del modelo para interactuar en la base de datos
const veterinarioSchema = mongoose.Schema( {
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null,
        trim: true
    },
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
} );

// Registramos en mongoose el Modelo para poder exportarlo y registramos el modelo
const Veterinario = mongoose.model( 'Veterinario', veterinarioSchema );

// Exportamos el modelo
export default Veterinario;


