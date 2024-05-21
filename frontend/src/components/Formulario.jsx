
export const Formulario = () => {
    return (
        <>
            <p className="text-lg text-center mb-10">Añade Tus Pacientes y {''}
                <span className="text-indigo-600 font-bold"> Adminístralos</span>
            </p>

            <form
                className="bg-white py-10 px-5 shadow-md rounded-md mb-10 lg:mb-0"
            >
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="text-gray-700 uppercase font-bold"
                    > Nombre Mascota:</label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white uppercase font-bold cursor-pointer rounded transition-colors"
                    value="Agregar Paciente"
                />
            </form>
        </>
    )
}
