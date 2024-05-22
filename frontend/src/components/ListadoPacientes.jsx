import PacientesContext from "../context/PacientesProvider";
import usePacientes from "../hooks/usePacientes";
import { Paciente } from "./Paciente";

export const ListadoPacientes = () => {

    const { pacientes } = usePacientes();
    return (
        <>
            {pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de Pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center font-bold"  >Administra Tus {''}
                        <span className="text-indigo-600 font-bold" >Pacientes y Citas</span>
                    </p>

                    {pacientes.map( paciente => [
                        <Paciente
                            key={paciente._id}
                            paciente={paciente}
                        />
                    ] )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No Hay Pacientes Registrados
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center font-bold"  >Comienza agregando Pacientes {''}
                        <span className="text-indigo-600 font-bold" >Para administrarlos desde este lugar</span></p>
                </>
            )
            }
        </>
    )
}
