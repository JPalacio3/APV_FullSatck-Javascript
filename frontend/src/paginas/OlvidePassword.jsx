import { useState } from "react";
import { Link } from "react-router-dom";
import { Alerta } from "../components/Alerta";
import clienteAxios from "../config/axios";

export const OlvidePassword = () => {
    const [ email, setEmail ] = useState( '' );
    const [ alerta, setAlerta ] = useState( {} );

    const handleSubmit = async e => {
        e.preventDefault();

        if ( email === "" || email.length < 6 ) {
            setAlerta( { msg: 'El Email es Obligatorio', error: true } );
            return;
        }

        try {
            const { data } = await clienteAxios.post( '/veterinarios/olvide-password', {
                email
            } );
            setAlerta( { msg: data.msg } );

        } catch ( error ) {
            setAlerta( {
                msg: error.response.data.msg,
                error: true
            } )
            return
        }
    }

    const { msg } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl ">Recupera tu Acceso y Administra tus{" "} <span className="text-black">Pacientes</span></h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alerta
                    alerta={alerta}
                />}

                <form action="" onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Email</label>
                        <input
                            type="email"
                            placeholder="Tu Email"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={e => setEmail( e.target.value )}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Enviar Instrucciones"
                        className="bg-indigo-700 w-full py-3 px-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto "
                    />

                    <nav className="mt-10 lg:flex lg:justify-between">
                        <Link
                            className='block text-center my-5 text-gray-600'
                            to="/registrar"> ¿No tienes una cuenta?, Regístrate</Link>

                        <Link
                            className='block text-center my-5 text-gray-600'
                            to="/"> ¿Ya tienes una cuenta?, Inicia Sesión</Link>
                    </nav>
                </form>
            </div>
        </>
    )
}
