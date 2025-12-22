import express from 'express';
import { allUsers, deleteUser, signin, signout, userSginUp } from '../controller/usercontroller.js';

export const router = express.Router();


//router.post('/signin', signinInfo );
router.post('/signup', userSginUp );
router.post('/signin', signin );
router.post('/signout', signout );
router.delete('/delete/:id', deleteUser );
router.get('/getall', allUsers);

export default router;
