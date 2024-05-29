import express from 'express';
const router = express.Router();
import {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';  // Corregido aquí

// Rutas públicas
router.post( '/', registrar );
router.get( '/confirmar/:token', confirmar );
router.post( '/login', autenticar );
router.post( '/olvide-password', olvidePassword );
router.route( '/olvide-password/:token' ).get( comprobarToken ).post( nuevoPassword );

// Rutas Privadas
router.get( '/perfil', checkAuth, perfil );  // Corregido aquí
router.put( '/perfil/:id', checkAuth, actualizarPerfil );  // Corregido aquí
router.put( '/actualizar-password', checkAuth, actualizarPassword );  // Corregido aquí

export default router;
