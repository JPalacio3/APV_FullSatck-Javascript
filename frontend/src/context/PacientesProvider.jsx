import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios.jsx";

export const PacientesContext = createContext();

// eslint-disable-next-line react/prop-types
const PacientesProvider = ( { children } ) => {

    const [ pacientes, setPacientes ] = useState( [] );
    const [ paciente, setPaciente ] = useState( {} );

    useEffect( () => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem( 'token' );
                if ( !token ) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios.get( '/pacientes', config );
                setPacientes( data );
            } catch ( error ) {
                console.log( error );
            }
        }
        obtenerPacientes();
    }, [] );

    const guardarPaciente = async ( paciente ) => {

        const token = localStorage.getItem( 'token' );
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if ( paciente.id ) {
            try {
                const { data } = await clienteAxios.put( `/pacientes/${paciente.id}`, paciente, config );
                const pacienteActualizado = pacientes.map( pacienteState => pacienteState._id === data._id
                    ? data : pacienteState );

                setPacientes( pacienteActualizado );



            } catch ( error ) {
                console.log( error )
            }
        } else {
            try {
                const { data } = await clienteAxios.post( '/pacientes', paciente, config );
                const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;

                setPacientes( [ pacienteAlmacenado, ...paciente ] );
            } catch ( error ) {
                console.log( error.response.data.msg );
            }
        }
    }

    const setEdicion = ( paciente ) => {
        setPaciente( paciente );
    }

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                setEdicion,
                paciente
            }}
        >
            {children}
        </PacientesContext.Provider>
    )
}

export {
    PacientesProvider
}

export default PacientesContext;
