import { Router } from "express";
import { insertNew,confirmEditNew,deleteNew,editNew,showNew } from "../controllers/news.controller.js";

const router = Router();

router.get('/new', showNew);
router.post('/new/create', insertNew);
router.post('/new/edit/confirm/:id', confirmEditNew);
router.get('/new/remove/:id', deleteNew);
router.get('/new/edit/:id', editNew);

export default router;