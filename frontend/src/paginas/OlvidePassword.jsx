import { Link } from "react-router-dom";

export const OlvidePassword = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl ">Recupera tu Acceso y administra tus{" "} <span className="text-black">Pacientes</span></h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                <form action="">
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
