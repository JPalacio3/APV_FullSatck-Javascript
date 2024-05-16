import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    if ( cargando ) return 'Cargando';
    { auth?._id ? <Outlet /> : <Navigate to="/" /> }


    return (

        <>
            <h1>Esto es una Ruta Protegida</h1>



        </>
    )
}

export default RutaProtegida;
