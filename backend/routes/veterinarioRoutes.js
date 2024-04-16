import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar } from '../controllers/veterinarioController.js';
import chechAuth from '../middleware/authMiddleware.js';

// Rutas públicas
router.post( '/', registrar );
router.get( '/confirmar/:token', confirmar );
router.post( '/login', autenticar );

// Rutas Privadas
router.get( '/perfil', chechAuth, perfil );






export default router;
