import { Router } from "express";
const router = Router();

 router.get('/', (_, res) => {
 	res.render('home/home', {title: 'Inicio'});
 });

 router.get('/boards', (_, res) => {
 	res.render('boards/boards', {title: 'Mesas'})
 });

 router.get('/company', (_, res) => {
 	res.render('company/company', {title: 'Nosotros'})
 });

 export default router;