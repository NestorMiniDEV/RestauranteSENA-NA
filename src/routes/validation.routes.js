import { Router } from "express";
import { logout,signIn,signUp } from "../controllers/validation.controller.js";
const router = Router();

router.get('/validation', (_, res) => {
	res.render('validation/validationUser', {title: 'Ingresar'});
});

router.post('/signin', signIn);

router.post('/signup', signUp);

router.get('/logout', logout)


export default router;