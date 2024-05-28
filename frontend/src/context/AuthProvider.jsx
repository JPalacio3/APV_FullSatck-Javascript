import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ( { children } ) => {
    const [ auth, setAuth ] = useState( {} );
    const [ cargando, setCargando ] = useState( true );

    useEffect( () => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem( 'token' );

            if ( !token ) {
                setCargando( false );
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const { data } = await clienteAxios.get( '/veterinarios/perfil', config );
                setAuth( data );
            } catch ( error ) {
                console.error( "Error al autenticar el usuario:", error );
                localStorage.removeItem( 'token' );
            }

            setCargando( false );
        };

        autenticarUsuario();
    }, [] );

    return (
        <AuthContext.Provider value={{ auth, setAuth, cargando }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
