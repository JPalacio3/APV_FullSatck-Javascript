import { useState } from "react";
import { AdminNav } from "../components/AdminNav.jsx";
import { Alerta } from "../components/Alerta.jsx";

export const CambiarPassword = () => {

    const [ alerta, setAlerta ] = useState( {} );
    const { msg } = alerta;

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }

    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10">Cambiar Contraseña</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''}
                <span className="text-indigo-600 font-bold ">Contraseña aquí</span>
            </p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {msg && <Alerta alerta={alerta} />}
                    <form action=""
                        onSubmit={handleSubmit}
                    >

                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold-text-gray-600">Contraseña Actual</label>
                            <input
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="nombre"
                                placeholder="Escribe tu Contraseña Actual"
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold-text-gray-600">Contraseña Nueva</label>
                            <input
                                type="text"
                                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                                name="nombre"
                                placeholder="Escribe tu Nueva Contraseña"
                            />
                        </div>

                        <input
                            type="submit"
                            value="Actualizar Contraseña"
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
