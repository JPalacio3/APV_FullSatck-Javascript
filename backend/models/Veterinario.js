// Importamos mongoose para usar sus propiedades en la creación del modelo
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import generarId from "../helpers/generarId.js";

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
        type: String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
} );

// Hashear el password antes de que se almacene en la base de datos
veterinarioSchema.pre( 'save', async function ( next ) {
    if ( !this.isModified( 'password' ) ) {
        return next();
    }
    const salt = await bcrypt.genSalt( 10 );
    this.password = bcrypt.hash( this.password, salt );
} );

veterinarioSchema.methods.comprobarPassword = async function ( passwordFormulario ) {
    return await bcrypt.compare( passwordFormulario, this.password );
};

// Registramos en mongoose el Modelo para poder exportarlo y registramos el modelo
const Veterinario = mongoose.model( 'Veterinario', veterinarioSchema );

// Exportamos el modelo
export default Veterinario;


