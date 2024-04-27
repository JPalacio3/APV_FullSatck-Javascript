import express from 'express';
const router = express.Router();
import {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from '../controllers/pacienteController.js';

import chechAuth from '../middleware/authMiddleware.js';


router.route( '/' )
    .post( chechAuth, agregarPaciente )
    .get( chechAuth, obtenerPacientes );

router.route( '/:id' )
    .get( chechAuth, obtenerPaciente )
    .put( chechAuth, actualizarPaciente )
    .delete( chechAuth, eliminarPaciente );



export default router;
