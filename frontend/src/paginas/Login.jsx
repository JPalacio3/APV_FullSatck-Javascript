// import React from 'react'

export const Login = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl ">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
            </div>

            <div>
                <form action="">
                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Email</label>
                        <input
                            type="email"
                            placeholder="Email de registro"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <div className="my-5">
                        <label
                            htmlFor=""
                            className="uppercase text-gray-600 block text-xl font-bold "
                        >Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-indigo-700 w-full py-3 px-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto "

                    />
                </form>
            </div>
        </>
    );
};

