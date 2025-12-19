import express from 'express';
import { allUsers, deleteUser, userSginUp } from '../controller/usercontroller.js';

export const router = express.Router();


//router.post('/signin', signinInfo );
router.post('/signup', userSginUp );
router.delete('/delete/:id', deleteUser );
router.get('/getall', allUsers);

export default router;
