import { Link } from "react-router-dom";

export const Registrar = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl ">Crea tu Cuenta y Administra tus
                    {" "}<span className="text-black">Pacientes</span></h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                <form action="">

                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Nombre</label>
                        <input
                            type="text"
                            placeholder="Tu Nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Email</label>
                        <input
                            type="email"
                            placeholder="Tu Email"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Contraseña</label>
                        <input
                            type="password"
                            placeholder="Crea una Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Repite tu Contraseña</label>
                        <input
                            type="password"
                            placeholder="Repetir Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-indigo-700 w-full py-3 px-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto "
                    />
                </form>

                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link
                        className='block text-center my-5 text-gray-600'
                        to="/"> ¿Ya tienes Cuenta?, Inicia Sesión</Link>

                    <Link
                        className='block text-center my-5 text-gray-600'
                        to="/olvide-password"> ¿Olvidaste tu contraseña?</Link>
                </nav>

            </div>
        </>
    )
}

