import { Router } from "express";
import { showUser,deleteUser,registerUser,editUser } from "../controllers/users.controller.js";
import { validAuthentication } from "../lib/auth.js";

const router = Router();

router.get('/user', validAuthentication, showUser);
router.get('/user/create', registerUser);
router.post('/user/delete', deleteUser);
router.post('/user/edit', editUser);

export default router;