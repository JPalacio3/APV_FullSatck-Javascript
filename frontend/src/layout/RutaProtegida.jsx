import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    if ( cargando ) return 'Cargando';


    return (
        <>
            <Header />
            {auth?.token ? <Outlet /> : <Navigate to="/" />}




            <Footer />



        </>
    )
}

export default RutaProtegida;
