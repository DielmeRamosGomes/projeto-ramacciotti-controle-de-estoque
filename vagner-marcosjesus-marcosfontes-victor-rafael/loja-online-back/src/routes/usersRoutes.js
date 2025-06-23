import express from 'express';
import UsersController from '../controllers/usersController.js';

const router = express.Router();
const usersController = new UsersController();

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/:id', usersController.getUserById);
router.get('/', usersController.getAllUsers);
router.patch('/:id/inactive', usersController.markUserInactive);

export default router;