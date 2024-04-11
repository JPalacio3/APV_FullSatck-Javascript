const registrar = ( req, res ) => {
    res.send( 'Desde api/veterinarios' )
};

const perfil = ( req, res ) => {
    res.send( 'Desde perfil' )
};


export {
    registrar,
    perfil
}
