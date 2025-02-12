 import { Router } from "express";
 const router = Router();
 import { validAuthentication } from "../lib/auth.js";

 router.get('/orders', validAuthentication, (req, res) => {
 	res.render('orders/orders', {title: 'pedidos'});
 })

 export default router;