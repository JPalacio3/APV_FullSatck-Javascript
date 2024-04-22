import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, olvidePassword } from '../controllers/veterinarioController.js';
import chechAuth from '../middleware/authMiddleware.js';

// Rutas públicas
router.post( '/', registrar );
router.get( '/confirmar/:token', confirmar );
router.post( '/login', autenticar );
router.post( '/olvide-password', olvidePassword );

// Rutas Privadas
router.get( '/perfil', chechAuth, perfil );






export default router;
