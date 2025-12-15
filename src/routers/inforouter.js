import express from 'express';
import { userSginUp } from '../controller/usercontroller.js';

const router = express.Router();


//router.post('/signin', signinInfo );
router.post('/signup', userSginUp );

export default router;
