import { useState } from 'react';
import { Alerta } from './Alerta';

export const Formulario = () => {

    const [ nombre, setNombre ] = useState( '' );
    const [ propietario, setPropietario ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ fecha, setFecha ] = useState( Date.now() );
    const [ sintomas, setSintomas ] = useState( '' );
    const [ alerta, SetAlerta ] = useState( {} );

    const handleSubmit = e => {
        e.preventDefault();

        // Validar el Formulario
        if ( [ nombre, propietario, email, fecha, sintomas ].includes( '' ) ) {
            SetAlerta( {
                msg: 'Todos los Campos son Obligatorios',
                error: true
            } )
            return;
        }
    }

    const { msg } = alerta;

    return (
        <>
            <p className="text-lg text-center mb-10">Añade Tus Pacientes y {''}
                <span className="text-indigo-600 font-bold"> Adminístralos</span>
            </p>

            <form
                className="bg-white py-10 px-5 shadow-md rounded-md mb-10 lg:mb-5"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="text-gray-700 uppercase font-bold"
                    > Nombre Mascota:</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre( e.target.value )}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="text-gray-700 uppercase font-bold"
                    > Nombre del Propietario:</label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Propietario de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario( e.target.value )}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="text-gray-700 uppercase font-bold"
                    > Email del Propietario:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail( e.target.value )}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="fecha"
                        className="text-gray-700 uppercase font-bold"
                    > Fecha de Alta:</label>
                    <input
                        type="date"
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha( e.target.value )}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="text-gray-700 uppercase font-bold"
                    > Síntomas:</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas( e.target.value )}
                    />
                </div>

                {msg && <Alerta alerta={alerta} />}

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white uppercase font-bold cursor-pointer rounded transition-colors"
                    value="Agregar Paciente"
                />
            </form>
        </>
    )
}
