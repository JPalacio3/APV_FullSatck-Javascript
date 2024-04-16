import Veterinario from "../models/Veterinario.js";

const registrar = async ( req, res ) => {
    const { nombre, email, password } = req.body;

    // Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne( { email: email } );

    if ( existeUsuario ) {
        const error = new Error( 'El usuario ya se encuentra registrado' );
        return res.status( 400 ).json( { msg: error.message } );
    }

    try {
        // GUARDAR UN NUEVO VETERINARIO
        const veterinario = new Veterinario( req.body );
        const veterinarioGuardado = await veterinario.save();
        res.json( veterinarioGuardado );
    } catch ( error ) {
        console.log( error );
    }
};

const perfil = ( req, res ) => {
    res.json( veterinarioGuardado );
};

const confirmar = async ( req, res ) => {
    const { token } = req.params;

    const usuarioConfirmar = await Veterinario.findOne( { token } );
    if ( !usuarioConfirmar ) {
        const error = new Error( 'Token NO Válido' );
        return res.status( 404 ).json( { msg: error.message } );
    };

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json( { msg: 'Usuario confirmado correctamente' } )
    } catch ( error ) {
        console.log( error )
    }
};

const autenticar = async ( req, res ) => {
    const { email } = req.body;

    // Comprobar si el usuario existe
    const usuario = await Veterinario.findOne( { email } );

    if ( !usuario ) {
        const error = new Error( 'El Usuario NO existe' );
        return res.status( 401 ).json( { msg: error.message } );
    } else {
        res.status( 401 ).json( { msg: 'El usuario no existe' } );
    }

    // Comprobar si el usuario está confirmado
    
};


export {
    registrar,
    perfil,
    confirmar,
    autenticar
}
