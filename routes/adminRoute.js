import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
import {
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
  addDoctor,
  allDoctors,
  adminDashboard
} from '../controllers/adminController.js';
const adminRouter = express.Router();

// Rutas del administrador
router.post('/login', loginAdmin); // Ruta para login de administrador
router.get('/appointments', authAdmin, appointmentsAdmin); // Obtener citas (protegido)
router.post('/cancel-appointment', authAdmin, appointmentCancel); // Cancelar cita (protegido)
router.post('/add-doctor', authAdmin, addDoctor); // Agregar doctor (protegido)
router.get('/doctors', authAdmin, allDoctors); // Obtener todos los doctores (protegido)
router.get('/dashboard', authAdmin, adminDashboard); // Obtener datos del dashboard (protegido)


export default adminRouter;
