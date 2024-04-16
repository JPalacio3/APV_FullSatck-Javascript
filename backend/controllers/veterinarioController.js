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






export {
    registrar,
    perfil
}
