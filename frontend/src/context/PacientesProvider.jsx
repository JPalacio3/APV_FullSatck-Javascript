import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

export const PacientesContext = createContext();

// eslint-disable-next-line react/prop-types
const PacientesProvider = ( { children } ) => {

    const [ pacientes, setPacientes ] = useState( [] );

    const guardarPaciente = async ( paciente ) => {
        try {
            const token = localStorage.getItem( 'token' );
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post( '/pacientes', paciente, config );

            const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;

            setPacientes( [ pacienteAlmacenado, ...paciente ] );

            console.log( pacienteAlmacenado );

        } catch ( error ) {
            console.log( error.response.data.msg )
        }
    }

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente
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
