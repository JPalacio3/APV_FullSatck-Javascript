import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailOlvidePassword from "../helpers/emailOlvidePassword.js";

const registrar = async ( req, res ) => {
    const { email, nombre } = req.body;

    // Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne( { email } );

    if ( existeUsuario ) {
        const error = new Error( "El usuario ya se encuentra registrado" );
        return res.status( 400 ).json( { msg: error.message } );
    }

    try {
        // GUARDAR UN NUEVO VETERINARIO
        const veterinario = new Veterinario( req.body );
        const veterinarioGuardado = await veterinario.save();

        // Enviar el email
        emailRegistro( {
            email,
            nombre,
            token: veterinarioGuardado.token
        } );

        res.json( { veterinarioGuardado } );
    } catch ( error ) {
        console.log( error );
    }
};

const perfil = ( req, res ) => {
    const { veterinario } = req;
    res.json( { veterinario } );
};

const confirmar = async ( req, res ) => {
    const { token } = req.params;
    const usuarioConfirmar = await Veterinario.findOne( { token } );

    if ( !usuarioConfirmar ) {
        const error = new Error( "Token no válido" );
        return res.status( 404 ).json( { msg: error.message } );
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json( { msg: "Usuario Confirmado Correctamente" } );
    } catch ( error ) {
        console.log( error );
    }
};

const autenticar = async ( req, res ) => {
    const { email, password } = req.body;

    // Comprobar si el usuario existe
    const usuario = await Veterinario.findOne( { email } );

    if ( !usuario ) {
        const error = new Error( 'El Usuario NO existe' );
        return res.status( 401 ).json( { msg: error.message } );
    }

    // Comprobar si el usuario está confirmado
    if ( !usuario.confirmado ) {
        const error = new Error( 'Tu Cuenta No ha sido confirmada' );
        return res.status( 403 ).json( { msg: error.message } );
    }

    // Revisar si el password corresponde
    if ( await usuario.comprobarPassword( password ) ) {
        // Autenticar el usuario

        res.json( {
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT( usuario.id ),
        } );
    } else {
        const error = new Error( 'Contraseña Incorrecta' );
        return res.status( 403 ).json( { msg: error.message } );
    }
};

const olvidePassword = async ( req, res ) => {
    const { email } = req.body;
    const existeVeterinario = await Veterinario.findOne( { email } );

    if ( !existeVeterinario ) {
        const error = new Error( 'El Usuario NO Existe' );
        return res.status( 400 ).json( { msg: error.message } );
    }

    try {
        existeVeterinario.token = generarId();
        await existeVeterinario.save();

        // Enviar Email con instrucciones
        emailOlvidePassword( {
            email,
            nombre: existeVeterinario.nombre,
            token: existeVeterinario.token
        } );

        res.json( { msg: 'Hemos enviado un Email con las instucciones' } );

    } catch ( error ) {
        console.log( error );
    };
};

const comprobarToken = async ( req, res ) => {
    const { token } = req.params;
    const tokenValido = await Veterinario.findOne( { token } );

    if ( tokenValido ) {
        // El token es válido, el usuario existe
        res.json( { msg: 'Token Válido y el usuario existe' } );
    }

    if ( !tokenValido ) {
        const error = new Error( 'Token NO válido' );
        return res.status( 400 ).json( { msg: error.message } );
    }
}

const nuevoPassword = async ( req, res ) => {
    const { token } = req.params;
    const { password } = req.body;
    const veterinario = await Veterinario.findOne( { token } );

    if ( !veterinario ) {
        const error = new Error( 'Hubo un error' );
        return res.status( 400 ).json( { msg: error.message } );
    }

    try {
        veterinario.token = null;
        veterinario.password = password;
        await veterinario.save();
        res.json( { msg: 'El Password se ha cambiado exitosamente' } );
    } catch ( error ) {
        console.log( error );
    }
}

export {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
}
